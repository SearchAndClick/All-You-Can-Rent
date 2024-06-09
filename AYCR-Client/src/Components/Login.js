import React from 'react'
import './Login.css'
import ImgAsset from '../public'
export default function Login () {
	return (
		<div className='Login_Login'>
			<div className='Signup'>
				<img className='image947' src = {ImgAsset.Login_image947} />
				<div className='signuppage'>
					<span className='ForgetPassword'>Forget Password?</span>
					<span className='OR'>OR</span>
					<span className='LogintoAYCR'>Login to AYCR</span>
					<div className='Rectangle3'/>
					<div className='Rectangle4'/>
					<span className='SignupwithGoogle'>Sign up with Google</span>
					<img className='image939' src = {ImgAsset.Login_image939} />
					<span className='SignupwithEmail'>Sign up with Email</span>
					<img className='image940' src = {ImgAsset.Login_image940} />
					<div className='Rectangle5'/>
					<div className='Rectangle6'/>
					<div className='inputname'>
						<span className='Email'>Email</span>
						<img className='Line1' src = {ImgAsset.Login_Line1} />
					</div>
					<div className='inputname_1'>
						<img className='Line1_1' src = {ImgAsset.Login_Line1_1} />
					</div>
					<div className='Rectangle7'/>
					<div className='Rectangle8'/>
					<span className='SignIn'>Sign In</span>
					<span className='RegisterNow'>Register Now</span>
				</div>
				<span className='AYCR'>AYCR</span>
				<span className='AYCRTermsCodnitions'>FASCO Terms & Codnitions</span>
			</div>
		</div>
	)
}