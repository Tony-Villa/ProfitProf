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
id PRIMARY KEY DEFAULT uuid_generate_v4(),
user_id uuid REFERENCES users (id) ON DELETE CASCADE,
expense_type category ,
expense_subtype category,
description VARCHAR(1024),
value INT NOT NULL DEFAULT 0,
);

-- INCOME

CREATE TABLE income (
    id PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users (id) ON DELETE CASCADE,
    fixed_income INT NOT NULL,
    variable_income INT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- GOALS

CREATE TYPE goal_type AS ENUM ('short term', 'mid term', 'long term');
CREATE TYPE goal_subtype AS ENUM ('vacation', 'credit card payment', 'house downpayment', 'car purchase', 'college', 'loan payment', 'retirement', 'emergency', 'other goal');

CREATE TABLE goals (
    id PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users (id) ON DELETE CASCADE,
    goal_type category NOT NULL,
    goal_subtype category NOT NULL,
    description VARCHAR(1024),
    value INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);