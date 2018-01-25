import React, { Component } from 'react';
import {render} from 'react-dom';


class Follow extends Component{

	constructor(props){
		super(props);
		this.state = {
			
		}
	}



	handleMouseEnter(e){

        if (e.target.className === 'follow-left') {
        	this.leftNode.style.width = '450px';
        	this.leftNode.style.transition = 'all 0.3s';

        	this.rightNode.style.width = '400px';
        	this.rightNode.style.left = '400px';
        	this.rightNode.style.transition = 'all 0.3s';
        	
           
        } else if (e.target.className === 'follow-right') {
        	this.rightNode.style.width = '500px';
        	this.rightNode.style.left = '300px';
        	this.rightNode.style.transition = 'all 0.3s';

        	this.leftNode.style.width = '350px';
        	this.leftNode.style.transition = 'all 0.3s';
        }

    }

	handleMouseLeave(e){
		if (e.target.className === 'follow-left') {
			
            
        } else if (e.target.className === 'follow-right') {
            
        }

        this.leftNode.style.width = '400px';
    	this.leftNode.style.transition = 'all 0.3s';

    	this.rightNode.style.width = '450px';
    	this.rightNode.style.left = '350px';
    	this.rightNode.style.transition = 'all 0.3s';
	}

	
	
	render(){
		

		return(
			<div className="follow-wrap">
			   <div className="follow-left"
			        ref={node => {this.leftNode = node}}  
			        onMouseEnter={this.handleMouseEnter.bind(this)} 
			        onMouseLeave={this.handleMouseLeave.bind(this)}>
			   </div>
			   <div className="follow-right" 
			        ref={node => {this.rightNode = node}} 
			        onMouseEnter={this.handleMouseEnter.bind(this)} 
			        onMouseLeave={this.handleMouseLeave.bind(this)}>
			    </div>
			</div>
		)
	}
}

export default  Follow;
