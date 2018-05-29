import React from "react";

class Weather extends React.Component {
	render() {
		return(
		
		<div>
			{ this.props.temperature && <p>Temp : {this.props.temperature - 273.15}<sup>o</sup> <span> Celcius</span></p>}
			{this.props.city && <p>City : {this.props.city}</p>}
			{this.props.country && <p>Country : {this.props.country}</p>}
			{this.props.humidity && <p>Humidity : {this.props.humidity}</p>}
			{this.props.description && <p>Description : {this.props.description}</p>}
			{this.props.error && <p>{this.props.error}</p> }
		</div>
		
		);
	}
}

export default Weather;