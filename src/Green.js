import React, {Component} from 'react'
import configureStore from './store'
import * as actions from './actions'

class Green extends Component{

	componentDidMount(){
		this.unsubscribe = this.store.subscribe(() => {
			this.setState(this.store.getState())
		})
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	constructor(props){
		super(props)
		this.store = configureStore();
		this.state = this.store.getState();

		this.green = () => {
			this.store.dispatch(actions.GeenClr())
		}
	}
	render(){
		return(
			<div>
				<h1 style={{color:this.state.color}}>Hello i ma tarsem jangra</h1>
				<button onClick={this.green}>Green</button>
			</div>
		)
	}
}
export default Green