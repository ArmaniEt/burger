import React from 'react';
import "../../index.css"


function IngredientControl(props) {
    return (
        <div className="element_form_block">
            <h3 className="form_article">{props.label}: {props.ingredientQuantity()}</h3>
            <button onClick={props.onRemoveIngredient} className="button_form" type="submit" >Less</button>
            <button onClick={props.onAddIngredient} className="button_form" type="submit">More</button>
        </div>
    )

}

export default IngredientControl;

