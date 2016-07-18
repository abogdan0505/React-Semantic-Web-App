import React from "react"

import TodoStore from "../../stores/TodoStore"
import Todo from "../templates/Todo"
import * as TodoActions from "../../actions/TodoActions"

export default class Todos extends React.Component {

	constructor() {
		super();
		this.state = {
			// get all todos from the store
			todos: TodoStore.getAll(),
		};
	}

	// when the TodoStore changes we update our state
	componentWillMount() {
		TodoStore.on("change", () => {
			this.setState({
				todos: TodoStore.getAll(),
			});
		});
	};

	createTodo() {
		TodoActions.createTodo(Date.now());
	}

	render() {

		// grab all todos
		const { todos } = this.state;

		// map all data from todos inside the Todo component and then grab everything in a constant
		const TodoComponents = todos.map((todo, i) => {
			return <Todo key={todo.id} {...todo} />;
		})

		return (
			<div>
				<h1 class="ui header blue">Todos</h1>
				<button class="ui basic blue button" onClick={this.createTodo.bind(this)}>
					Create
				</button>
				<ul>
					{TodoComponents}
					
				</ul>
			</div>
		)
	}
}