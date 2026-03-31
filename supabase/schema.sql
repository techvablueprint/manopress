-- Profiles (auto-created on signup — admin accounts only)
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  is_admin boolean not null default false,
  created_at timestamptz default now()
);

alter table profiles enable row level security;
create policy "Users read own profile" on profiles for select using (auth.uid() = id);
create policy "Admins read all profiles" on profiles for select using (
  exists (select 1 from profiles where id = auth.uid() and is_admin = true)
);
create policy "Admins update profiles" on profiles for update using (
  exists (select 1 from profiles where id = auth.uid() and is_admin = true)
);

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users for each row execute procedure handle_new_user();

-- Products (product types + pricing)
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  price numeric not null,
  description text,
  image_url text,
  in_stock boolean default true,
  created_at timestamptz default now()
);

alter table products enable row level security;
create policy "Anyone can read products" on products for select using (true);
create policy "Admins manage products" on products for all using (
  exists (select 1 from profiles where id = auth.uid() and is_admin = true)
);

-- Orders (guest orders — no user_id required)
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  product_type text not null,
  product_id uuid references products(id) on delete set null,
  quantity integer not null default 1,
  size text,
  design_file_url text,
  notes text,
  contact_name text not null,
  contact_phone text not null,
  delivery_address text not null,
  status text not null default 'Pending',
  total_amount numeric,
  created_at timestamptz default now()
);

alter table orders enable row level security;
-- Guest orders: anyone can insert, only admins can read/update
create policy "Anyone can insert orders" on orders for insert with check (true);
create policy "Admins read all orders" on orders for select using (
  exists (select 1 from profiles where id = auth.uid() and is_admin = true)
);
create policy "Admins update orders" on orders for update using (
  exists (select 1 from profiles where id = auth.uid() and is_admin = true)
);

-- Seed products
insert into products (name, category, price, description) values
  ('Custom T-Shirt', 'T-Shirts', 250, 'Full-color sublimation on white polyester tee. XS to 5XL.'),
  ('Sublimation Mug', 'Mugs', 150, 'Wrap-around ceramic mug print. Dishwasher-safe.'),
  ('Net Cap', 'Caps', 200, 'Sublimation on net cap / trucker hat.'),
  ('Mousepad', 'Mousepads', 180, 'Thick mousepad with non-slip rubber base.'),
  ('Ceramic Plate', 'Plates', 220, 'Photo plate, decorative or personalized gift.'),
  ('Jigsaw Puzzle', 'Puzzles', 300, 'Custom photo puzzle. Multiple piece counts.'),
  ('Metal Sheet Print', 'Metal Sheets', 350, 'Full-color print on aluminum sheet.')
on conflict do nothing;
