
drop policy if exists "Anyone can upload designs" on storage.objects;
drop policy if exists "Anyone can upload jpg or png designs" on storage.objects;
create policy "Anyone can upload jpg or png designs" on storage.objects
for insert with check (
  bucket_id = 'designs'
  and lower(storage.extension(name)) in ('jpg','jpeg','png')
);
delete from public.orders where contact_name = 'Test' and contact_phone = '09171234567';
