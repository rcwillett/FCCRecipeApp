export default class ingredientObject {
    constructor(quantity, measurement, name) {
        this.quantity = quantity || '';
        this.measurement = measurement || 'units';
        this.name = name || '';
    }
};