import React from 'react'
import { Link } from 'react-router-dom'


// import '../assets/css/main.css'
// import '../assets/css/blue.css'
// import '../assets/css/owl.carousel.css'
// import '../assets/css/owl.transitions.css'
// import '../assets/css/animate.min.css'
// import '../assets/css/rateit.css'
// import '../assets/css/bootstrap-select.min.css'


const Footer = () => {

     return (
          <div>
               <footer id="footer" className="footer color-bg">
                    <div className="footer-bottom">
                         <div className="container">
                              <div className="row">
                                   <div className="col-xs-12 col-sm-6 col-md-3">
                                        <div className="module-heading">
                                             <h4 className="module-title">Contact Us</h4>
                                        </div>


                                        <div className="module-body">
                                             <ul className="toggle-footer" >
                                                  <li className="media">
                                                       <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i> </span> </div>
                                                       <div className="media-body">
                                                            <p>ThemesGround, 789 Main rd, Anytown, CA 12345 USA</p>
                                                       </div>
                                                  </li>
                                                  <li className="media">
                                                       <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-mobile fa-stack-1x fa-inverse"></i> </span> </div>
                                                       <div className="media-body">
                                                            <p>+(888) 123-4567+(888) 456-7890</p>
                                                       </div>
                                                  </li>
                                                  <li className="media">
                                                       <div className="pull-left"> <span className="icon fa-stack fa-lg"> <i className="fa fa-envelope fa-stack-1x fa-inverse"></i> </span> </div>
                                                       <div className="media-body"> <span><Link to="#">boxshop@themesground.com</Link></span> </div>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="col-xs-12 col-sm-6 col-md-3">
                                        <div className="module-heading">
                                             <h4 className="module-title">Customer Service</h4>
                                        </div>

                                        <div className="module-body">
                                             <ul className='list-unstyled'>
                                                  <li className="first"><Link to="#" title="Contact us">My Account</Link></li>
                                                  <li><Link to="#" title="About us">Order History</Link></li>
                                                  <li><Link to="#" title="faq">FAQ</Link></li>
                                                  <li><Link to="#" title="Popular Searches">Specials</Link></li>
                                                  <li className="last"><Link to="#" title="Where is my order?">Help Center</Link></li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="col-xs-12 col-sm-6 col-md-3">
                                        <div className="module-heading">
                                             <h4 className="module-title">Corporation</h4>
                                        </div>

                                        <div className="module-body">
                                             <ul className='list-unstyled'>
                                                  <li className="first"><Link title="Your Account" to="#">About us</Link></li>
                                                  <li><Link title="Information" to="#">Customer Service</Link></li>
                                                  <li><Link title="Addresses" to="#">Company</Link></li>
                                                  <li><Link title="Addresses" to="#">Investor Relations</Link></li>
                                                  <li className="last"><Link title="Orders History" to="#">Advanced Search</Link></li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="col-xs-12 col-sm-6 col-md-3">
                                        <div className="module-heading">
                                             <h4 className="module-title">Why Choose Us</h4>
                                        </div>

                                        <div className="module-body">
                                             <ul className='list-unstyled'>
                                                  <li className="first"><Link to="#" title="About us">Shopping Guide</Link></li>
                                                  <li><Link to="#" title="Blog">Blog</Link></li>
                                                  <li><Link to="#" title="Company">Company</Link></li>
                                                  <li><Link to="#" title="Investor Relations">Investor Relations</Link></li>
                                                  <li className=" last"><Link to="contact-us.html" title="Suppliers">Contact Us</Link></li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="copyright-bar">
                         <div className="container">
                              <div className="col-xs-12 col-sm-6 no-padding social">
                                   <ul className="link">
                                        <li className="fb pull-left"><Link target="_blank" rel="nofollow" to="#" title="Facebook"></Link></li>
                                        <li className="tw pull-left"><Link target="_blank" rel="nofollow" to="#" title="Twitter"></Link></li>
                                        <li className="googleplus pull-left"><Link target="_blank" rel="nofollow" to="#" title="GooglePlus"></Link></li>
                                        <li className="rss pull-left"><Link target="_blank" rel="nofollow" to="#" title="RSS"></Link></li>
                                        <li className="pintrest pull-left"><Link target="_blank" rel="nofollow" to="#" title="PInterest"></Link></li>
                                        <li className="linkedin pull-left"><Link target="_blank" rel="nofollow" to="#" title="Linkedin"></Link></li>
                                        <li className="youtube pull-left"><Link target="_blank" rel="nofollow" to="#" title="Youtube"></Link></li>
                                   </ul>
                              </div>
                              <div className="col-xs-12 col-sm-6 no-padding">
                                   <div className="clearfix payment-methods">
                                        <ul>
                                             <li><img src="assets/images/payments/1.png" alt="" /></li>
                                             <li><img src="assets/images/payments/2.png" alt="" /></li>
                                             <li><img src="assets/images/payments/3.png" alt="" /></li>
                                             <li><img src="assets/images/payments/4.png" alt="" /></li>
                                             <li><img src="assets/images/payments/5.png" alt="" /></li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>
     )
}

export default Footer