import React, {Component} from "react"
import { Link } from "react-router"

import $ from 'jquery'
import jQuery from 'jquery'
window.jQuery = jQuery

import Nav from "./partials/Nav"
import MobileNav from "./partials/MobileNav"
import Footer from "./partials/Footer"

// Semantic-UI Components
import 'semantic-ui-container/container.css'
import 'semantic-ui-reset/reset.css'
import 'semantic-ui-site/site.css'
import 'semantic-ui-button/button.css'
import 'semantic-ui-icon/icon.css'
import 'semantic-ui-menu/menu.css'
import 'semantic-ui-item/item.css'

import 'semantic-ui-sidebar/sidebar.css'
$.fn.sidebar = require('semantic-ui-sidebar')

import 'semantic-ui-transition/transition.css'
$.fn.transition = require('semantic-ui-transition')


export default class Layout extends React.Component {
	componentDidMount() {

		$('.ui.sidebar .item').click(function() {
			$('.ui.sidebar').sidebar('toggle');
		});

        $(".ui.sidebar")
            .sidebar({
            	dimPage: false,
            	scrollLock: true,
                onVisible: function() {
                    $('.launch i').removeClass('sidebar');
                    $('.launch i').addClass('close red');
                },
                onHide: function() {
                    $('.launch i').removeClass('close red');
                    $('.launch i').addClass('sidebar');
                    
                }
            })
            .sidebar(
                'attach events',
                '.ui.launch.button'
            )
        ;
    }
  render() {
  	const { location } = this.props;
    return (
		<div>
			<div class="wrapper">
				{/* mobile and tablet navigation */}
				<MobileNav location={location}/>

			{/* sidebar button */}
				<div class="ui secondary menu sidebar-menu">
		            <div class="ui icon launch right attached compact button">
		                <i class="sidebar large icon"></i>
		            </div>
		        </div>

			    {/* push all content when the sidebar is opened */}
				<div class="pusher">
					{/* computer navigation */}
					<Nav location={location} />

					{/* content wrapper */}
					<div class="ui container">
						{this.props.children}
					</div>
					
					{/* footer */}
					<Footer/>


				</div> 



			</div>
			
			
			
	        

			


		</div>
    );
  }
}