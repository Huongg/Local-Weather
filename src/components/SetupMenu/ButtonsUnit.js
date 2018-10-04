import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import AppActions from '../../actions/AppActions';
import AppStore from '../../store/AppStore.js';

class ButtonsUnit extends Component {
	constructor(props) {
		super(props);
	}

	handleClick = (e) => {
	
		let chosenUnit = e.target.id;

		switch (chosenUnit) {
		    case "degreeC":
		    	AppActions.chooseTempUnit("metric");
		        break;
		    case "degreeF":
		    	AppActions.chooseTempUnit("imperial");
		        break;
		    case "ok":
		    	AppActions.clickOk(chosenUnit);
		        break;
		}
		
	}


	render() {
		return(
			<div>
			  <ButtonToolbar>
			    <Button id="degreeC" bsSize="large" className="temp-unit" style={{"fontSize": "20px"}} onClick={this.handleClick}>&deg;C</Button>
			    <Button id="degreeF" bsSize="large" className="temp-unit" style={{"fontSize": "20px"}} onClick={this.handleClick}>&deg;F</Button>
			  </ButtonToolbar>
			  
			  <Button id="ok" bsStyle="primary" bsSize="small" style={{"fontSize": "20px"}} onClick={this.handleClick}>OK</Button>
			</div>
		)
	}
}

export default ButtonsUnit;