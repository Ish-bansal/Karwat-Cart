import React from 'react';
import ItemName from '../components/ItemName';
import ItemData1 from '../components/ItemData1' ;
import { Link } from 'react-router-dom';

const Cart=()=>{
    return(
        <>
<div className="breadcrumb">
	<div className="container">
		<div className="breadcrumb-inner">
			<ul className="list-inline list-unstyled">
				<li><Link to="#">Home</Link></li>
				<li className='active'>Shopping Cart</li>
			</ul>
		</div>
    </div>
</div>

<div className="body-content outer-top-xs">
	<div className="container">
		<div className="row ">
			<div className="shopping-cart">
				<div className="shopping-cart-table ">
	                <div className="table-responsive">
		            <table className="table">
			<thead>
				<tr>
					<th className="cart-romove item">Remove</th>
					<th className="cart-description item">Image</th>
					<th className="cart-product-name item">Product Name</th>
					<th className="cart-edit item">Edit</th>
					<th className="cart-qty item">Quantity</th>
					<th className="cart-sub-total item">Subtotal</th>
					<th className="cart-total last-item">Grandtotal</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<td colspan="7">
						<div className="shopping-cart-btn">
							<span className="">
								<Link to="#" className="btn btn-upper btn-primary outer-left-xs">Continue Shopping</Link>
								<Link to="#" className="btn btn-upper btn-primary pull-right outer-right-xs">Update shopping cart</Link>
							</span>
						</div>
					</td>
				</tr>
			</tfoot>
			
				{ItemData1.map((val)=>{
                    console.log(val)
                    return(
                        <ItemName 
                        link={val.link}
                        color={val.color}
                        />
                    )
                })}

			
		</table>
	</div>
</div>			
<div className="col-md-4 col-sm-12 estimate-ship-tax">
	<table className="table">
		<thead>
			<tr>
				<th>
					<span className="estimate-title">Estimate shipping and tax</span>
					<p>Enter your destination to get shipping and tax.</p>
				</th>
			</tr>
		</thead>
		<tbody>
				<tr>
					<td>
						<div className="form-group">
							<label className="info-title control-label">Country <span>*</span></label>
							<select className="form-control unicase-form-control selectpicker">
								<option>--Select options--</option>
								<option>India</option>
								<option>SriLanka</option>
								<option>united kingdom</option>
								<option>saudi arabia</option>
								<option>united arab emirates</option>
							</select>
						</div>
						<div className="form-group">
							<label className="info-title control-label">State/Province <span>*</span></label>
							<select className="form-control unicase-form-control selectpicker">
								<option>--Select options--</option>
								<option>TamilNadu</option>
								<option>Kerala</option>
								<option>Andhra Pradesh</option>
								<option>Karnataka</option>
								<option>Madhya Pradesh</option>
							</select>
						</div>
						<div className="form-group">
							<label className="info-title control-label">Zip/Postal Code</label>
							<input type="text" className="form-control unicase-form-control text-input" placeholder=""/>
						</div>
						<div className="pull-right">
							<button type="submit" className="btn-upper btn btn-primary">GET A QOUTE</button>
						</div>
					</td>
				</tr>
		</tbody>
	</table>
</div>

<div className="col-md-4 col-sm-12 estimate-ship-tax">
	<table className="table">
		<thead>
			<tr>
				<th>
					<span className="estimate-title">Discount Code</span>
					<p>Enter your coupon code if you have one..</p>
				</th>
			</tr>
		</thead>
		<tbody>
				<tr>
					<td>
						<div className="form-group">
							<input type="text" className="form-control unicase-form-control text-input" placeholder="You Coupon.."/>
						</div>
						<div className="clearfix pull-right">
							<button type="submit" className="btn-upper btn btn-primary">APPLY COUPON</button>
						</div>
					</td>
				</tr>
		</tbody>
	</table>
</div>

<div className="col-md-4 col-sm-12 cart-shopping-total">
	<table className="table">
		<thead>
			<tr>
				<th>
					<div className="cart-sub-total">
						Subtotal<span className="inner-left-md">$600.00</span>
					</div>
					<div className="cart-grand-total">
						Grand Total<span className="inner-left-md">$600.00</span>
					</div>
				</th>
			</tr>
		</thead>
		<tbody>
				<tr>
					<td>
						<div className="cart-checkout-btn pull-right">
							<button type="submit" className="btn btn-primary checkout-btn">PROCCED TO CHEKOUT</button>
							<span className="">Checkout with multiples address!</span>
						</div>
					</td>
				</tr>
		</tbody>
	</table>
</div>			
</div>
		</div>
        </div></div>
        </>
    )
}

export default Cart;