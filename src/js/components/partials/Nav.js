import React, { Component } from 'react'
import { IndexLink, Link } from "react-router"

export default class Nav extends Component {

    render() {

        const { location } = this.props;
        const homeClass = location.pathname === "/" ? "active" : "";
        const messagesClass = location.pathname.match(/^\/message/) ? "active" : "";
        const logoutClass = location.pathname.match(/^\/logout/) ? "active" : "";

        return (
            <div class="ui container">
                <div class="ui horizontal secondary pointing menu"> 

                    <IndexLink  to="/" class={homeClass + " " + "item" } > Home </IndexLink>

                    <Link to="messages" class={messagesClass + " " + "item" }>
                        Messages
                    </Link>

                    <div class="right menu">
                        <Link to="logout" class={logoutClass + " " + "item" }>
                            Logout
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
};
