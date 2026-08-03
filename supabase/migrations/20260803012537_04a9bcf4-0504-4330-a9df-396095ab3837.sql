
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);
grant select, update on public.profiles to authenticated;
grant all on public.profiles to service_role;
alter table public.profiles enable row level security;

create or replace function public.is_admin(_uid uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = _uid and is_admin = true)
$$;

create policy "Users read own profile" on public.profiles for select to authenticated using (auth.uid() = id or public.is_admin(auth.uid()));
create policy "Admins update profiles" on public.profiles for update to authenticated using (public.is_admin(auth.uid()));

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email) on conflict do nothing;
  return new;
end; $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  price numeric not null,
  description text,
  image_url text,
  in_stock boolean not null default true,
  created_at timestamptz not null default now()
);
grant select on public.products to anon;
grant select, insert, update, delete on public.products to authenticated;
grant all on public.products to service_role;
alter table public.products enable row level security;
create policy "Anyone can read products" on public.products for select using (true);
create policy "Admins manage products" on public.products for all to authenticated using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  product_type text not null,
  product_id uuid references public.products(id) on delete set null,
  quantity integer not null default 1,
  size text,
  design_file_url text,
  notes text,
  contact_name text not null,
  contact_phone text not null,
  delivery_address text not null,
  status text not null default 'Pending',
  total_amount numeric,
  created_at timestamptz not null default now()
);
grant insert on public.orders to anon;
grant select, insert, update, delete on public.orders to authenticated;
grant all on public.orders to service_role;
alter table public.orders enable row level security;
create policy "Anyone can place an order" on public.orders for insert with check (true);
create policy "Admins read orders" on public.orders for select to authenticated using (public.is_admin(auth.uid()));
create policy "Admins update orders" on public.orders for update to authenticated using (public.is_admin(auth.uid()));

insert into public.products (name, category, price, description) values
  ('Classic Tee', 'T-Shirts', 250, 'Full-color sublimation on white polyester tee. XS to 5XL.'),
  ('Sports Jersey', 'T-Shirts', 350, 'Custom sublimated sports jersey with names and numbers.'),
  ('Event Shirt', 'T-Shirts', 280, 'Bulk event and team shirts with your design.'),
  ('Custom Design Tee', 'T-Shirts', 300, 'Upload your own artwork for a one-of-a-kind tee.')
on conflict do nothing;

create policy "Anyone can upload designs" on storage.objects for insert with check (bucket_id = 'designs');
create policy "Admins read designs" on storage.objects for select to authenticated using (bucket_id = 'designs' and public.is_admin(auth.uid()));
