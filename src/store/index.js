import { createStore } from 'redux';

const defaultState = {
	getData: [],
	activeKeys: []
}

let reducer = function(state=defaultState, action){
	switch (action.type) {
		case 'GETALLDATA':
			let getData = action.getData;
			return Object.assign({}, state, {getData: getData});
		case 'GETACTIVEKEYS':
		    let activeKeys = action.activeKeys;
			return Object.assign({}, state, {activeKeys: activeKeys});
		default:
		    return state;
	}
}


let store = createStore(reducer);

export default store;