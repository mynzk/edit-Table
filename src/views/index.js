import React, { Component } from 'react';
import {render} from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from '../store/index';
import Home from './home';
import Canvas from './jqcanvas';
import Login from './login';
import Echarts from './bar-echarts';
import './style.less';



class Root extends Component{

	constructor(props){
		super(props);
		this.state = {
			activeKeys: [3]
		};
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
			<Provider store={store}>
			    <Router>
				    <div>
				        <ul className="router-menu">
				            <li className={`menu-item ${activeKeys.indexOf(1) > -1? 'active' : ''}`} onClick={this.getActive.bind(this, 1)}>
				               <Link to="/login">Login</Link>
				            </li>
				            <li className={`menu-item ${activeKeys.indexOf(2) > -1? 'active' : ''}`} onClick={this.getActive.bind(this, 2)}>
				               <Link to="/canvas">Canvas</Link>
				            </li>
				            <li className={`menu-item ${activeKeys.indexOf(3) > -1? 'active' : ''}`} onClick={this.getActive.bind(this, 3)}>
				               <Link to="/home">Home</Link>
				            </li>
                            <li className={`menu-item ${activeKeys.indexOf(4) > -1? 'active' : ''}`} onClick={this.getActive.bind(this, 4)}>
                                <Link to="/echarts">Echarts</Link>
                            </li>
				        </ul>
						
					    <Switch>
					        <Route path="/login" component={Login}/>
					        <Route path="/canvas" component={Canvas}/>
					        <Route path="/home" component={Home}/>
                            <Route path="/echarts" component={Echarts}/>
					        <Route path="/" component={Home}/>
					    </Switch>
				    </div>
				</Router>
			</Provider>
		)
	}
}


render(
	<Root/>,
	document.getElementById('root')
)