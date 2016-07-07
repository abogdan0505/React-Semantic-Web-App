import React from "react"

import Article from '../templates/Article'

export default class Messages extends React.Component {

	render() {
		const Articles = [
			'Article',
			'Article',
			'Article',
		].map((title, i) => <Article key={i} title={title} /> );


		return (
			<div>
				{Articles} 
			</div>
			

		)
	}
};