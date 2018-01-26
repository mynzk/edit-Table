import React, { Component } from 'react';
import {render} from 'react-dom';


class Follow extends Component{

	constructor(props){
		super(props);
		this.state = {
			
		}
	}



	handleMouseEnter(e){
        if (e.target.className === 'left') {
        	
        	
        	this.leftNode.style.marginRight = "-50px";
        	this.leftNode.style.transform = "skew(-5deg) translateZ(50px)"
           
        } else if (e.target.className === 'right') {
        	console.log('right')
        	this.rightNode.style.marginLeft = "-50px";
        	this.rightNode.style.transform = "skew(-5deg) translateZ(50px)"
        }

    }

	handleMouseLeave(e){
		if (e.target.className === 'left') {
			this.leftNode.style.marginRight = "-20px";
			this.leftNode.style.transform = "skew(-5deg) translateZ(0)"
            
        } else if (e.target.className === 'right') {
            this.rightNode.style.marginLeft = "-20px";
            this.rightNode.style.transform = "skew(-5deg) translateZ(0)"
        }

	}

	
	
	render(){
		

		return(
			<div className="follow-wrap">
			   <div className="follow-left">
			        <div className="bg-wrapper"  ref={node => {this.leftNode = node}}></div>
			        <div className="left" 
			            onMouseEnter={this.handleMouseEnter.bind(this)} 
			            onMouseLeave={this.handleMouseLeave.bind(this)}>
			                <h1>hell left</h1>
			            </div>
			   </div>
			   <div className="follow-right">
			         <div className="bg-wrapper" ref={node => {this.rightNode = node}} ></div>
			         <div className="right"
			            onMouseEnter={this.handleMouseEnter.bind(this)} 
				        onMouseLeave={this.handleMouseLeave.bind(this)}>
				            <h1>hell right</h1>
				        </div>
			    </div>
			</div>
		)
	}
}

export default  Follow;
