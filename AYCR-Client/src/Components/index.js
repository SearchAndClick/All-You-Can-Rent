import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/Login'><div>Login</div></Link>
		<Link to='/SignUp'><div>SignUp</div></Link>
		<Link to='/Homepage'><div>Homepage</div></Link>
		<Link to='/ShopPage'><div>ShopPage</div></Link>
		<Link to='/ProductPage'><div>ProductPage</div></Link>
		<Link to='/Minicart'><div>Minicart</div></Link>
		<Link to='/CartPage'><div>CartPage</div></Link>
		<Link to='/Checkout'><div>Checkout</div></Link>
	</div>
	)
}