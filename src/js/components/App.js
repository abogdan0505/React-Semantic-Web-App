import React, {Component} from "react"
import { Link } from "react-router"

import $ from 'jquery'
import jQuery from 'jquery'
window.jQuery = jQuery

// React Partial Components
import Nav from "./partials/Nav"
import MobileNav from "./partials/MobileNav"
import Footer from "./partials/Footer"

// Semantic-UI Components
import './imports/semantic-components.js';


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
			{/* mobile and tablet navigation */}
			<MobileNav location={location}/>

			{/* sidebar button */}
			<div class="ui fixed menu sidebar-btn">
	            <div class="ui icon launch right attached compact button">
	                <i class="sidebar large icon"></i>
	            </div>
	        </div>

		    {/* push all content when the sidebar is opened */}

				{/* computer navigation */}
				<Nav location={location} />

				{/* content wrapper */}
				<div class="wrapper">
					<div class="ui container">
						{this.props.children}
					</div>
				</div>	
				
				
				{/* footer */}
				<Footer/>


		</div>
    );
  }
}