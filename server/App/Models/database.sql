DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fName VARCHAR(100) NOT NULL,
    lName VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255),
);

DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products(
    prod_id SERIAL PRIMARY KEY,
    prod_name VARCHAR(225),
    prod_desc text,
    prod_price decimal(8,2),
    unit int,
    size int,
    image text,
    brand VARCHAR(100)
);

DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders(
    orderid SERIAL PRIMARY KEY,
    user_id integer,
    address varchar(100),
    city varchar(100),
    town varchar(100),
    zip varchar(10),
    delivery_price decimal(8,2),
    totalCost decimal(8,2),
    orderdate TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS orderItems CASCADE;
CREATE TABLE orderItems(
    o_Item SERIAL PRIMARY KEY,
    orderid integer,
    product_id integer,
    actualprice decimal(8,2),
    quantity integer,
    FOREIGN KEY(orderid) REFERENCES orders(orderid),
    FOREIGN KEY(product_id) REFERENCES products(prod_id)
);

