import React from 'react'

import '../assets/css/bootstrap.min.css'
import '../assets/css/main.css'
import '../assets/css/blue.css'
import '../assets/css/owl.carousel.css'
import '../assets/css/owl.transitions.css'
import '../assets/css/animate.min.css'
import '../assets/css/rateit.css'
import '../assets/css/bootstrap-select.min.css'
import { Link } from 'react-router-dom'
//import '../assets/css/font-awesome.css'
//import '../assets/css/simple-line-icons.css'


const NavBar = () => {

  return (
    <div className="cnt-home">




      <header className="header-style-1">

        <div className="top-bar animate-dropdown">
          <div className="container">
            <div className="header-top-inner">
              <div className="cnt-account">
                <ul className="list-unstyled">
                  <li><Link className="lolo" to="#"><i className="icon fa fa-user"></i>My Account</Link></li>
                  <li><Link className="lolo" to="#"><i className="icon fa fa-heart"></i>Wishlist</Link></li>
                  <li><Link className="lolo" to="#"><i className="icon fa fa-shopping-cart"></i>My Cart</Link></li>
                  <li><Link className="lolo" to="#"><i className="icon fa fa-check"></i>Checkout</Link></li>
                  <li><Link className="lolo" to="#"><i className="icon fa fa-lock"></i>Login</Link></li>
                </ul>
              </div>


              <div className="cnt-block">
                <ul className="list-unstyled list-inline">
                  <li className="dropdown dropdown-small"> <Link  to="#" className="dropdown-toggle lolo" data-hover="dropdown" data-toggle="dropdown"><span className="value">USD </span><b className="caret"></b></Link>
                    <ul className="dropdown-menu">
                      <li><Link className="lolo" to="#">USD</Link></li>
                      <li><Link className="lolo" to="#">INR</Link></li>
                      <li><Link className="lolo" to="#">GBP</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-small"> <Link  to="#" className="dropdown-toggle lolo" data-hover="dropdown" data-toggle="dropdown"><span className="value">English </span><b className="caret"></b></Link>
                    <ul className="dropdown-menu">
                      <li><Link className="lolo" to="#">English</Link></li>
                      <li><Link className="lolo" to="#">French</Link></li>
                      <li><Link className="lolo" to="#">German</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>


        <div className="main-header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">

                <div className="logo"> <Link className="lolo" to="home.html"> <img src="assets/images/logo.png" alt="logo" /> </Link> </div>

</div>
                <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">

                  <div className="search-area">
                    <form>
                      <div className="control-group">
                        <ul className="categories-filter animate-dropdown">
                          <li className="dropdown"> <Link className="dropdown-toggle  lolo" data-toggle="dropdown" to="category.html">Categories <b className="caret"></b></Link>
                            <ul className="dropdown-menu" role="menu" >
                              <li className="menu-header">Computer</li>
                              <li role="presentation"><Link className="lolo" role="menuitem" tabIndex="-1" to="category.html">- Clothing</Link></li>
                              <li role="presentation"><Link className="lolo" role="menuitem" tabIndex="-1" to="category.html">- Electronics</Link></li>
                              <li role="presentation"><Link className="lolo" role="menuitem" tabIndex="-1" to="category.html">- Shoes</Link></li>
                              <li role="presentation"><Link className="lolo" role="menuitem" tabIndex="-1" to="category.html">- Watches</Link></li>
                            </ul>
                          </li>
                        </ul>
                        <input className="search-field" placeholder="Search here..." />
                        <Link className="search-button lolo" to="#" ></Link> </div>
                    </form>
                  </div>
</div>
                  <div className="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row">

                    <div className="dropdown dropdown-cart"> <Link to="#" className="dropdown-toggle lolo lnk-cart" data-toggle="dropdown">
                      <div className="items-cart-inner">
                        <div className="basket"></div>
                        <div className="basket-item-count"><span className="count">2</span></div>
                        <div className="total-price-basket"> <span className="lbl"></span> <span className="total-price"> <span className="sign">$</span><span className="value">600.00</span> </span> </div>
                      </div>
                    </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <div className="cart-item product-summary">
                            <div className="row">
                              <div className="col-xs-4">
                                <div className="image"> <Link className="lolo" to="detail.html"><img src="assets/images/cart.jpg" alt="" /></Link> </div>
                              </div>
                              <div className="col-xs-7">
                                <h3 className="name"><Link className="lolo" to="index.php?page-detail">Simple Product</Link></h3>
                                <div className="price">$600.00</div>
                              </div>
                              <div className="col-xs-1 action"> <Link className="lolo" to="#"><i className="fa fa-trash"></i></Link> </div>
                            </div>
                          </div>

                          <div className="clearfix"></div>
                          <div>
                            <div className="clearfix cart-total">
                              <div className="pull-right"> <span className="text">Sub Total :</span><span className='price'>$600.00</span> </div>
                              <div className="clearfix"></div>
                              <Link  to="checkout.html" className="btn btn-upper lolo btn-primary btn-block m-t-20">Checkout</Link> </div>
                   
                              </div>
                        </li>
                      </ul>

                    </div>

                  </div>


              


              
            </div>
          </div>
        </div>


        <div className="header-nav animate-dropdown">
          <div className="container">
            <div className="yamm navbar navbar-default" role="navigation">
              <div className="navbar-header">
                <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                  <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
              </div>
              <div className="nav-bg-className">
                <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                  <div className="nav-outer">
                    <ul className="nav navbar-nav">
                      <li className="active dropdown yamm-fw"> <Link to="home.html" data-hover="dropdown" className="dropdown-toggle lolo" data-toggle="dropdown">Home</Link> </li>
                      <li className="dropdown yamm mega-menu"> <Link to="home.html" data-hover="dropdown" className="dropdown-toggle lolo" data-toggle="dropdown">Clothing</Link>
                        <ul className="dropdown-menu container">
                          <li>
                            <div className="yamm-content ">
                              <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                  <h2 className="title">Men</h2>
                                  <ul className="links">
                                    <li><Link className="lolo" to="#">Dresses</Link></li>
                                    <li><Link className="lolo" to="#">Shoes </Link></li>
                                    <li><Link className="lolo" to="#">Jackets</Link></li>
                                    <li><Link className="lolo" to="#">Sunglasses</Link></li>
                                    <li><Link className="lolo" to="#">Sport Wear</Link></li>
                                    <li><Link className="lolo" to="#">Blazers</Link></li>
                                    <li><Link className="lolo" to="#">Shirts</Link></li>
                                  </ul>
                                </div>


                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                  <h2 className="title">Women</h2>
                                  <ul className="links">
                                    <li><Link className="lolo" to="#">Handbags</Link></li>
                                    <li><Link className="lolo" to="#">Jwellery</Link></li>
                                    <li><Link className="lolo" to="#">Swimwear </Link></li>
                                    <li><Link className="lolo" to="#">Tops</Link></li>
                                    <li><Link className="lolo" to="#">Flats</Link></li>
                                    <li><Link className="lolo" to="#">Shoes</Link></li>
                                    <li><Link className="lolo" to="#">Winter Wear</Link></li>
                                  </ul>
                                </div>


                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                  <h2 className="title">Boys</h2>
                                  <ul className="links">
                                    <li><Link className="lolo" to="#">Toys & Games</Link></li>
                                    <li><Link className="lolo" to="#">Jeans</Link></li>
                                    <li><Link className="lolo" to="#">Shirts</Link></li>
                                    <li><Link className="lolo" to="#">Shoes</Link></li>
                                    <li><Link className="lolo" to="#">School Bags</Link></li>
                                    <li><Link className="lolo" to="#">Lunch Box</Link></li>
                                    <li><Link className="lolo" to="#">Footwear</Link></li>
                                  </ul>
                                </div>


                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                  <h2 className="title">Girls</h2>
                                  <ul className="links">
                                    <li><Link className="lolo" to="#">Sandals </Link></li>
                                    <li><Link className="lolo" to="#">Shorts</Link></li>
                                    <li><Link className="lolo" to="#">Dresses</Link></li>
                                    <li><Link className="lolo" to="#">Jwellery</Link></li>
                                    <li><Link className="lolo" to="#">Bags</Link></li>
                                    <li><Link className="lolo" to="#">Night Dress</Link></li>
                                    <li><Link className="lolo" to="#">Swim Wear</Link></li>
                                  </ul>
                                </div>


                                <div className="col-xs-12 col-sm-6 col-md-4 col-menu banner-image"> <img className="img-responsive" src="assets/images/banners/top-menu-banner.jpg" alt="" /> </div>

                              </div>
                            </div>
                            
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown mega-menu">
                        <Link to="category.html" data-hover="dropdown" className="dropdown-toggle lolo" data-toggle="dropdown">Electronics <span className="menu-label hot-menu hidden-xs">hot</span> </Link>
                        <ul className="dropdown-menu container">
                          <li>
                            <div className="yamm-content">
                              <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                  <h2 className="title">Laptops</h2>
                                  <ul className="links">
                                    <li><Link className="lolo" to="#">Gaming</Link></li>
                                    <li><Link className="lolo" to="#">Laptop Skins</Link></li>
                                    <li><Link className="lolo" to="#">Apple</Link></li>
                                    <li><Link className="lolo" to="#">Dell</Link></li>
                                    <li><Link className="lolo" to="#">Lenovo</Link></li>
                                    <li><Link className="lolo" to="#">Microsoft</Link></li>
                                    <li><Link className="lolo" to="#">Asus</Link></li>
                                    <li><Link className="lolo" to="#">Adapters</Link></li>
                                    <li><Link className="lolo" to="#">Batteries</Link></li>
                                    <li><Link className="lolo" to="#">Cooling Pads</Link></li>
                                  </ul>
                                </div>


                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                  <h2 className="title">Desktops</h2>
                                  <ul className="links">
                                    <li><Link className="lolo" to="#">Routers & Modems</Link></li>
                                    <li><Link className="lolo" to="#">CPUs, Processors</Link></li>
                                    <li><Link className="lolo" to="#">PC Gaming Store</Link></li>
                                    <li><Link className="lolo" to="#">Graphics Cards</Link></li>
                                    <li><Link className="lolo" to="#">Components</Link></li>
                                    <li><Link className="lolo" to="#">Webcam</Link></li>
                                    <li><Link className="lolo" to="#">Memory (RAM)</Link></li>
                                    <li><Link className="lolo" to="#">Motherboards</Link></li>
                                    <li><Link className="lolo" to="#">Keyboards</Link></li>
                                    <li><Link className="lolo" to="#">Headphones</Link></li>
                                  </ul>
                                </div>


                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                  <h2 className="title">Cameras</h2>
                                  <ul className="links">
                                    <li><Link className="lolo" to="#">Accessories</Link></li>
                                    <li><Link className="lolo" to="#">Binoculars</Link></li>
                                    <li><Link className="lolo" to="#">Telescopes</Link></li>
                                    <li><Link className="lolo" to="#">Camcorders</Link></li>
                                    <li><Link className="lolo" to="#">Digital</Link></li>
                                    <li><Link className="lolo" to="#">Film Cameras</Link></li>
                                    <li><Link className="lolo" to="#">Flashes</Link></li>
                                    <li><Link className="lolo" to="#">Lenses</Link></li>
                                    <li><Link className="lolo" to="#">Surveillance</Link></li>
                                    <li><Link className="lolo" to="#">Tripods</Link></li>
                                  </ul>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                  <h2 className="title">Mobile Phones</h2>
                                  <ul className="links">
                                    <li><Link className="lolo" to="#">Apple</Link></li>
                                    <li><Link className="lolo" to="#">Samsung</Link></li>
                                    <li><Link className="lolo" to="#">Lenovo</Link></li>
                                    <li><Link className="lolo" to="#">Motorola</Link></li>
                                    <li><Link className="lolo" to="#">LeEco</Link></li>
                                    <li><Link className="lolo" to="#">Asus</Link></li>
                                    <li><Link className="lolo" to="#">Acer</Link></li>
                                    <li><Link className="lolo" to="#">Accessories</Link></li>
                                    <li><Link className="lolo" to="#">Headphones</Link></li>
                                    <li><Link className="lolo" to="#">Memory Cards</Link></li>
                                  </ul>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-menu custom-banner"> <Link className="lolo" to="#"><img alt="" src="assets/images/banners/banner-side.png" /></Link> </div>

                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown hidden-sm"> <Link className="lolo" to="category.html">Health & Beauty <span className="menu-label new-menu hidden-xs">new</span> </Link> </li>
                      <li className="dropdown hidden-sm"> <Link className="lolo" to="category.html">Watches</Link> </li>
                      <li className="dropdown"> <Link className="lolo" to="contact.html">Jewellery</Link> </li>
                      <li className="dropdown"> <Link className="lolo" to="contact.html">Shoes</Link> </li>
                      <li className="dropdown"> <Link className="lolo" to="contact.html">Kids & Girls</Link> </li>
                      <li className="dropdown"> <Link to="#" className="dropdown-toggle lolo" data-hover="dropdown" data-toggle="dropdown">Pages</Link>
                        <ul className="dropdown-menu pages">
                          <li>
                            <div className="yamm-content">
                              <div className="row">
                                <div className="col-xs-12 col-menu">
                                  <ul className="links">
                                    <li><Link className="lolo" to="home.html">Home</Link></li>
                                    <li><Link className="lolo" to="category.html">Category</Link></li>
                                    <li><Link className="lolo" to="detail.html">Detail</Link></li>
                                    <li><Link className="lolo" to="shopping-cart.html">Shopping Cart Summary</Link></li>
                                    <li><Link className="lolo" to="checkout.html">Checkout</Link></li>
                                    <li><Link className="lolo" to="blog.html">Blog</Link></li>
                                    <li><Link className="lolo" to="blog-details.html">Blog Detail</Link></li>
                                    <li><Link className="lolo" to="contact.html">Contact</Link></li>
                                    <li><Link className="lolo" to="sign-in.html">Sign In</Link></li>
                                    <li><Link className="lolo" to="my-wishlist.html">Wishlist</Link></li>
                                    <li><Link className="lolo" to="terms-conditions.html">Terms and Condition</Link></li>
                                    <li><Link className="lolo" to="track-orders.html">Track Orders</Link></li>
                                    <li><Link className="lolo" to="product-comparison.html">Product-Comparison</Link></li>
                                    <li><Link className="lolo" to="faq.html">FAQ</Link></li>
                                    <li><Link className="lolo" to="404.html">404</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown  navbar-right special-menu"> <Link className="lolo" to="#">Todays offer</Link> </li>
                    </ul>

                    <div className="clearfix"></div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>




      </header>


</div>
      )
}

export default NavBar