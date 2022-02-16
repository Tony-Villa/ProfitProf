-- USER SCHEMA

CREATE TABLE users(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(1024) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TYPE category AS ENUM ('fixed', 'non-fixed');

CREATE TABLE expenses (
id PRIMARY KEY DEFAULT uuid_generate_v4(),
user_id uuid REFERENCES users (id) ON DELETE CASCADE,
expense_type category,
)