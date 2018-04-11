import * as React from "react";

class Recipe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: props.isActive,
      name: this.props.name,
      ingredients: this.props.ingredients,
      measurements: ['oz', 'lb', 'mg', 'g', 'kg', 'ml', 'units']
    };
  }

componentWillReceiveProps(nextProps){
  this.setState(Object.assign({}, this.state, {isActive : nextProps.isActive}))
}

  render(){
    return(<div className="wrapper">
      {this.state.isActive ? (
        <form noValidate="noValidate" onSubmit={(e)=> {e.preventDefault(); this.props.modifyRecipe(this.props.index, this.state.name, this.state.ingredients);}}>
          <div className="row col-sm-12">
            <input type="text" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.changeProperty.bind(this)} />
          </div>
          {this.state.ingredients.map((ingredient, index)=>{
            return <div key={index} className="row">
              <div className="col-sm-6 col-md-2">
                <label htmlFor="amount" className="w-100">Quantity</label>
                <input id="amount" className="w-100" type="text" value={this.state.ingredients[index].quantity} name={'quantity'} onChange={(event)=>{this.changeMeasurement.call(this, event, index)}} />
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
          <div className="row col-sm-12 col-md-2">
            <input className="primary" type="submit" value="Update" />
          </div>
        </form>
      ) :
      (<div className="col-sm-12">
        <h2>{this.props.name}</h2>
        {this.state.ingredients.map((ingredient, index)=>{
          return <div key={index}>{ingredient.quantity + ' ' + ingredient.measurement + ' - ' +  ingredient.name}</div>;
        })}
      </div>)}
    </div>);
  }

  changeProperty(event){
    let updateObject = {};
    updateObject[event.target.name] = event.target.value;
    this.setState(Object.assign({}, this.state, updateObject));
    console.log(this.state);
  }

  changeMeasurement(event, index){
    let newState = Object.assign({}, this.state);
    newState.ingredients[index][event.target.name] = event.target.value;
    this.setState(newState);
  }
}

export { Recipe };
