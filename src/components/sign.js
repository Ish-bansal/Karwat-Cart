import React from 'react';
import { Link } from 'react-router-dom';


const Sign =()=>{
    return(<>
        <div className="breadcrumb">
	    <div className="container">
		<div className="breadcrumb-inner">
			<ul className="list-inline list-unstyled">
				<li><Link to="home.html">Home</Link></li>
				<li className='active'>Login</li>
			</ul>
		</div>
	</div>
</div>
<div className="body-content">
	<div className="container">
		<div className="sign-in-page">
			<div className="row">	
<div className="col-md-6 col-sm-6 sign-in">
	<h4 className="">Sign in</h4>
	<p className="">Hello, Welcome to your account.</p>
	<div className="social-sign-in outer-top-xs">
		<Link to="#" className="facebook-sign-in"><i className="fa fa-facebook"></i> Sign In with Facebook</Link>
		<Link to="#" className="twitter-sign-in"><i className="fa fa-twitter"></i> Sign In with Twitter</Link>
	</div>
	<form className="register-form outer-top-xs" role="form">
		<div className="form-group">
		    <label className="info-title" for="exampleInputEmail1">Email Address <span>*</span></label>
		    <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1"/>
		</div>
	  	<div className="form-group">
		    <label className="info-title" for="exampleInputPassword1">Password <span>*</span></label>
		    <input type="password" className="form-control unicase-form-control text-input" id="exampleInputPassword1" />
		</div>
		<div className="radio outer-xs">
		  	<label>
		    	<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>Remember me!
		  	</label>
		  	<Link to="#" className="forgot-password pull-right">Forgot your Password?</Link>
		</div>
	  	<button type="submit" className="btn-upper btn btn-primary checkout-page-button">Login</button>
	</form>					
</div>
<div className="col-md-6 col-sm-6 create-new-account">
	<h4 className="checkout-subtitle">Create a new account</h4>
	<p className="text title-tag-line">Create your new account.</p>
	<form className="register-form outer-top-xs" role="form">
		<div className="form-group">
	    	<label className="info-title" for="exampleInputEmail2">Email Address <span>*</span></label>
	    	<input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail2" />
	  	</div>
        <div className="form-group">
		    <label className="info-title" for="exampleInputEmail1">Name <span>*</span></label>
		    <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
		</div>
        <div className="form-group">
		    <label className="info-title" for="exampleInputEmail1">Phone Number <span>*</span></label>
		    <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
		</div>
        <div className="form-group">
		    <label className="info-title" for="exampleInputEmail1">Password <span>*</span></label>
		    <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
		</div>
         <div className="form-group">
		    <label className="info-title" for="exampleInputEmail1">Confirm Password <span>*</span></label>
		    <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
		</div>
	  	<button type="submit" className="btn-upper btn btn-primary checkout-page-button">Sign Up</button>
	</form>
	
	
</div>	
		</div>
		</div>
		
<div id="brands-carousel" className="logo-slider wow fadeInUp">

		<div className="logo-slider-inner">	
			<div id="brand-slider" className="owl-carousel brand-slider custom-carousel owl-theme">
				<div className="item m-t-15">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item m-t-10">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand3.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand6.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>
		    </div>
		</div>
	
</div>
</div>
</div>
</>
)
}

export default Sign;
