import * as React from "react";

class Recipe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
      isEditing: props.isActive,
      ingredients: this.props.ingredients,
      measurements: ['oz', 'lb', 'mg', 'g', 'kg', 'ml', 'units']
    };
  }
  render(){
    return(<div className="wrapper">
      {this.state.isEditing ? (
        <form noValidate="noValidate" onSubmit={this.props.modifyRecipe(this.props.index, this.state.ingredients)}>
          {this.state.ingredients.map((ingredient, index)=>{
            return <div key={index} className="row">
              <div className="col-sm-6 col-md-2">
                <label htmlFor="amount" className="w-100">Quantity</label>
                <input id="amount" className="w-100" type="text" value={this.state.ingredients[index].quantity} name={'quantity'} onChange={(event)=>{this.changeMeasurement(event, index, this)}} />
              </div>
              <div className="col-sm-6 col-md-2">
                <label htmlFor="measurement" className="w-100">Measurement</label>
                <select id="measurement" className="w-100" placeholder="select measurement" name={'measurment'} value={this.state.ingredients[index].measurement} onChange={(event)=>{this.changeMeasurement(event, index, this)}}>
                  {this.state.measurements.map((measurement, index)=><option key={index} value={measurement}>{measurement}</option>)}
                </select>
              </div>
              <div className="col-sm-12 col-md-8">
                <label htmlFor="ingredient" className="w-100">Ingredient</label>
                <input id="ingredient" className="w-100" type="text" value={this.state.ingredients[index].name} name={'name'} onChange={(event)=>{this.changeMeasurement(event, index, this)}} />
              </div>
            </div>
          })}
          <div className=" row col-sm-12 col-md-2">
            <input className="primary" type="submit" value="Update" />
          </div>
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

  changeMeasurement(event, index, scope){
    let newState = Object.assign({}, scope.state);
    newState.ingredients[index][event.target.name] = event.target.value;
    scope.setState(newState);
    console.log(scope.state);
  }
}

export { Recipe };