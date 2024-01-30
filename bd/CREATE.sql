-- Crear la base de datos
CREATE DATABASE ecommerceDesmalezadora;

-- Conectar a la base de datos
\c ecommerceDesmalezadora

-- Crear la tabla de usuarios
CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    idAdress SERIAL,
    name VARCHAR(100),
    lastName VARCHAR(100),
    idAdress SERIAL,
    email VARCHAR(255) UNIQUE,
    contrasena VARCHAR(255),
    role VARCHAR(255),
);

-- Crear la tabla de productos
CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    idCart INT REFERENCES cart(id),
    name VARCHAR(100),
    description VARCHAR(100),
    price   INT,
    -- Otros atributos de producto
);

-- Crear la tabla de carritos
CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES usuarios(id),
    -- Otros atributos de carrito
);

-- Crear la tabla intermedia para productos en carritos
CREATE TABLE Product-Cart (
    id SERIAL PRIMARY KEY,
    id_cart INT REFERENCES cart(id),
    id_product INT REFERENCES product(id),
    quantity INT,
);
-- Crear la tabla de direccion de envio
CREATE TABLE shippingAdrress (
    id SERIAL PRIMARY KEY,
    region VARCHAR(100),
    comuna VARCHAR(100),
    calle VARCHAR(100),
    numero INT,
    depto INT,
    postalCode INT,
    -- Otros atributos de carrito
);

-- Crear la tabla de orden
CREATE TABLE order (
    id SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES usuarios(id),
    id_shippingAdrress INT REFERENCES shippingAdrress(id),
    id_cart INT REFERENCES cart(id),
    date TIMESTAMP,
    amount INT,
    paymentMethod INT,
);

-- Puedes agregar más tablas según las necesidades de tu aplicación

-- Finalizar la transacción
COMMIT;