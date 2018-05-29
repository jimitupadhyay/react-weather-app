import React from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "41695ad3f8527fcbe30a355cb1a1d9be";



class App extends React.Component {
	
	state = {
		temperature : undefined,
		city : undefined,
		country : undefined,
		humidity : undefined,
		description : undefined,
		error : undefined
	}
	
	getweather = async (e) => {
		e.preventDefault();
		
		const city = e.target.elements.city.value;
		
		const country = e.target.elements.country.value;
		
		const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
		
		const data = await API_CALL.json();
		
		console.log(data);
		if(data.id){
		this.setState({
		temperature : data.main.temp,
		country : data.sys.country,
		city : data.name,
		humidity : data.main.humidity,
		description : data.weather[0].description,
		error: "",
		});
		}else if(city === "" || country === ""){
		this.setState({
		temperature : undefined,
		country : undefined,
		city : undefined,
		humidity : undefined,
		description : undefined,
		error: "Please, Enter a value..",
		});
		}
		else if(data.message){
			this.setState({
		temperature : undefined,
		country : undefined,
		city : undefined,
		humidity : undefined,
		description : undefined,
		error: (data.message).toUpperCase(),
		});
		}
	}
	render(){
		
		return (
		
			<div>
				<h1><Title 
				city = {this.state.city}
				country = {this.state.country}
				/></h1>
				<h2><Form getweather={this.getweather} /></h2>
				<h2><Weather 
				
				temperature={this.state.temperature}
				city={this.state.city}
				country={this.state.country}
				humidity={this.state.humidity}
				description={this.state.description}
				error={this.state.error}
				
				/></h2>
			</div>
		
		);
		
	}
	
}

export default App;