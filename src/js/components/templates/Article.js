import React from "react";

export default class Article extends React.Component {

	render() {
		
		const { title } = this.props;

		return(
			<div>

				<div class="ui segment">

					<div class="ui text container">

						<h3 class="ui header"> { title } </h3>

						<p>
							Instead of focusing on content creation and hard work, we have learned how to 
							master the art of doing nothing by providing massive amounts of whitespace and 
							generic content that can seem massive, monolithic and worth your attention.
						</p>

						<a href="#" class="ui large button">Read more</a>

					</div>

				</div>

			</div>
		); 
	}
}