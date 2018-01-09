import React, { Component } from 'react';
import {render} from 'react-dom';


class Home extends Component{

	constructor(props){
		super(props);
		this.state = {
			activeKeys: []
		}
	}

	getActive(key){
		let activeKeys = this.state.activeKeys;
		let index = activeKeys.indexOf(key);
		if(index > -1){
			activeKeys = [...activeKeys.slice(0, index), ...activeKeys.slice(index + 1)]
		} else {
			activeKeys = [...activeKeys, key]
		}
		this.setState({
			activeKeys: activeKeys
		})
	}
	
	render(){
		const { activeKeys } = this.state;

		return(
			<div>
			   <span className={`button ${activeKeys.indexOf(1) > -1? 'active' : ''}`} onClick={this.getActive.bind(this, 1)}></span>
			   <span className={`button ${activeKeys.indexOf(2) > -1? 'active' : ''}`} onClick={this.getActive.bind(this, 2)}></span>
			   <span className={`button ${activeKeys.indexOf(3) > -1? 'active' : ''}`} onClick={this.getActive.bind(this, 3)}></span>
			</div>
		)
	}
}

export default Home;