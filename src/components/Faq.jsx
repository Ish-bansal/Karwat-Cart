import React from 'react';
import Ques from './Ques';
import Sdata from './Sdata';
import { Link } from 'react-router-dom';

const Faq=()=>{
    return(
        <>
    <div className="breadcrumb">
	    <div className="container">
		    <div className="breadcrumb-inner">
			<ul className="list-inline list-unstyled">
				<li><Link to="home.html">Home</Link></li>
				<li className='active'>FAQ</li>
			</ul>
		    </div>
        </div>
    </div>

<div className="body-content">
	<div className="container">
		<div className="checkout-box faq-page">
			<div className="row">
				<div className="col-md-12">
					<h2 className="heading-title">Frequently Asked Questions</h2>
					<span className="title-tag">Last Updated on November 02, 2014</span>
					<div className="panel-group checkout-steps" id="accordion">

                        {Sdata.map((val)=>{
                           
                            return(
                                <Ques
                                check = {val.check}
                                link = {val.link}
                                num ={val.num}
                                ques ={val.ques}
                                main ={val.main}
                                id ={val.id}
                                />
                            )
                            })}
					  	
					</div>
				</div>
			</div>
		</div>
    </div>
</div>


       </>
    )
}

export default Faq;