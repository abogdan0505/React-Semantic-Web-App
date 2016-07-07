import React, { Component } from 'react'
import { IndexLink, Link } from "react-router"


export default class MobileNav extends Component {

    render() {

        const { location } = this.props;
        const homeClass = location.pathname === "/" ? "active" : "";
        const messagesClass = location.pathname.match(/^\/message/) ? "active" : "";
        const logoutClass = location.pathname.match(/^\/logout/) ? "active" : "";

        return (
            <div class="ui left vertical inverted sidebar menu mobile tablet only transition hidden">

                <IndexLink to="/" class={homeClass + " item" }>
                    Home
                </IndexLink>

                <Link to="messages" class={messagesClass + " item" }>
                    Messages
                </Link>

                <Link to="logout" class={logoutClass + " item" }>
                    Logout
                </Link>

            </div>
        )
    }
}