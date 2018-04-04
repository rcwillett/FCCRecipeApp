import * as React from "react";

class Recipe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
      isEditing: props.isActive,
      ingredients: this.props.ingredients,
      measurements: ['oz', 'lb', 'mg', 'g', 'kg', 'ml', 'Units']
    };
  }
  render(){
    return(<div className="wrapper">
      {this.state.isEditing ? (
        <form noValidate="noValidate" onSubmit={this.props.modifyRecipe(this.props.index, this.state.ingredients)}>
          {this.state.ingredients.map((ingredient, index)=>{
            return <div key={index} className="row">
              <div className="col-sm-6 col-md-2">
                <label for="amount" className="w-100">Quantity</label>
                <input id="amount" className="w-100" type="text" value={this.state.ingredients[index].quantity} index={index} name={'quantity'} onChange={this.changeMeasurement.bind(this)} />
              </div>
              <div className="col-sm-6 col-md-2">
                <label for="measurement" className="w-100">Measurement</label>
                <select id="measurement" className="w-100" placeholder="select measurement" index={index} name={'measurment'} value={this.state.ingredients[index].measurement} onChange={this.changeMeasurement.bind(this)}>
                  {this.state.measurements.map((measurement, index)=><option key={index} value={measurement}>{measurement}</option>)}
                </select>
              </div>
              <div className="col-sm-12 col-md-8">
                <label for="ingredient" className="w-100">Ingredient</label>
                <input id="ingredient" className="w-100" type="text" value={this.state.ingredients[index].name} index={index} name={'name'} onChange={this.changeMeasurement.bind(this)} />
              </div>
            </div>
          })}
        </form>
      ) :
      (<div className="col-sm-12">
        <h2>{this.props.name}</h2>
        {this.state.ingredients.map((ingredient, index)=>{
          return <div key={index}>{ingredient.name + ' ' + ingredient.measurement + ' ' + ingredient.quantity}: {index}</div>;
        })}
      </div>)}
    </div>);
  }

  changeMeasurement(event){
    console.log(event);
  }

}

export { Recipe };
