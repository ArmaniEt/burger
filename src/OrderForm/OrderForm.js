import React from 'react';
import './OrderForm.css';
import FormBacon from '../components/FormBacon/FormBacon'
import FormCheese from '../components/FormCheese/FormCheese'
import FormMeat from '../components/FormMeat/FormMeat'
import FormSalad from '../components/FormSalad/FormSalad'
import {availableIngredients} from "../App";

function OrderForm(props) {
    return(
        <div className="form_border">
            <h3 className="order_form_article">Current Price: {props.total} </h3>
            <div>
                <FormBacon // try to add map function here with availableIngredients
                    baconQuantity = {() => props.quantity('bacon')}
                    onClickRemove = {() => props.clickRemoveIngredient('bacon')}
                    onClickAdd = {() => props.clickAddIngredient('bacon')}/>
                <FormCheese
                    cheeseQuantity = {() => props.quantity('cheese')}
                    onClickRemove = {() => props.clickRemoveIngredient('cheese')}
                    onClickAdd = {() => props.clickAddIngredient('cheese')}/>
                <FormMeat
                    meatQuantity = {() => props.quantity('meat')}
                    onClickRemove = {() => props.clickRemoveIngredient('meat')}
                    onClickAdd = {() => props.clickAddIngredient('meat')}/>
                <FormSalad
                    saladQuantity = {() => props.quantity('salad')}
                    onClickRemove = {() => props.clickRemoveIngredient('salad')}
                    onClickAdd = {() => props.clickAddIngredient('salad')}/>
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
