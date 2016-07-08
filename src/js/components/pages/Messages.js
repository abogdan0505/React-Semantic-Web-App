import React from "react"

import Article from '../templates/Article'

export default class Messages extends React.Component {

	render() {
		const { query }        = this.props.location;
		const { params }   	   = this.props;
		const { article }      = params;
		const { date, filter } = query;

		const Articles = [
			'Article',
			'Article',
			'Article',
			'Article',
		].map((title, i) => <Article key={i} title={title} /> );


		return (
			<div>


				<div class="ui grid">
					<div class="row">
						<h3 class="ui block header">
							article: {article}, 
							date: { date }, 
							filter: {filter}
						</h3>
					</div>
					<h1 class="ui blue header">Articles</h1>
					
					<div class="doubling stackable four column row">
						{Articles}
					</div>
					<div class="doubling stackable four column row">
					    {Articles}
					</div>
					<div class="doubling stackable four column row">
					    {Articles}
					</div>

				</div>
			</div>
			

		)
	}
};