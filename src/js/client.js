import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

// Styles
import '../stylesheets/main.sass'

// React Components
import App from "./components/App"
// import Home from "./components/pages/Home"
import Home from "./components/pages/Home"
import Messages from "./components/pages/Messages"
import Logout from "./components/pages/Logout"

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="messages(/:message)" name="messages" component={Messages}></Route>
			<Route path="logout" name="logout" component={Logout}></Route>
		</Route>
	</Router>, app);