import React from 'react'
import './Homepage.css'
import ImgAsset from '../public'
export default function Homepage () {
	return (
		<div className='Homepage_Homepage'>
			<span className='FindWhatYouWantAtTheMomentYouCanAlwaysReturnItLater'>Find What You Want  At The Moment<br/>You Can Always Return It Later</span>
			<img className='image941' src = {ImgAsset.Homepage_image941} />
			<img className='image942' src = {ImgAsset.Homepage_image942} />
			<img className='image943' src = {ImgAsset.Homepage_image943} />
			<img className='image944' src = {ImgAsset.Homepage_image944} />
			<div className='button'>
				<div className='bg'/>
				<span className='Shop'>Shop</span>
			</div>
			<img className='image946' src = {ImgAsset.Homepage_image946} />
			<div className='Header'>
				<span className='AYCR'>AYCR</span>
				<div className='NavMenu'>
					<span className='Home'>Home</span>
					<span className='Shop_1'>Shop</span>
					<span className='History'>History</span>
					<span className='CurrentlyHave'>Currently Have</span>
					<div className='ActivePageIndicator'/>
				</div>
				<div className='Tools'>
					<div className='msearchpopup'>
						<div className='ButtonSVG'>
							<img className='Vector' src = {ImgAsset.Homepage_Vector} />
						</div>
					</div>
					<div className='Link'>
						<div className='SVG'>
							<img className='Vector_1' src = {ImgAsset.Homepage_Vector_1} />
						</div>
					</div>
					<div className='Link_1'>
						<div className='SVG_1'>
							<img className='Vector_2' src = {ImgAsset.Homepage_Vector_2} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}