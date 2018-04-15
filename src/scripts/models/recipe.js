import ingredientObject from './ingredient.js';

export default class recipeObject {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients.length > 0 ? ingredients : [new ingredientObject('', 'units', '')];
    }
};
