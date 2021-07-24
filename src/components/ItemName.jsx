import React from 'react';
import { Link } from 'react-router-dom';
// import ItemData from './components/ItemData';

const ItemName=(props)=>{
    return(
        <>
            <tbody>
                <tr>
					<td className="romove-item"><Link to="#" title="cancel" className="icon"><i className="fa fa-trash-o"></i></Link></td>
					<td className="cart-image">
						<Link className="entry-thumbnail" to="detail.html">
						    <img src={props.link} alt=""/>
						</Link>
					</td>
					<td className="cart-product-name-info">
						<h4 className='cart-product-description'><Link to="detail.html">Floral Print Buttoned</Link></h4>
						<div className="row">
							<div className="col-sm-4">
								<div className="rating rateit-small"></div>
							</div>
							<div className="col-sm-8">
								<div className="reviews">
									(06 Reviews)
								</div>
							</div>
						</div>
						<div className="cart-product-info">
							<span className="product-color">COLOR:<span>{props.color}</span></span>
						</div>
					</td>
					<td className="cart-product-edit"> <Link to="#" className="product-edit">Edit</Link></td>
					<td className="cart-product-quantity">
						<div className="quant-input">
				                <div className="arrows">
				                  <div className="arrow plus gradient"><span className="ir"><i className="icon fa fa-sort-asc"></i></span></div>
				                  <div className="arrow minus gradient"><span className="ir"><i className="icon fa fa-sort-desc"></i></span></div>
				                </div>
				                <input type="text" value="1"/>
			              </div>
		            </td>
					<td className="cart-product-sub-total"><span className="cart-sub-total-price">$300.00</span></td>
					<td className="cart-product-grand-total"><span className="cart-grand-total-price">$300.00</span></td>
				</tr>
            </tbody>
        </>
    )
}
export default ItemName;