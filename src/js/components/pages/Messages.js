import React from "react"

export default class Messages extends React.Component {
	render() {
		const { query } = this.props.location;
		const { params } = this.props;
		const { message } = params;
		const { date, filter } = query;
		return (
			<div>
				<h1>Friends ({message})</h1>
				<p>date: {date}, filter: {filter}</p>
			</div>
		)
	}
}