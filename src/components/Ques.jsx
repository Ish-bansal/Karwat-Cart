import React from 'react';
import { Link } from 'react-router-dom';

const Ques=(props)=>{
    return(
        <>
            <div className={`"panel panel-default ${props.check}"`}>
				<div className="panel-heading">
					<h4 className="unicase-checkout-title">
						<Link data-toggle="collapse" className="collapsed lolo" data-parent="#accordion" to={props.link}>
						    <span>{props.num}</span>{props.ques}	
						</Link>
					</h4>
				</div>
				<div id={props.id} className="panel-collapse collapse">
						<div className="panel-body">
						    {props.main}
						</div>
				</div>
			</div>
        </>
    )
}

export default Ques;