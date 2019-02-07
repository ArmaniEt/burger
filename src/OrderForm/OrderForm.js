import React from 'react';
import './OrderForm.css';
import {availableIngredients} from "../App";
import IngredientControl from '../components/IngredientControl/IngredientControl';


function OrderForm(props) {

    return (
        <div className="form_border">
            <h3 className="order_form_article">Current Price: {props.total} </h3>
            <div>

                {availableIngredients.map(item => <IngredientControl
                    label={item.label}
                    onRemoveIngredient={() => props.clickRemoveIngredient(item.name)}
                    onAddIngredient={() => props.clickAddIngredient(item.name)}
                    ingredientQuantity={() => props.quantity(item.name)}
                />)}

            </div>

        </div>


    )

}

export default OrderForm;

// how to get rid off many functions call in form strings


// how to pass a total price to OrderForm


// render strings with components
// render strings here
// create a different strings as components
// import their
