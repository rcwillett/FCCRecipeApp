import * as React from "react";
import {Recipe} from "../components/recipe.jsx";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0,
      recipes: [{name: 'coolRecipe1', ingredients: [{name: 'oregano', measurement: 'units', quantity: 10}, {name: 'basil', measurement: 'units', quantity: 2}]}, {name: 'coolRecipe2', ingredients: [{name: 'basil', measurement: 'items', quantity: 2}]}]
    };
  }
  render(){
    return (
      <div>
      {this.state.recipes.map((recipe, index)=>{return <Recipe key={index} id={index} modifyRecipe = {this.modifyRecipe.bind(this)} isActive={index === this.state.activeTab} {...recipe} />;})}
    </div>
    );
  }
  onComponentDidMount(){

  }
  addRecipe(){
    let newRecipe = new recipeObject(name, ingredients);
    let newList = this.state.recipes.concat([newRecipe]);
    this.setState(Object.assign({},this.state, {recipes: newList}));
  }
  modifyRecipe(index, ingredients){
    console.log(ingredients);
  }
}

class recipeObject {
  constructor(name, ingredients){
    this.name = name;
    this.ingredients = [];
  }
}

class ingredientObject {
  constructor(amount, measurement, name){
    this.amount = amount;
    this.measurement = measurement;
    this.name = name;
  }
}

export { App };
