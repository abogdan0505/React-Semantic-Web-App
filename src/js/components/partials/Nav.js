import React, { Component } from 'react'
import { IndexLink, Link } from "react-router"

export default class Nav extends Component {

    render() {

        const { location } = this.props;

        return (
            <div class="ui container">
                <div class="ui horizontal secondary pointing menu"> 
                    <IndexLink  
                        to="/" 
                        class="item"
                        activeClassName="active" 
                        onlyActiveOnIndex={true} > 
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
                    <div 
                        class="right menu">
                        <Link 
                            to="logout" 
                            class="item" 
                            activeClassName="active">
                            Logout
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
};
