import React from "react";

class Title extends React.Component {
	render() {
		return(
		
		<div>
			<h1>Find City Weather</h1>
			{this.props.city && this.props.country && <p>Location : {this.props.city},{this.props.country} </p> }
		</div>
		
		);
	}
}

export default Title;