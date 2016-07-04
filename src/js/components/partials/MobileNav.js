import React, { Component } from 'react'
import { IndexLink, Link } from "react-router"

import $ from 'jquery'
import jQuery from 'jquery'
window.jQuery = jQuery

import 'semantic-ui-sidebar'
$.fn.sidebar = require('semantic-ui-sidebar')

import 'semantic-ui-transition/transition.css'
$.fn.transition = require('semantic-ui-transition')

import 'semantic-ui-menu/menu.css'
import 'semantic-ui-item/item.css'

var state = require('semantic-ui/dist/components/state')

export default class MobileNav extends Component {

    constructor() {
        super()
        this.state = {
            
        };
    }

    render() {

        const { location } = this.props;
        const homeClass = location.pathname === "/" ? "active" : "";
        const messagesClass = location.pathname.match(/^\/message/) ? "active" : "";
        const logoutClass = location.pathname.match(/^\/logout/) ? "active" : "";

        return (
            <div>
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

            </div>
        )
    }
}