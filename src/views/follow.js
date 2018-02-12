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
        	this.leftNode.style.transform = "skew(-5deg) translateZ(50px)";
        	this.rightNode.style.marginLeft = "10px";
           
        } else if (e.target.className === 'right') {
        	console.log('right')
        	this.leftNode.style.marginRight = "10px";
        	this.rightNode.style.marginLeft = "-50px";
        	this.rightNode.style.transform = "skew(-5deg) translateZ(50px)"
        }

    }

	handleMouseLeave(e){
		if (e.target.className === 'left') {
			this.leftNode.style.marginRight = "-20px";
			this.leftNode.style.transform = "skew(-5deg) translateZ(0)";
			this.rightNode.style.marginLeft = "-20px";
            
        } else if (e.target.className === 'right') {
            this.rightNode.style.marginLeft = "-20px";
            this.rightNode.style.transform = "skew(-5deg) translateZ(0)";
            this.leftNode.style.marginRight = "-20px";
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

function transDataAddChildren(array){
    var children = [];
    if(array == undefined || array.length == 0) return children;
    deepDataAddChildren(array, children);
    return children;
}
function deepDataAddChildren(array, children){
    if(array == undefined || array.length == 0) return;
    children.push({
        code: array[0].code,
        value: array[0].value,
        children: []
    });
    array = array.slice(1)
    deepDataAddChildren(array, children[0].children);
}
console.log(transDataAddChildren([{code:1,value:'xiao'},{code:2,value:'xia'},{code:3,value:'x'},{code:4,value:'misomiso'}]))

var arr = [{code:1,value:'xiao'},{code:2,value:'xia'},{code:3,value:'x'},{code:4,value:'misomiso'}];
var last = arr.splice(1,1);
console.log(arr.concat(last),'aaa')