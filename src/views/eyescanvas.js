import React, { Component } from 'react';
import {render} from 'react-dom';


class Canvas extends Component{

	constructor(props){
		super(props);
		this.state = {
			
		}
		
	}

	componentDidMount(){
		$(".eyes-wrap").mousemove(function(event) {
		  let eye = $(".eye");
		  let x = (eye.offset().left) + (eye.width() / 2);
		  let y = (eye.offset().top) + (eye.height() / 2);
		  let rad = Math.atan2(event.pageX - x, event.pageY - y);
		  let rot = (rad * (180 / Math.PI) * -1) + 180;
		  eye.css({
		    '-webkit-transform': 'rotate(' + rot + 'deg)',
		    '-moz-transform': 'rotate(' + rot + 'deg)',
		    '-ms-transform': 'rotate(' + rot + 'deg)',
		    'transform': 'rotate(' + rot + 'deg)'
		  });
		});
	}
	
	
	render(){

		return(
			<div className="eyes-wrap">
			  <div className='container'>
			    <div className='eye'></div>
			    <div className='eye'></div>
			  </div>
			</div>
		)
	}
}

export default Canvas;
