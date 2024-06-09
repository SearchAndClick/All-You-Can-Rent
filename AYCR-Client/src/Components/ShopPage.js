import React from 'react'
import './ShopPage.css'
import ImgAsset from '../public'
export default function ShopPage () {
	return (
		<div className='ShopPage_ShopPage'>
			<div className='Filter'>
				<span className='Heading3Filters'>Filters</span>
				<div className='FiltersMenu01'>
					<span className='Heading4Size'>Timeframe</span>
					<div className='ItemLink'>
						<span className='Custom'>Custom</span>
					</div>
					<div className='ItemLink_1'>
						<span className='_3Days'>3 Days</span>
					</div>
					<div className='ItemLink_2'>
						<span className='_1Month'>1 Month</span>
					</div>
					<div className='ItemLink_3'>
						<span className='_1Week'>1 Week</span>
					</div>
					<div className='ItemLink_4'>
						<span className='_1Year'>1 Year</span>
					</div>
				</div>
				<div className='FiltersMenu03'>
					<span className='Heading4Prices'>Prices</span>
					<span className='ItemLink050'>$0-$50</span>
					<span className='ItemLink50100'>$50-$100</span>
					<span className='ItemLink100150'>$100-$150</span>
					<span className='ItemLink150200'>$150-$200</span>
					<span className='ItemLink300400'>$300-$400</span>
					<span className='ItemLink150200_1'>Custom</span>
				</div>
				<div className='FiltersMenu06'>
					<span className='Heading4Tags'>Tags</span>
					<div className='List'>
						<div className='Item'>
							<span className='LinkSandal'>Sandal</span>
						</div>
						<div className='Item_1'>
							<span className='LinkMinimog'>Motorcycle</span>
						</div>
						<div className='Item_2'>
							<span className='LinkVagabond'>Cars</span>
						</div>
						<div className='Item_3'>
							<span className='LinkSunglasses'>Sunglasses</span>
						</div>
						<div className='Item_4'>
							<span className='LinkVagabond_1'>Cables</span>
						</div>
						<div className='Item_5'>
							<span className='LinkSunglasses_1'>Masks</span>
						</div>
					</div>
				</div>
			</div>
			<div className='Pagination'>
				<div className='spanpage'>
					<span className='_1'>1</span>
				</div>
				<div className='Link'>
					<span className='_2'>2</span>
				</div>
				<div className='Link_1'>
					<span className='_3'>3</span>
				</div>
				<div className='Link_2'>
					<span className='_'>»</span>
				</div>
			</div>
			<div className='Products'>
				<div className='Product01'>
					<div className='divsf__pcard'>
						<div className='Linkresponsiveimage'>
							<img className='_49_ecfb9d65a39240b1b9fbf62e5a84f812jpg' src = {ImgAsset.ShopPage__49_ecfb9d65a39240b1b9fbf62e5a84f812jpg} />
						</div>
						<div className='divmt3'>
							<div className='Heading3Link'>
								<span className='RoundedRedHat'>Rounded Red Hat</span>
							</div>
							<span className='_800'>$8.00</span>
							<span className='year'>/year</span>
						</div>
					</div>
				</div>
				<div className='Product02'>
					<div className='divsf__pcard_1'>
						<div className='divoverflowhidden'>
							<div className='Linkresponsiveimage_1'>
								<img className='_57jpg' src = {ImgAsset.ShopPage__57jpg} />
							</div>
							<div className='spanprod__tag'>
								<span className='SoldOut'>Sold<br/>Out</span>
							</div>
						</div>
						<div className='divmt3_1'>
							<div className='Heading3Link_1'>
								<span className='LinenblendShirt'>Linen-blend Shirt</span>
							</div>
							<span className='_1700'>$17.00</span>
							<span className='year_1'>/year</span>
						</div>
					</div>
				</div>
				<div className='Product03'>
					<div className='divsf__pcard_2'>
						<div className='Linkresponsiveimage_2'>
							<img className='_59jpg' src = {ImgAsset.ShopPage__59jpg} />
						</div>
						<div className='divmt3_2'>
							<div className='Heading3Link_2'>
								<span className='ToyotaSupraMK4'>Toyota Supra MK4</span>
							</div>
							<span className='_10600'>$106.00</span>
							<span className='year_2'>/year</span>
						</div>
					</div>
				</div>
				<div className='Product04'>
					<div className='divsf__pcard_3'>
						<div className='Linkresponsiveimage_3'>
							<img className='_54_8558553ca9dd4474bc2b6707343dacbejpg' src = {ImgAsset.ShopPage__54_8558553ca9dd4474bc2b6707343dacbejpg} />
						</div>
						<div className='divmt3_3'>
							<div className='Heading3Link_3'>
								<span className='BoxyDenimHat'>Boxy Denim Hat</span>
							</div>
							<span className='_2500'>$25.00</span>
							<span className='year_3'>/year</span>
						</div>
					</div>
				</div>
				<div className='Product05'>
					<div className='divsf__pcard_4'>
						<div className='Linkresponsiveimage_4'>
							<img className='_53_bc12317de94140979fd8cc529c2b0cf1jpg' src = {ImgAsset.ShopPage__53_bc12317de94140979fd8cc529c2b0cf1jpg} />
						</div>
						<div className='divmt3_4'>
							<div className='Heading3Link_4'>
								<span className='LinenPlainTop'>Linen Plain Top</span>
							</div>
							<span className='_2500_1'>$25.00</span>
							<span className='year_4'>/year</span>
						</div>
					</div>
				</div>
				<div className='Product06'>
					<div className='divsf__pcard_5'>
						<div className='Linkresponsiveimage_5'>
							<img className='_52_bec0360d64e54b79bb889b2dc30f34a2jpg' src = {ImgAsset.ShopPage__52_bec0360d64e54b79bb889b2dc30f34a2jpg} />
						</div>
						<div className='divmt3_5'>
							<div className='Heading3Link_5'>
								<span className='AMDRyzen55600G'>AMD Ryzen 5 5600G</span>
							</div>
							<div className='divfprice__sale'>
								<div className='spanfpriceitem'>
									<span className='_1100'>$11.00</span>
								</div>
							</div>
							<span className='year_5'>/year</span>
						</div>
					</div>
				</div>
				<div className='Product07'>
					<div className='divsf__pcard_6'>
						<div className='Linkresponsiveimage_6'>
							<img className='_46_145a4ab07b97409ab0493768fd0e7a10jpg' src = {ImgAsset.ShopPage__46_145a4ab07b97409ab0493768fd0e7a10jpg} />
						</div>
						<div className='divmt3_6'>
							<div className='Heading3Link_6'>
								<span className='Cars3Movie2017'>Cars 3 Movie (2017)</span>
							</div>
							<div className='divfprice__sale_1'>
								<div className='spanfpriceitem_1'>
									<span className='_1800'>$18.00</span>
								</div>
							</div>
							<span className='year_6'>/year</span>
						</div>
					</div>
				</div>
				<div className='Product08'>
					<div className='divsf__pcard_7'>
						<div className='Linkresponsiveimage_7'>
							<img className='_45jpg' src = {ImgAsset.ShopPage__45jpg} />
						</div>
						<div className='divmt3_7'>
							<div className='Heading3Link_7'>
								<span className='Cars2Movie2011'>Cars 2 Movie (2011)</span>
							</div>
							<span className='_2200'>$22.00</span>
							<span className='year_7'>/year</span>
						</div>
					</div>
				</div>
				<div className='Product09'>
					<div className='divsf__pcard_8'>
						<div className='Linkresponsiveimage_8'>
							<img className='Rectangle' src = {ImgAsset.ShopPage_Rectangle} />
						</div>
						<div className='divmt3_8'>
							<div className='Heading3Link_8'>
								<span className='CarsMovie2004'>Cars Movie (2004)</span>
							</div>
							<span className='_2000'>$20.00</span>
							<span className='year_8'>/year</span>
						</div>
					</div>
				</div>
			</div>
			<div className='Header'>
				<span className='AYCR'>AYCR</span>
				<div className='NavMenu'>
					<span className='Home'>Home</span>
					<span className='Shop'>Shop</span>
					<span className='History'>History</span>
					<span className='CurrentlyHave'>Currently Have</span>
					<div className='ActivePageIndicator'/>
				</div>
				<div className='Tools'>
					<div className='msearchpopup'>
						<div className='ButtonSVG'>
							<img className='Vector' src = {ImgAsset.ShopPage_Vector} />
						</div>
					</div>
					<div className='Link_3'>
						<div className='SVG'>
							<img className='Vector_1' src = {ImgAsset.ShopPage_Vector_1} />
						</div>
					</div>
					<div className='Link_4'>
						<div className='SVG_1'>
							<img className='Vector_2' src = {ImgAsset.ShopPage_Vector_2} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}