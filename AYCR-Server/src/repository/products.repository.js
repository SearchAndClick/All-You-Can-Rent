const {pool} = require ('../config/db.config');
const {v4: generateId} = require('uuid');

async function registerProduct(req, res) {
    const {owner_id, name, stock, price, photo, types} = req.body;
        
    try {
        const id = generateId();
        const query = {
            text: `INSERT INTO products (owner_id, id, name, stock, price, photo
                    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`
        };
        const values = [owner_id, id, name, stock, price, photo, types];
        const result = await pool.query(query, values);
        const product = result.rows[0];
        res.status(201).json({message: "Registered the product successfully", product: product});
    } catch (err) {
        console.error(err);
        res.status(501).json({message: 'Failed to register product', error: err});
    }
}

async function getAllProducts(req, res) {
    try {
        const query = {
            text: `SELECT * FROM products;`
        };
        const result = await pool.query(query);
        const products = result.rows;
        if(!products) {
            return res.status(404).json({message: "No products are on market"});
        }
        res.status(200).json({message: "Retrieved all products successfully", products: products});
    } catch (err) {
        console.error(err);
        res.status(501).json({message: 'Failed to retrieve products', error: err});
    }
}

async function getProductById(req, res) {
    const id = req.body;

    //Find the product
    try {
        const query = `SELECT * FROM product WHERE id = ${id};`;
        const result = await pool.query(query);
        const product = result.rows[0];

        if(product) {
            res.status(200).json({message: 'Got the product successfully', product: product});
        } else {
            res.status(404).json({message: 'No products are found'});
        }
    } catch(err) {
        console.error(err);
        res.status(501).json({message: 'Failed to get product', error: err});
    }
}

async function getProductsByName(req, res) {
    const keyword = req.body;

    //Find the product that has the key
    try {
        const query = `SELECT * FROM product WHERE name LIKE '%${keyword}%;`;
        const result = await pool.query(query);
        const products = result.rows;

        if(products) {
            res.status(200).json({message: 'Got the products successfully', products: products})
        } else {
            res.status(404).json({message: 'No products are found'});
        }
    } catch(err) {
        console.error(err);
        res.status(501).json({message: 'Failed to get products', error: err});
    }
}

async function getProductsByType(req, res) {
    const type = req.body;

    //Find the product
    try {
        const query = `SELECT * FROM product WHERE type = ${type};`;
        const result = await pool.query(query);
        const products = result.rows;
        
        //Check if products exists
        if(products) {
            res.status(200).json({message: 'Got the products successfully', products: products});
        } else {
            res.status(404).json({message: 'No products are found'});
        }
    } catch(err) {
        console.error(err);
        res.status(501).json({message: 'Failed to get the products', error: err})
    }
}

async function getProductsByCategory(req, res) {
    const category = req.body;
    //Find the product
    try {
        const query = `SELECT * FROM product WHERE category = ${category};`
        const result = await pool.query(query);
        const products = result.rows;
        if(products) {
            res.status(200).json({message: "Got the producst successfully", products: products});
        } else {
            res.status(404).json({message: "No products on this category"});
        }
    } catch(err) {
        console.error(err);
        res.status(501).json({message: "Failed to get the products", error: err});
    }
}

async function getProductsByUserId(req, res) {
    const owner_id = req.body;
    try {
        const query = `SELECT * FROM product WHERE owner_id = ${owner_id};`
        const result = await pool.query(query);
        const products = result.rows;
        if(products) {
            res.status(200).json({message: "Got the producst successfully", products: products});
        } else {
            res.status(404).json({message: "No products on this User"});
        }
    } catch(err) {
        console.error(err);
        res.status(501).json({message: "Failed to get the products", error: err});
    }
}

async function removeProduct(req, res) {
    const id = req.body;
    const query = `DELETE FROM product WHERE id = ${id}`;
    try {
        const result = await pool.query(query);
        res.status(200).json({message: 'Product removed successfully'});
    } catch(err) { 
        res.status(501).json({message: 'Failed to remove product', error: err});
    }
}

async function removeAllProducts(req, res) {
    const owner_id = req.body;
    const query = `DELETE FROM product WHERE owner_id = ${owner_id}`;
    try {
        const result = await pool.query(query);
        res.status(200).json({message: 'Products removed successfully'});
    } catch(err) { 
        res.status(501).json({message: 'Failed to remove products', error: err});
    }
}

module.exports = {
    registerProduct,
    getAllProducts,
    getProductsByCategory,
    getProductsByUserId,
    getProductsByName,
    getProductsByType,
    getProductById,
    removeProduct,
    removeAllProducts
}