import * as React from "react";
import {Recipe} from "../components/recipe.jsx";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: -1,
      recipes: [{name: 'coolRecipe1', ingredients: [{name: 'oregano', measurement: 'units', quantity: 10}, {name: 'basil', measurement: 'units', quantity: 2}]}, {name: 'coolRecipe2', ingredients: [{name: 'basil', measurement: 'items', quantity: 2}]}]
    };
  }
  render(){
    return (
      <div>
      {this.state.recipes.map((recipe, index)=>{return <Recipe key={index} id={index} modifyRecipe = {this.modifyRecipe.bind(this)} isActive={index === this.state.activeTab} {...recipe} />;})}
      <button onClick={this.addRecipe.bind(this)}>Add New Recipe</button>
    </div>
    );
  }
  onComponentDidMount(){

  }
  addRecipe(){
    let newRecipe = new recipeObject(name, []);
    let newList = this.state.recipes.concat([newRecipe]);
    let activeTab = newList.length - 1;
    this.setState(Object.assign({},this.state, {recipes: newList, activeTab: activeTab}));
  }
  modifyRecipe(index, name, ingredients){
    let modifiedRecipe = new recipeObject(name, ingredients);
    let newList = this.state.recipes.concat([]);
    newList[index] = modifiedRecipe;
    this.setState({recipes: newList, activeTab: -1});
  }
}

class recipeObject {
  constructor(name, ingredients){
    this.name = name;
    this.ingredients = ingredients.length > 0 ? ingredients : [new ingredientObject(0, 'units', '')];
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
