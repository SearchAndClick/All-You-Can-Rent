CREATE TABLE "account" (
  "account_id" text PRIMARY KEY,
  "username" text NOT NULL,
  "password" text NOT NULL,
  "email" text NOT NULL,
  "product_owned_id" text NOT NULL,
  "cart_owned_id" text NOT NULL
);

CREATE TABLE "product" (
  "owner_id" text,
  "id" text PRIMARY KEY,
  "name" text,
  "stock" int,
  "price" int,
  "photo" text,
  "types" text,
  "category" text
);

CREATE TABLE "cart" (
  "cart_owner_id" text,
  "id" text PRIMARY KEY,
  "cart_product_id" text,
  "total_price" int
);

CREATE TABLE "history" (
  "id" text PRIMARY KEY,
  "transaction_owner_id" text,
  "transaction_product_id" text,
  "total_price" int,
  "deadline" timestamp,
  "status" bool
);

CREATE TABLE "cart_product" (
  "id" text PRIMARY KEY,
  "product_id" text,
  "type" text,
  "total_ordered" int,
  "time_period" timestamp
);

ALTER TABLE "account" ADD FOREIGN KEY ("product_owned_id") REFERENCES "product" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("owner_id") REFERENCES "account" ("account_id");

ALTER TABLE "account" ADD FOREIGN KEY ("cart_owned_id") REFERENCES "cart" ("id");

ALTER TABLE "cart" ADD FOREIGN KEY ("cart_owner_id") REFERENCES "account" ("account_id");

ALTER TABLE "cart" ADD FOREIGN KEY ("cart_product_id") REFERENCES "cart_product" ("id");

ALTER TABLE "history" ADD FOREIGN KEY ("transaction_owner_id") REFERENCES "account" ("account_id");

ALTER TABLE "history" ADD FOREIGN KEY ("transaction_product_id") REFERENCES "product" ("id");

ALTER TABLE "cart_product" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");


-- Menambahkan entri ke dalam tabel account
INSERT INTO "account" (account_id, username, password, email, product_owned_id, cart_owned_id) VALUES
  ('550e8400-e29b-41d4-a716-446655440020', 'john_doe123', 'Passw0rd!', 'john.doe@example.com', '550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440030'),
  ('550e8400-e29b-41d4-a716-446655440021', 'jane.smith', 'SecurePass123', 'jane.smith@example.com', '550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440031'),
  ('550e8400-e29b-41d4-a716-446655440022', 'alice_wonder', 'Alice2020!', 'alice.wonder@example.com', '550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440032'),
  ('550e8400-e29b-41d4-a716-446655440023', 'bob_builder', 'B0bTheBui1der', 'bob.builder@example.com', '550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440033'),
  ('550e8400-e29b-41d4-a716-446655440024', 'charlie_chaplin', 'CharlieChap123', 'charlie.chaplin@example.com', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440034');

-- Menambahkan entri ke dalam tabel product
INSERT INTO "product" (id, owner_id, name, stock, price, photo, types, category) VALUES
  ('550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440024', 'Cars Movie (2004)', 10, 15000, 'photo1.jpg', '1440p', 'Movie/Film'),
  ('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440020', 'Cars 2 Movie (2011)', 20, 20000, 'photo2.jpg', '1080p', 'Movie/Film'),
  ('550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440021', 'Cars 3 Movie (2017)', 30, 25000, 'photo3.jpg', '720p', 'Movie/Film'),
  ('550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440022', 'Toyota Supra MK4', 5, 500000, 'photo4.jpg', 'Black/Orange', 'Cars'),
  ('550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440023', 'Boxy Denim Hat', 50, 30000, 'photo5.jpg', 'Small', 'Hats');

-- Menambahkan entri ke dalam tabel cart_product
INSERT INTO "cart_product" (id, product_id, type, total_ordered, time_period) VALUES
  ('550e8400-e29b-41d4-a716-446655440010', '550e8400-e29b-41d4-a716-446655440000', '1440p', 2, now()),
  ('550e8400-e29b-41d4-a716-446655440011', '550e8400-e29b-41d4-a716-446655440001', '1080p', 3, now()),
  ('550e8400-e29b-41d4-a716-446655440012', '550e8400-e29b-41d4-a716-446655440002', '720p', 1, now()),
  ('550e8400-e29b-41d4-a716-446655440013', '550e8400-e29b-41d4-a716-446655440003', 'Black/Orange', 1, now()),
  ('550e8400-e29b-41d4-a716-446655440014', '550e8400-e29b-41d4-a716-446655440004', 'Small', 5, now());

-- Menambahkan entri ke dalam tabel cart
INSERT INTO "cart" (cart_owner_id, id, cart_product_id, total_price) VALUES
  ('550e8400-e29b-41d4-a716-446655440020', '550e8400-e29b-41d4-a716-446655440030', '550e8400-e29b-41d4-a716-446655440010', 30000),
  ('550e8400-e29b-41d4-a716-446655440021', '550e8400-e29b-41d4-a716-446655440031', '550e8400-e29b-41d4-a716-446655440011', 60000),
  ('550e8400-e29b-41d4-a716-446655440022', '550e8400-e29b-41d4-a716-446655440032', '550e8400-e29b-41d4-a716-446655440012', 25000),
  ('550e8400-e29b-41d4-a716-446655440023', '550e8400-e29b-41d4-a716-446655440033', '550e8400-e29b-41d4-a716-446655440013', 500000),
  ('550e8400-e29b-41d4-a716-446655440024', '550e8400-e29b-41d4-a716-446655440034', '550e8400-e29b-41d4-a716-446655440014', 150000);

-- Menambahkan entri ke dalam tabel history
INSERT INTO "history" (id, transaction_owner_id, transaction_product_id, total_price, deadline, status) VALUES
  ('550e8400-e29b-41d4-a716-446655440040', '550e8400-e29b-41d4-a716-446655440020', '550e8400-e29b-41d4-a716-446655440000', 30000, now() + interval '3 days', true),
  ('550e8400-e29b-41d4-a716-446655440041', '550e8400-e29b-41d4-a716-446655440021', '550e8400-e29b-41d4-a716-446655440001', 60000, now() + interval '3 days', true),
  ('550e8400-e29b-41d4-a716-446655440042', '550e8400-e29b-41d4-a716-446655440022', '550e8400-e29b-41d4-a716-446655440002', 25000, now() + interval '3 days', true),
  ('550e8400-e29b-41d4-a716-446655440043', '550e8400-e29b-41d4-a716-446655440023', '550e8400-e29b-41d4-a716-446655440003', 500000, now() + interval '3 days', false),
  ('550e8400-e29b-41d4-a716-446655440044', '550e8400-e29b-41d4-a716-446655440024', '550e8400-e29b-41d4-a716-446655440004', 150000, now() + interval '3 days', false);
