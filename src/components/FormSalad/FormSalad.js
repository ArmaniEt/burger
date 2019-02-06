import React from "react";
import "../../index.css"


function FormSalad(props) {
    return (
        <div className="element_form_block">
            <h3 className="form_article">Salad: {props.saladQuantity()}</h3>
            <button onClick={props.onClickRemove} className="button_form" type="submit" >Less</button>
            <button onClick={props.onClickAdd} className="button_form" type="submit">More</button>
        </div>
    )

}

export default FormSalad;