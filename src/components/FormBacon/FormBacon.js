import React from "react";
import "../../index.css"


function FormBacon(props) {
    return (
        <div className="element_form_block">
            <h3 className="form_article">Bacon: {props.baconQuantity()}</h3>
            <button onClick={props.onClickRemove} className="button_form" type="submit" >Less</button>
            <button onClick={props.onClickAdd} className="button_form" type="submit">More</button>
        </div>
    )

}

export default FormBacon;

// how to pass function here to do onclick