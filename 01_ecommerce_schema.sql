-- Drop existing tables if they exist
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;

-- Create product categories table
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    description TEXT
);

-- Create products table
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10,2),
    category_id INTEGER REFERENCES categories(category_id),
    stock_quantity INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create orders table
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20),
    total_amount DECIMAL(10,2),
    customer_email VARCHAR(100),
    customer_name VARCHAR(100)
);

-- Create order_items table
CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(order_id),
    product_id INTEGER REFERENCES products(product_id),
    quantity INTEGER,
    unit_price DECIMAL(10,2),
    subtotal DECIMAL(10,2)
);

-- Insert sample data into categories
INSERT INTO categories (name, description) VALUES
('Electronics', 'Electronic devices and accessories'),
('Clothing', 'Apparel and fashion items'),
('Books', 'Books and publications'),
('Home & Garden', 'Home decor and gardening supplies');

-- Insert sample products
INSERT INTO products (name, description, price, category_id, stock_quantity) VALUES
('Smartphone X', 'Latest smartphone with advanced features', 999.99, 1, 50),
('Laptop Pro', 'High-performance laptop', 1499.99, 1, 30),
('Cotton T-Shirt', 'Comfortable casual t-shirt', 29.99, 2, 100),
('Garden Tools Set', 'Complete set of essential garden tools', 89.99, 4, 25),
('SQL Programming Guide', 'Comprehensive guide to SQL', 49.99, 3, 75);

-- Insert sample orders
INSERT INTO orders (customer_name, customer_email, status, total_amount) VALUES
('John Doe', 'john.doe@email.com', 'Completed', 1029.98),
('Jane Smith', 'jane.smith@email.com', 'Processing', 1499.99),
('Mike Johnson', 'mike.j@email.com', 'Completed', 139.98),
('Sarah Williams', 'sarah.w@email.com', 'Shipped', 49.99);

-- Insert sample order items
INSERT INTO order_items (order_id, product_id, quantity, unit_price, subtotal) VALUES
(1, 1, 1, 999.99, 999.99),
(1, 3, 1, 29.99, 29.99),
(2, 2, 1, 1499.99, 1499.99),
(3, 3, 2, 29.99, 59.98),
(3, 4, 1, 89.99, 89.99),
(4, 5, 1, 49.99, 49.99);
