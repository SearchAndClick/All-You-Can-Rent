import React from 'react'
import './SignUp.css'
import ImgAsset from '../public'
export default function SignUp () {
	return (
		<div className='SignUp_SignUp'>
			<div className='Signup'>
				<span className='AYCR'>AYCR</span>
				<span className='AYCRTermsCodnitions'>FASCO Terms & Codnitions</span>
			</div>
			<div className='signuppage'>
				<img className='image948' src = {ImgAsset.SignUp_image948} />
				<span className='AlreadyhaveanaccountLogin'>Already have an account? Login</span>
				<span className='OR'>OR</span>
				<span className='CreateAccount'>Create Account</span>
				<div className='Rectangle3'/>
				<div className='Rectangle4'/>
				<span className='SignupwithGoogle'>Sign up with Google</span>
				<img className='image939' src = {ImgAsset.Login_image939} />
				<span className='SignupwithEmail'>Sign up with Email</span>
				<img className='image940' src = {ImgAsset.Login_image940} />
				<div className='Rectangle5'/>
				<div className='Rectangle6'/>
				<div className='inputname'>
					<span className='FirstName'>First Name</span>
					<img className='Line1' src = {ImgAsset.SignUp_Line1} />
				</div>
				<div className='inputname_1'>
					<span className='LastName'>Last Name </span>
					<img className='Line1_1' src = {ImgAsset.SignUp_Line1_1} />
				</div>
				<div className='inputname_2'>
					<span className='EmailAddress'>Email Address</span>
					<img className='Line1_2' src = {ImgAsset.SignUp_Line1_2} />
				</div>
				<div className='inputname_3'>
					<span className='PhoneNumber'>Phone Number</span>
					<img className='Line1_3' src = {ImgAsset.SignUp_Line1_3} />
				</div>
				<div className='inputname_4'>
					<img className='Line1_4' src = {ImgAsset.SignUp_Line1_4} />
				</div>
				<div className='inputname_5'>
					<span className='ConfirmPassword'>Confirm Password</span>
					<img className='Line1_5' src = {ImgAsset.SignUp_Line1_5} />
				</div>
				<div className='Rectangle7'/>
				<span className='CreateAccount_1'>Create Account</span>
			</div>
		</div>
	)
}