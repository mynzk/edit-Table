import React, { Component } from 'react';
import {render} from 'react-dom';

class Login extends Component{

	constructor(props){
		super(props);
		this.state = {
			index: 1
		}
	}

	translateLeft(){
		let index = this.state.index
		if(index + 1 < 5){
			let current = index + 1;
			let len=`${-300*(current-1)}px`;
			this.scroll.style.transform = `translateX(${len})`;
			this.setState({
				index: current
			})
		}
		
	}

	translateRight(){
		let index = this.state.index;
		if(index - 1 > 0){
			let current = index - 1;
			let len=`${-300*(current-1)}px`;
			this.scroll.style.transform = `translateX(${len})`;
			this.setState({
				index: current
			})
		}
		
	}

	
	render(){
		let index = this.state.index;
        console.log(index,'sssssssss')
		return(
			 <div className="scroll-wrap">
			    <ul className="scroll-container" ref={node => {this.scroll = node}}>
			       <li></li>
			       <li></li>
			       <li></li>
			       <li></li>
			    </ul>
			    <div className="control-container">
			       <span className={`scroll-left ${index === 4? "not-active":""}`} onClick={this.translateLeft.bind(this)} ></span>
			       <span className={`scroll-right ${index === 1? "not-active":""}`} onClick={this.translateRight.bind(this)} ></span>
			    </div>
			 </div>
		)
	}
}

export default Login;