const {pool} = require ('../config/db.config');
const {v4: generateId} = require('uuid');

async function addProductToCart(req, res) {
    const {account_id, cart_id, product_id, type, total_ordered, time_period} = req.body;
        
    try {
        const cart_product_id = generateId();
        let query = {
            text: `INSERT INTO cart (cart_owner_id, id, cart_product_id) VALUES ($1, $2, $3, $4) RETURNING *;`,
            values: [account_id, cart_id, cart_product_id]
        }
        const resultCart = await pool.query(query);
        const cart = resultCart.rows[0];

        query = {
            text: `INSERT INTO cart_product (id, product_id, type, total_ordered, time_period)
                    VALUES ($1, $2, $3, $4) RETURNING *;`
        };
        const values = [cart_product_id, product_id, type, total_ordered, time_period];
        const resultCartProduct = await pool.query(query, values);
        const cartProduct = resultCartProduct.rows[0];
        res.status(201).json({message: "Added to cart successfully", Cart: cart, CartProduct: cartProduct});
    } catch (err) {
        console.error(err);
        res.status(501).json({message: 'Failed to add product to cart', error: err});
    }
}

async function getCart(req, res) {
    const cart_owned_id = req.body;

    //Find the cart
    try {
        const query = `SELECT cp.*
                        FROM cart_product cp
                        JOIN cart c ON cp.id = c.cart_product_id
                        WHERE c.id = '${cart_owned_id};`;
        const result = await pool.query(query);
        const cart = result.rows;

        if(cart) {
            res.status(200).json({message: 'Got the cart successfully', cart: cart});
        } else {
            res.status(404).json({message: 'No carts are found'});
        }
    } catch(err) {
        console.error(err);
        res.status(501).json({message: 'Failed to get cart', error: err});
    }
}

async function removeProductFromCart(req, res) {
    const id = req.body;

    //Find the product that has the key
    try {
        const query = `DELETE FROM cart_product
                        WHERE id = '${id}';`;
        const result = await pool.query(query);
        res.status(200).json({message: 'Removed the product successfully', product: product});
    } catch(err) {
        console.error(err);
        res.status(501).json({message: 'Failed to get product', error: err});
    }
}

module.exports = {
    addProductToCart,
    getCart,
    removeProductFromCart
}