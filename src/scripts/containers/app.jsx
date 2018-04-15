import * as React from "react";
import {Recipe} from "../components/recipe.jsx";
import recipeObject from '../models/recipe.js';
import ingredientObject from  '../models/ingredient.js';

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
      {this.state.recipes.map((recipe, index)=>{return <Recipe index={index} id={index} editRecipe={this.editRecipe.bind(this)} modifyRecipe={this.modifyRecipe.bind(this)} isActive={index === this.state.activeTab} {...recipe} />;})}
      <button onClick={this.addRecipe.bind(this)}>Add New Recipe</button>
    </div>
    );
  }
  addRecipe(){
    let newRecipe = new recipeObject(name, []);
    let newList = this.state.recipes.concat([newRecipe]);
    let activeTab = newList.length - 1;
    this.setState(Object.assign({},this.state, {recipes: newList, activeTab: activeTab}));
  }

  editRecipe(newActiveTab){
    this.setState(Object.assign({}, this.state, {'activeTab': newActiveTab}));
  }

  modifyRecipe(index, name, ingredients){
    let modifiedRecipe = new recipeObject(name, ingredients);
    let newList;
    if(index > this.state.recipes.length - 1){
      newList = this.state.recipes.concat([modifiedRecipe]);
    }
    else{
      newList = this.state.recipes.concat([]);
      newList[index] = modifiedRecipe;
    }
    this.setState({recipes: newList, activeTab: -1});
  }
}

export { App };
