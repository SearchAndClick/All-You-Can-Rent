const {pool} = require ('../config/db.config');
const {v4: generateId} = require('uuid');

async function addCartToHistory(req, res) {
    const {cart_id, account_id, product_id, total_price, deadline, status} = req.body;
        
    try {
        const id = generateId();
        const query = {
            text : `INSERT INTO history (id, transaction_owner_id, transaction_product_id, total_price, deadline, status)
                    SELECT ${id}, cart_owner_id, cp.product_id, c.total_price, now() + interval '3 days', false
                    FROM cart c
                    JOIN cart_product cp ON c.cart_product_id = cp.id
                    WHERE c.id = '${cart_id}';

                    DELETE FROM cart
                    WHERE id = '${cart_id}';`,
        }
        const result = await pool.query(query);
        const history = result 
        res.status(201).json({message: "Added to history successfully", history: history, history: history});
    } catch (err) {
        console.error(err);
        res.status(501).json({message: 'Failed to add product to history', error: err});
    }
}

async function finishedTransaction(req, res) {
    const id = req.body;

    //Update transaksi menjadi lunas saat sudah dikembalikan barangnya
    const query = {
        text: `UPDATE history SET status = true WHERE id = '${id}';`
    };
    const result = await pool.query(query);
    const transaction = result.rows[0];
    res.status(200).json({message: "Transaction finished successfully", transaction: transaction});
}

module.exports = {
    addCartToHistory,
    finishedTransaction
}
