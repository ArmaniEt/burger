import React from 'react';
import './OrderForm.css';

function OrderForm(props) {
    return(
        <div>
            <h3>Current Price: </h3>
            <div>
                <p>Salad</p>
                <button>Less</button>
                <button>More</button>
            </div>
        </div>
    )

}

export default OrderForm;
