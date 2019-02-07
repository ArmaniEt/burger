import React, {Component} from 'react';
import './App.css';
import BurgerComponent from "./Burger/Burger";
import OrderForm from "./OrderForm/OrderForm";


const availableIngredients = [
    {name: 'salad', price: 5, label: 'Салат'}, // class Meat
    {name: 'bacon', price: 30, label: 'Бекон'},
    {name: 'meat', price: 50, label: 'Мясо'},
    {name: 'cheese', price: 20, label: 'Сыр'}
];
export {availableIngredients};


class App extends Component {
    render() {
        return (
            <div>
                <BurgerComponent ingredients={this.state.ingredients}/>
                <OrderForm
                    isDisabled={this.isButtonDisabled}
                    quantity={this.getQuantity}
                    changeIngredient={this.ingredientChanger}
                    total={this.countTotal()}/>
            </div>
        );
    }


    state = {
        ingredients: {
            salad: {count: 0, total: 0},
            cheese: {count: 0, total: 0},
            meat: {count: 0, total: 0},
            bacon: {count: 0, total: 0}
        }
    };


    // function ingredientChanger(name, value)
    // if event 'add' count+ => remove, else count- => add

    ingredientChanger = (name, event) => {
        let ingredient = {...this.state.ingredients[name]};
        let price = availableIngredients.find(item => item.name === name).price;
        if (event.target.value === 'add') {
            ingredient.count += 1;
        }else {
            ingredient.count -= 1;
        }
        ingredient.total = ingredient.count * price;

        let ingredients = {...this.state.ingredients};
        ingredients[name] = ingredient;

        let state = {...this.state};
        state.ingredients = ingredients;

        this.setState(state);

    };


    countTotal = () => {
        let total = 0;
        let keys = Object.keys(this.state.ingredients);
        let counter = 0;


        while (counter < keys.length) {
            total += this.state.ingredients[keys[counter]].total;
            counter++;
        }
        return total;


    };

    getQuantity = (name) => {
        // get ingredient by his name
        // return count property of that ingredient
        return this.state.ingredients[name].count;

    };

    //isDisabled method
    isButtonDisabled = (name) => {
        return this.state.ingredients[name].count === 0;

    };

}

export default App;
