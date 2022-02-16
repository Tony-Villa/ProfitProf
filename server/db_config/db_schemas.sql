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


-- EXPENSES

CREATE TYPE expense_type AS ENUM ('fixed', 'variable');
CREATE TYPE expense_subtype AS ENUM ('rent', 'internet', 'auto loan', 'auto insurance', 'health insurance', 'student Loan', 'subscriptions', 'fitness', 'utilites', 'food', 'transportation' ,'misc');

CREATE TABLE expenses (
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
user_id uuid REFERENCES users (id) ON DELETE CASCADE,
expense_type expense_type,
expense_subtype expense_subtype,
description VARCHAR(1024),
value INT NOT NULL DEFAULT 0
);

-- INCOME

CREATE TABLE income (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users (id) ON DELETE CASCADE,
    fixed_income INT NOT NULL,
    variable_income INT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- GOALS

-- add total amount && monthly cap && due date

CREATE TYPE goal_type AS ENUM ('short term', 'mid term', 'long term');
CREATE TYPE goal_subtype AS ENUM ('vacation', 'credit card payment', 'house downpayment', 'car purchase', 'college', 'loan payment', 'retirement', 'emergency', 'other goal');

CREATE TABLE goals (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users (id) ON DELETE CASCADE,
    goal_type goal_type,
    goal_subtype goal_subtype,
    description VARCHAR(255),
    total_amount INT NOT NULL DEFAULT 0,
    monthly_cap INT NOT NULL DEFAULT 0,
    due_date DATE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
