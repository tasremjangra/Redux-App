import React, {Component} from 'react';
import configureStore from './store';
import * as actions from './actions';

class BlueComponent extends Component{

	constructor(props){
		super(props);
		this.store = configureStore();
		this.state = this.store.getState();
	}

	componentDidMount(){
		this.unsubscribe = this.store.subscribe(() => {
			this.setState(this.store.getState())
		})
	}

	componentWillUmount(){
		this.unsubscribe();
	}
	render(){
		console.log(this.state.font);
		return(
			<div>
				<h1 style={{color:this.state.color}}>Hello i am Tarsem Jangra working with ADS</h1>
			</div>	
		);
	}
}

export default BlueComponent;