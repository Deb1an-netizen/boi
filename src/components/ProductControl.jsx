import React, { Component } from 'react';
import Products from './Products'
class ProductControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            tileData : [
                {
                  img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2014/11/Titos-Lane.jpg',
                  title: 'Goa',
                  author: 'partyNOOB',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Trekking-in-Mcleodganj.jpg',
                    title: 'Mcleodganj – Heaven Amidst The Hills',
                    author: 'Debian9d',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Kashmir-Valley.jpg',
                    title: 'Srinagar – The Gem of Kashmir',
                    author: 'Nilwings',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Scuba-Diving.jpg',
                    title: 'Andaman – The Beach Haven',
                    author: 'SayanM',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Leh-Ladakh.jpg',
                    title: 'Leh-Ladakh – The Biker’s Paradise',
                    author: 'Debian9d',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Binsar.jpg',
                    title: 'Binsar – Explore The Realms Of Wildlife',
                    author: 'DeepanjanGG',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Coorg.jpg',
                    title: 'Coorg – Walk Amidst The Coffee Plantations',
                    author: 'Shila ki jawani',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Kerala-Forests.jpg',
                    title: 'Kerala – The Magical God’s Own Country',
                    author: 'GGRohit',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/05/150.jpg',
                    title: 'Kanatal – For The Best Camping ',
                    author: 'Rittik HATTALI',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/01/Solo-traveler-in-Kasol.jpg',
                    title: 'Kasol – The Trekker’s Paradise',
                    author: 'SaumyaBNG',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Rann-of-Kutch.jpg',
                    title: 'Kutch – The Most Beautiful Stretch Of White Desert',
                    author: 'MadaraUchiha',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/05/219.jpg',
                    title: 'Bir Billing – The Paragliding Hub Of India',
                    author: 'MalErMal',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Dibru_Saikhuwa_National_Parkbb2472017.jpg',
                    title: 'Assam – Home Of One Horned Rhinos',
                    author: 'AnishaCR',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Rafting.jpg',
                    title: 'Rishikesh – The Adventure Capital Of India',
                    author: 'AnupamBARCA',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Toy-Train-Shimla.jpg',
                    title: 'Shimla – The Queen Of Northern Hills',
                    author: 'SudaarshanGG',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/05/317.jpg',
                    title: ' Tirthan Valley – The Adventure Hub Of Himachal',
                    author: 'KoushikNOTE7PRO',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2016/08/jim-corbett-tiger-national-park.jpg',
                    title: 'Jim Corbett – An Adventurous Jungle Adventure',
                    author: 'AritraANC',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/05/414.jpg',
                    title: 'Manali – The Snowy Paradise',
                    author: 'DanceQueenAnamika',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/09/110.jpg',
                    title: 'Udaipur – The Romantic City Of Lakes',
                    author: 'RikonLibrary',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2016/01/Skiing-in-Auli.jpg',
                    title: 'Auli – A Perfect Place For Ski Lovers',
                    author: 'AnkitaGG',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/05/518.jpg',
                    title: 'Mysore – Of Silk, Sandalwood, And Sweets',
                    author: 'NabnitaSEMINAR',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2016/02/misty-valley-vof.jpg',
                    title: 'Valley of Flowers – Rich In Flora And Fauna',
                    author: 'AlishaPHOTOGRAPHER',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/10/Patwon-Ki-Haveli.jpg',
                    title: 'Jaisalmer – For The Best Desert Safari Ever',
                    author: 'SimranNightingal',
                },
                {
                    img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/01/Untitled-design-4.jpg',
                    title: 'Jodhpur – Bleed Blue In The Royal City',
                    author: 'RikuPOSER',
                },
              ]
        }
    }
    state = {  }
    render() { 
        return ( 
            <div className="col-xl-9 col-lg-8 col-md-7">
				<div className="filter-bar d-flex flex-wrap align-items-center">
					<div className="sorting">
						<select>
							<option value="1">Default sorting</option>
							<option value="1">Default sorting</option>
							<option value="1">Default sorting</option>
						</select>
					</div>
					<div className="sorting mr-auto">
						<select>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
						</select>
					</div>
					<div className="pagination">
						<a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></a>
						<a href="#" className="active">1</a>
						<a href="#">2</a>
						<a href="#">3</a>
						<a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a>
						<a href="#">6</a>
						<a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
					</div>
				</div>
				<section className="lattest-product-area pb-40 category-list">
					<div className="row">
                        <div className="col-lg-4 col-md-6">
							<div className="single-product">
								<Products 
                                    img="https://jamesclear.com/wp-content/uploads/2015/02/The-Dream-of-the-Red-Chamber-by-Cao-Xueqin-448x700.jpg"
                                    title="The Dream of the Red Chamber"
                                    desc="lorem ipsum"
                                />
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-product">
								<img className="img-fluid" src="https://jamesclear.com/wp-content/uploads/2015/02/Don-Quixote-by-Miguel-de-Cervantes-420x700.jpg" alt=""/>
								<div className="product-details">
									<h6>Don Quixote</h6>
									<div className="price">
										<h6>150.00</h6>
										<h6 className="l-through">210.00</h6>
									</div>
									<div className="prd-bottom">

										<a href="" className="social-info">
											<span className="ti-bag"></span>
											<p className="hover-text">add to bag</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-heart"></span>
											<p className="hover-text">Wishlist</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-sync"></span>
											<p className="hover-text">compare</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-move"></span>
											<p className="hover-text">view more</p>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-product">
								<img className="img-fluid" src="https://jamesclear.com/wp-content/uploads/2015/02/A-Tale-of-Two-Cities-by-Charles-Dickens-434x700.jpg" alt=""/>
								<div className="product-details">
									<h6>A Tale of Two Cities</h6>
									<div className="price">
										<h6>150.00</h6>
										<h6 className="l-through">210.00</h6>
									</div>
									<div className="prd-bottom">

										<a href="" className="social-info">
											<span className="ti-bag"></span>
											<p className="hover-text">add to bag</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-heart"></span>
											<p className="hover-text">Wishlist</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-sync"></span>
											<p className="hover-text">compare</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-move"></span>
											<p className="hover-text">view more</p>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-product">
								<img className="img-fluid" src="https://jamesclear.com/wp-content/uploads/2015/02/Lord-of-the-Rings-by-JRR-Tolkien-541x700.jpg" alt=""/>
								<div className="product-details">
									<h6>The Lord of the Rings</h6>
									<div className="price">
										<h6>150.00</h6>
										<h6 className="l-through">210.00</h6>
									</div>
									<div className="prd-bottom">

										<a href="" className="social-info">
											<span className="ti-bag"></span>
											<p className="hover-text">add to bag</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-heart"></span>
											<p className="hover-text">Wishlist</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-sync"></span>
											<p className="hover-text">compare</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-move"></span>
											<p className="hover-text">view more</p>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-product">
								<img className="img-fluid" src="https://jamesclear.com/wp-content/uploads/2015/02/The-Little-Prince-by-Antoine-de-Saint-Exupery-560x700.jpg" alt=""/>
								<div className="product-details">
									<h6>The Little Prince</h6>
									<div className="price">
										<h6>150.00</h6>
										<h6 className="l-through">210.00</h6>
									</div>
									<div className="prd-bottom">

										<a href="" className="social-info">
											<span className="ti-bag"></span>
											<p className="hover-text">add to bag</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-heart"></span>
											<p className="hover-text">Wishlist</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-sync"></span>
											<p className="hover-text">compare</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-move"></span>
											<p className="hover-text">view more</p>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-product">
								<img className="img-fluid" src="https://jamesclear.com/wp-content/uploads/2015/02/Harry-Potter-by-JK-Rowling-568x700.jpeg" alt=""/>
								<div className="product-details">
									<h6>Harry Potter and the Sorcerer's Stone</h6>
									<div className="price">
										<h6>150.00</h6>
										<h6 className="l-through">210.00</h6>
									</div>
									<div className="prd-bottom">

										<a href="" className="social-info">
											<span className="ti-bag"></span>
											<p className="hover-text">add to bag</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-heart"></span>
											<p className="hover-text">Wishlist</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-sync"></span>
											<p className="hover-text">compare</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-move"></span>
											<p className="hover-text">view more</p>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-product">
								<img className="img-fluid" src="https://jamesclear.com/wp-content/uploads/2015/02/And-Then-There-Were-None-by-Agatha-Christie-435x700.jpg" alt=""/>
								<div className="product-details">
									<h6>And Then There Were None</h6>
									<div className="price">
										<h6>150.00</h6>
										<h6 className="l-through">210.00</h6>
									</div>
									<div className="prd-bottom">

										<a href="" className="social-info">
											<span className="ti-bag"></span>
											<p className="hover-text">add to bag</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-heart"></span>
											<p className="hover-text">Wishlist</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-sync"></span>
											<p className="hover-text">compare</p>
										</a>
										<a href="" className="social-info">
											<span className="lnr lnr-move"></span>
											<p className="hover-text">view more</p>
										</a>
									</div>
								</div>
							</div>
						</div>
                        {
                            this.state.tileData.map(tile => (
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-product">
                                        <Products 
                                            img={tile.img}
                                            title={tile.title}
                                            desc="lorem lorem lorem"
                                            author={tile.author}

                                        />
                                    </div>
                                </div>
                            ))
                        }
					</div>
				</section>
				<div className="filter-bar d-flex flex-wrap align-items-center">
					<div className="sorting mr-auto">
						<select>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
						</select>
					</div>
					<div className="pagination">
						<a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></a>
						<a href="#" className="active">1</a>
						<a href="#">2</a>
						<a href="#">3</a>
						<a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a>
						<a href="#">6</a>
						<a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>
         );
    }
}
 
export default ProductControl
