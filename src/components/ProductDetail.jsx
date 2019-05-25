import React from 'react';

function ProductDetail(props){
    return(
        <div className="product_image_area">
		<div className="container">
			<div className="row s_product_inner">
				<div className="col-lg-6">
					<div className="s_Product_carousel">
						<div className="single-prd-item">
							<img className="img-fluid" src={props.img} alt="" />
						</div>
						<div className="single-prd-item">
							<img className="img-fluid" src={props.img} alt="" />
						</div>
						<div className="single-prd-item">
							<img className="img-fluid" src={props.img} alt="" />
						</div>
					</div>
				</div>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text">
						<h3>{props.title}</h3>
						<h2>$149.99</h2>
						<ul className="list">
							<li><a className="active" href="#"><span>Category</span> : Household</a></li>
							<li><a href="#"><span>Availibility</span> : In Stock</a></li>
						</ul>
						<p>{props.author}</p>
						<div className="product_count">
							<label for="qty">Quantity:</label>
							<button className="increase items-count" type="button"></button>
							<button className="reduced items-count" type="button"></button>
						</div>
						<div className="card_area d-flex align-items-center">
							<a className="primary-btn" href="#">Add to Cart</a>
							<a className="icon_btn" href="#"><i className="lnr lnr lnr-diamond"></i></a>
							<a className="icon_btn" href="#"><i className="lnr lnr lnr-heart"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
		
    )
}
export default ProductDetail