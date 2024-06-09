import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import Homepage from '../Components/Homepage';
import ShopPage from '../Components/ShopPage';
import ProductPage from '../Components/ProductPage';
import Minicart from '../Components/Minicart';
import CartPage from '../Components/CartPage';
import Checkout from '../Components/Checkout';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/login"><Login /></Route>
				<Route exact path="/signup"><SignUp /></Route>
				<Route exact path="/homepage"><Homepage /></Route>
				<Route exact path="/shoppage"><ShopPage /></Route>
				<Route exact path="/productpage"><ProductPage /></Route>
				<Route exact path="/minicart"><Minicart /></Route>
				<Route exact path="/cartpage"><CartPage /></Route>
				<Route exact path="/checkout"><Checkout /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;