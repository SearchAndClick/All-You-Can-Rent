import React from 'react'
import './Checkout.css'
import ImgAsset from '../public'
export default function Checkout () {
	return (
		<div className='Checkout_Checkout'>
			<div className='Ellipse5'/>
			<span className='_1'>1</span>
			<span className='PageTitle'>Check Out</span>
			<img className='Seperator' src = {ImgAsset.Checkout_Seperator} />
			<img className='Seperator_1' src = {ImgAsset.Checkout_Seperator_1} />
			<img className='Seperator_2' src = {ImgAsset.Checkout_Seperator_2} />
			<div className='CartProducts'>
				<div className='BG'/>
				<div className='Prooduct'>
					<div className='ProductsInfo'>
						<div className='button'>
							<div className='bg'/>
							<span className='Apply'>Apply</span>
						</div>
						<div className='Discountcode'>
							<div className='Rectangle19266'/>
							<span className='Discountcode_1'>Discount code</span>
						</div>
						<div className='Pricing'>
							<span className='Subtotal'>Subtotal</span>
							<span className='Shipping'>Shipping</span>
							<span className='Total'>Total</span>
							<span className='_10000'>$100.00</span>
							<span className='_4000'>$40.00</span>
							<span className='_14000'>$140.00</span>
						</div>
						<span className='ProductName'>Mini dress with ruffled straps</span>
						<img className='Rectangle19265' src = {ImgAsset.ProductPage__35_056fa07083a642798627bbb11aace6e8jpg} />
						<span className='Red'>Red</span>
						<span className='_10000_1'>$100.00</span>
						<div className='Ellipse6'/>
						<span className='_1_1'>1</span>
					</div>
				</div>
			</div>
			<div className='Delivery'>
				<span className='Delivery_1'>Delivery</span>
				<div className='Country'>
					<div className='Rectangle19268'/>
					<img className='Vector' src = {ImgAsset.Checkout_Vector} />
					<span className='CountryRegion'>Country / Region</span>
				</div>
				<div className='FirstName'>
					<div className='Rectangle19269'/>
					<span className='FirstName_1'>First Name</span>
				</div>
				<div className='City'>
					<div className='Rectangle19272'/>
					<span className='City_1'>City</span>
				</div>
				<div className='Address'>
					<div className='Rectangle19271'/>
					<span className='Address_1'>Address</span>
				</div>
				<div className='LastName'>
					<div className='Rectangle19270'/>
					<span className='LastName_1'>Last Name</span>
				</div>
				<div className='PostalCode'>
					<div className='Rectangle19273'/>
					<span className='PostalCode_1'>Postal Code</span>
				</div>
				<div className='Checkbox'>
					<span className='PageTitle_1'>Save This Info for future</span>
					<div className='Rectangle19263'/>
				</div>
			</div>
			<div className='Payment'>
				<span className='Payment_1'>Payment</span>
				<div className='CreditCardInfo'>
					<div className='BG_1'/>
					<div className='PaymentType'>
						<div className='Rectangle19274'/>
						<img className='Vector_1' src = {ImgAsset.Checkout_Vector_1} />
						<span className='CreditCard'>Credit Card</span>
						<img className='trustbagpng' src = {ImgAsset.Checkout_trustbagpng} />
					</div>
					<div className='CardHolderName'>
						<div className='Rectangle19279'/>
						<span className='CardHolderName_1'>Card Holder Name</span>
					</div>
					<div className='ExpirationDate'>
						<div className='Rectangle19277'/>
						<span className='ExpirationDate_1'>Expiration Date </span>
					</div>
					<div className='SecurityCode'>
						<div className='Rectangle19278'/>
						<span className='SecurityCode_1'>Security Code</span>
					</div>
					<div className='CardNumber'>
						<div className='Rectangle19276'/>
						<span className='CardNumber_1'>Card Number</span>
						<div className='icroundlock'>
							<img className='Vector_2' src = {ImgAsset.Checkout_Vector_2} />
						</div>
					</div>
					<span className='PageTitle_2'>Save This Info for future</span>
					<div className='Rectangle19263_1'/>
				</div>
			</div>
			<div className='button_1'>
				<div className='bg_1'/>
				<span className='PayNow'>Pay Now</span>
			</div>
			<span className='copyrighttext'>Copyright © 2022 FASCO . All Rights Reseved.</span>
		</div>
	)
}