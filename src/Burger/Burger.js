import React from 'react';
import './Burger.css';
import Bacon from '../components/Bacon/Bacon';
import Cheese from '../components/Cheese/Cheese';
import Meat from '../components/Meat/Meat';
import Salad from '../components/Salad/Salad';




function BurgerComponent(props) {

    const {salad, meat, cheese, bacon} = props.ingredients;

    let ingredients = [];

    for (let i = 0; i < salad.count; i++) ingredients.push(<Salad/>);
    for (let i = 0; i < bacon.count; i++) ingredients.push(<Bacon/>);
    for (let i = 0; i < cheese.count; i++) ingredients.push(<Cheese/>);
    for (let i = 0; i < meat.count; i++) ingredients.push(<Meat/>);

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients}
            <div className="BreadBottom"/>
        </div>

    );

}

export default BurgerComponent;