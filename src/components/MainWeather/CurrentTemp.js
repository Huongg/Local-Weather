import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import AppActions from '../../actions/AppActions';
const date_time_format = require('../../utils/date_time_format.js');

// import {WeatherAPI} from '../../actions/WeatherAPI';
// const WeatherAPI = require('../../actions/WeatherAPI');



class CurrentTemp extends Component {
	constructor(props) {
		super(props);
		this.defaultHeight = 40;
		this.defaultWidth = 40;
	}

	componentDidMount() {
		AppActions.fetchAPI();
	}

	render() {
		const { chosenUnit } = this.props;
		const { data } = this.props;
		const{ activeDate } = this.props;
		// let name, dailyForecast, temp, iconCode, iconSrc, description= "N/A";
		// let date;

		// // if(activeDate) {
			// if(tempInfo && tempInfo.length > 0) {
			// 	date= parseInt(activeDate);

			// 	tempData = tempInfo[date];
			// 	temp = Math.round(tempData.main.temp);
			// 	iconCode = tempData.weather.icon;
			// 	iconSrc = `http://openweathermap.org/img/w/${iconCode}.png` 
			// 	description = tempData.weather.description;
			// }
		
		// }

		// console.log("date is:");
		// console.log(date);

		// console.log(`final data is:`);
		// console.log(tempData);
 		
		let name, temp = "loading...";
		if(data.hasOwnProperty("city")) {
			name = data.city.name;
			// temp = data.
		}

		// console.log(this.props);
		return(
			<div className="temp-container">
		      <Jumbotron>
		      	<h1 className="country">{name}</h1>
		      	<h1 className="temp">18
		        	{chosenUnit=="metric" 
		        		? <span>&deg;C</span> 
		        		: <span>&deg;F</span> 
		        	}
		        </h1>
		      </Jumbotron>
		    </div>
		)
	}

}

export default CurrentTemp;