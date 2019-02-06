import React from 'react';
import './OrderForm.css';
import FormBacon from '../components/FormBacon/FormBacon'
import FormCheese from '../components/FormCheese/FormCheese'
import FormMeat from '../components/FormMeat/FormMeat'
import FormSalad from '../components/FormSalad/FormSalad'

function OrderForm(props) {
    return(
        <div className="form_border">
            <h3>Current Price: </h3>
            <div>
                <FormBacon/>
                <FormCheese/>
                <FormMeat/>
                <FormSalad/>
            </div>
        </div>
    )

}

export default OrderForm;


// how to pass a total price to OrderForm



// render strings with components
// render strings here
// create a different strings as components
// import their
