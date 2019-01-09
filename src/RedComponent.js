import React, {Component} from 'react';
import configureStore from './store';
import * as actions from './actions';

class RedComponent extends Component{

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
		console.log(this.state.background)
		return(
			<div> 
				<h1 style={{backgroundColor:this.state.background}}>This work is done throught Redux</h1>
			</div>	
		);		
	}
}

export default RedComponent;