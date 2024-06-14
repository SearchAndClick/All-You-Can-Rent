require('dotenv').config();
const express = require('express');
const cors = require('cors');
const accountRepo = require("./src/repository/account.repository");
const productRepo = require("./src/repository/products.repository");
const cartRepo = require("./src/repository/cart.repository");
const historyRepo = require("./src/repository/history.repository");

const db = require('./src/config/db.config');
const app = express();
const port = process.env.PORT;

//middleware
app.use(cors());
app.use(express.urlencoded({extended: true}));

//Endpoint for account
app.post('/signUp', accountRepo.signUp);
app.post('/login', accountRepo.login);
app.delete('/deleteAccount', accountRepo.deleteAccount);
app.get('Profile/ViewUser', accountRepo.getAccountById);

//Endpoint for product
app.post('Product/registerProduct', productRepo.registerProduct);
app.get('Product/getAllProducts',productRepo.getAllProducts);
app.get('Product/getProductById', productRepo.getProductById);
app.get('Product/getProductsByName', productRepo.getProductsByName);
app.get('Product/getProductsByCategory', productRepo.getProductsByCategory);
app.get('Product/getProductsByType', productRepo.getProductsByType);
app.get('Product/getProductsByUserId', productRepo.getProductsByUserId);
app.delete('Product/removeProduct', productRepo.removeProduct);

//Endpoint for cart
app.post('Cart/addProductToCart', cartRepo.addProductToCart);
app.get('Cart/getCart', cartRepo.getCart);
app.delete('Cart/removeProductFromCart', cartRepo.removeProductFromCart);

//Endpoint for history
app.post('History/addCartToHistory', historyRepo.addCartToHistory);
app.put('History/finishedTransaction', historyRepo.finishedTransaction);

//connect to database
db.connectDB();

//Starting server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



