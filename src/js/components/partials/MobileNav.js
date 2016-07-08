import React, { Component } from 'react'
import { IndexLink, Link } from "react-router"


export default class MobileNav extends Component {

    render() {
        const { location } = this.props;
        return (
            <div class="ui left vertical inverted sidebar menu mobile tablet only transition hidden">
                <IndexLink 
                    to="/" 
                    class="item" 
                    activeClassName="active" 
                    onlyActiveOnIndex={true}>
                    Home
                </IndexLink>
                <Link 
                    to="messages" 
                    class="item" 
                    activeClassName="active">
                    Messages
                </Link>
                <Link 
                    to="todos" 
                    class="item" 
                    activeClassName="active">
                    Todos
                </Link>
                <Link 
                    to="logout" 
                    class="item" 
                    activeClassName="active">
                    Logout
                </Link>

            </div>
        )
    }
}