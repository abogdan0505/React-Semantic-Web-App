import React from "react";


export default class Article extends React.Component {

	render() {
		
		const { title } = this.props;

		return(

			<div class="column">
				<h3 class="ui teal header"> { title } </h3>
				<p>
					Instead of focusing on content creation and hard work, we have learned how to 
					master the art of doing nothing by providing massive amounts of whitespace and 
					generic content that can seem massive, monolithic and worth your attention.
				</p>

				<a class="ui large orange right labeled icon button">
					<i class="arrow right icon"></i>
					Read more
				</a>

			</div>	
			
		); 
	}
}