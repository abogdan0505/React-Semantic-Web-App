import React, { Component } from 'react'
import { IndexLink, Link } from "react-router"

import $ from 'jquery'
import jQuery from 'jquery'
window.jQuery = jQuery

import 'semantic-ui-menu/menu.css'
import 'semantic-ui-item/item.css'

// var state = require('semantic-ui/dist/components/state')

export default class Nav extends Component {

    // constructor() {
    //     super()
    // }

    // toggleCollapse() {
    //     const collapsed = !this.state.collapsed;
    //     this.setState({collapsed});
    // }

    // componentDidMount() {
    //     $('.menu .item').state()
    // }

    render() {

        const { location } = this.props;
        const homeClass = location.pathname === "/" ? "active" : "";
        const messagesClass = location.pathname.match(/^\/message/) ? "active" : "";
        const logoutClass = location.pathname.match(/^\/logout/) ? "active" : "";



      return (
        <div>
            <div class="ui secondary pointing menu">
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
}
