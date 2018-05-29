import React from "react";

class Form extends React.Component {
	render() {
		return(
		
		
			<form onSubmit={this.props.getweather} >
				<input type="text" name="city" placeholder="Enter a city.." />
				<input type="text" name="country" placeholder="Enter a country.." />
				<button>Get Weather</button>
				
			</form>
		
		
		);
	}
}

export default Form;