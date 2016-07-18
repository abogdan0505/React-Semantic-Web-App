import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {

	constructor() {
		super();
		this.todos = [
			{
				id: 134564523,
				text: "Task one",
				complete: false
			},
			{
				id: 223545344,
				text: "Task two",
				complete: false
			}
		]
	};

	createTodo(text) {
		// hack an id with the date
		const id = Date.now();


		this.todos.push(
			{
				id,
				text,
				complete: false,
			}
		);

		this.emit('change')
	}

	getAll() {
		return this.todos;
	}

	handleActions(action) {
		console.log('todo store received an action', action);
	}

}

const todoStore = new TodoStore

dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;




