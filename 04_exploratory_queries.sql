-- 1. Detailed Order Information
-- Shows all orders with product details and categories
SELECT 
    o.order_id,
    o.customer_name,
    o.status,
    p.name as product_name,
    oi.quantity,
    oi.unit_price,
    oi.subtotal,
    c.name as category
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
ORDER BY o.order_id, p.name;

-- 2. Total Revenue per Category
SELECT 
    c.name as category,
    COUNT(DISTINCT o.order_id) as total_orders,
    SUM(oi.subtotal) as total_revenue,
    ROUND(AVG(oi.subtotal), 2) as avg_order_value
FROM categories c
JOIN products p ON c.category_id = p.category_id
JOIN order_items oi ON p.product_id = oi.product_id
JOIN orders o ON oi.order_id = o.order_id
GROUP BY c.name
ORDER BY total_revenue DESC;

-- 3. Customer Spending Analysis
SELECT 
    o.customer_name,
    COUNT(DISTINCT o.order_id) as total_orders,
    SUM(oi.subtotal) as total_spent,
    ROUND(AVG(oi.subtotal), 2) as avg_order_value
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
GROUP BY o.customer_name
ORDER BY total_spent DESC;

-- 4. Category Performance Summary (using product_sales view)
SELECT 
    category,
    COUNT(*) as total_products,
    SUM(total_units_sold) as total_units_sold,
    SUM(total_revenue) as total_revenue,
    ROUND(AVG(total_revenue), 2) as avg_product_revenue
FROM product_sales
GROUP BY category
ORDER BY total_revenue DESC;

-- 5. Orders with Multiple Items (2 or more items)
SELECT 
    order_id,
    customer_name,
    order_date,
    status,
    total_amount,
    total_items
FROM order_summary
WHERE total_items >= 2
ORDER BY total_items DESC, total_amount DESC;

-- 6. Completed Orders Summary (using order_summary view)
SELECT 
    COUNT(*) as total_completed_orders,
    SUM(total_amount) as total_revenue,
    ROUND(AVG(total_amount), 2) as avg_order_value,
    MAX(total_amount) as highest_order_value,
    MIN(total_amount) as lowest_order_value
FROM order_summary
WHERE status = 'Completed';

-- 7. Top Products in Completed Orders
SELECT 
    ps.name as product_name,
    ps.category,
    COUNT(DISTINCT os.order_id) as number_of_orders,
    SUM(ps.total_units_sold) as total_units_sold,
    SUM(ps.total_revenue) as total_revenue
FROM product_sales ps
JOIN order_summary os ON os.order_id IN (
    SELECT order_id 
    FROM order_items oi 
    WHERE oi.product_id = ps.product_id
)
WHERE os.status = 'Completed'
GROUP BY ps.name, ps.category
ORDER BY total_revenue DESC;

-- 8. Average Order Value by Status
SELECT 
    status,
    COUNT(*) as total_orders,
    ROUND(AVG(total_amount), 2) as avg_order_value,
    MIN(total_amount) as min_order_value,
    MAX(total_amount) as max_order_value
FROM order_summary
GROUP BY status
ORDER BY avg_order_value DESC; 
