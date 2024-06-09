import React from 'react'
import './CartPage.css'
import ImgAsset from '../public'
export default function CartPage () {
	return (
		<div className='CartPage_CartPage'>
			<span className='PageTitle'>Shopping Cart</span>
			<div className='BreadCrumbs'>
				<span className='Home'>Home</span>
				<div className='SVG'>
					<img className='Vector' src = {ImgAsset.CartPage_Vector} />
				</div>
				<span className='YourShoppingCart'>Your Shopping Cart</span>
			</div>
			<span className='Subtotal'>Product</span>
			<span className='Subtotal_1'>Price</span>
			<span className='Subtotal_2'>$14.90</span>
			<span className='Subtotal_3'>$14.90</span>
			<span className='Subtotal_4'>Quantity</span>
			<span className='Subtotal_5'>Total</span>
			<div className='Product'>
				<img className='ProductImage' src = {ImgAsset.ProductPage__35_056fa07083a642798627bbb11aace6e8jpg} />
				<div className='ProductDetail'>
					<span className='ProductName'>Mini dress with ruffled straps</span>
					<span className='ProductColor'>Color : Red</span>
					<span className='Remove'>Remove</span>
				</div>
			</div>
			<img className='Seperator' src = {ImgAsset.CartPage_Seperator} />
			<img className='Seperator_1' src = {ImgAsset.CartPage_Seperator_1} />
			<div className='Quantity'>
				<div className='BG'/>
				<span className='Increase'>+</span>
				<span className='Decrease'>-</span>
				<span className='Amount'>01</span>
			</div>
			<div className='button'>
				<div className='bg'/>
				<span className='Checkout'>Checkout</span>
				<span className='ViewCart'>View Cart</span>
			</div>
			<div className='Price'>
				<span className='Subtotal_6'>Subtotal</span>
				<span className='Price_1'>$100.00</span>
			</div>
			<div className='Checkbox'>
				<span className='PageTitle_1'>For $10.00 please wrap the product</span>
				<div className='Rectangle19263'/>
			</div>
			<img className='Line1' src = {ImgAsset.CartPage_Line1} />
			<div className='Header'>
				<span className='AYCR'>AYCR</span>
				<div className='NavMenu'>
					<span className='Home_1'>Home</span>
					<span className='Shop'>Shop</span>
					<span className='History'>History</span>
					<span className='CurrentlyHave'>Currently Have</span>
					<div className='ActivePageIndicator'/>
				</div>
			</div>
			<div className='Tools'>
				<div className='msearchpopup'>
					<div className='ButtonSVG'>
						<img className='Vector_1' src = {ImgAsset.CartPage_Vector_1} />
					</div>
				</div>
				<div className='Link'>
					<div className='SVG_1'>
						<img className='Vector_2' src = {ImgAsset.CartPage_Vector_2} />
					</div>
				</div>
				<div className='Link_1'>
					<div className='SVG_2'>
						<img className='Vector_3' src = {ImgAsset.CartPage_Vector_3} />
					</div>
				</div>
			</div>
			<div className='Ellipse6'/>
			<span className='_1'>1</span>
			<div className='Header_1'>
				<span className='AYCR_1'>AYCR</span>
				<div className='NavMenu_1'>
					<span className='Home_2'>Home</span>
					<span className='Shop_1'>Shop</span>
					<span className='History_1'>History</span>
					<span className='CurrentlyHave_1'>Currently Have</span>
					<div className='ActivePageIndicator_1'/>
				</div>
			</div>
			<div className='Tools_1'>
				<div className='msearchpopup_1'>
					<div className='ButtonSVG_1'>
						<img className='Vector_4' src = {ImgAsset.CartPage_Vector_4} />
					</div>
				</div>
				<div className='Link_2'>
					<div className='SVG_3'>
						<img className='Vector_5' src = {ImgAsset.CartPage_Vector_5} />
					</div>
				</div>
				<div className='Link_3'>
					<div className='SVG_4'>
						<img className='Vector_6' src = {ImgAsset.CartPage_Vector_6} />
					</div>
				</div>
			</div>
			<div className='Ellipse7'/>
			<span className='_1_1'>1</span>
		</div>
	)
}