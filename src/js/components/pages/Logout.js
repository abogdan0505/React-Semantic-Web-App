import React from "react"

export default class Logout extends React.Component {
	render() {
		const img = require('../../../images/testimonials-test1.jpg');
		return (
			<div>
				<h1 class="ui header">
					<img src={img}/>
					Some image
				</h1>
			</div>
		)
	}
}