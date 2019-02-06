import React, {Component} from 'react';
import './App.css';
import BurgerComponent from "./Burger/Burger";
import OrderForm from "./OrderForm/OrderForm";


const availableIngredients = [
    {name: 'salad', price: 5, label: 'Салат'},
    {name: 'bacon', price: 30, label: 'Бекон'},
    {name: 'meat', price: 50, label: 'Мясо'},
    {name: 'cheese', price: 20, label: 'Сыр'}
    ];

class App extends Component {
    render() {
        return (
            <div>
                <BurgerComponent ingredients = {this.state.ingredients}/>
                <OrderForm/>
            </div>
        );
    }


    state = {
        ingredients: {
            salad: {count: 0, total: 0},
            cheese: {count: 1, total: 0},
            meat: {count: 2, total: 0},
            bacon: {count: 1, total: 0}
        }
    };


    addIngredient = (name) => {
        let ingredient = {...this.state.ingredients[name]};
        let price = availableIngredients.find(item => item.name === name).price;

        ingredient.count += 1;
        ingredient.total = ingredient.count * price;

        let ingredients = {...this.state.ingredients};
        ingredients[name] = ingredient;

        let state = {...this.state};
        state.ingredients = ingredients;

        this.setState(state);


    };

    removeIngredient = (name) => {
        let ingredient = {...this.state.ingredients[name]};
        let price = availableIngredients.find(item => item.name === name).price;

        if (ingredient.count > 0) {
            ingredient.count -= 1;
        }

        ingredient.total = ingredient.count * price;

        let ingredients = {...this.state.ingredients};
        ingredients[name] = ingredient;

        let state = {...this.state};
        state.ingredients = ingredients;

        this.setState(state);

    }
}

export default App;
