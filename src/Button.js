import React, {Component} from 'react';
import configureStore from './store';
import * as actions from './actions';

class Button extends Component{

	constructor(props){
		super(props);
		this.store = configureStore();
		this.state = this.store.getState(); 

		this.blue = () => {
			console.log('this is blue button')
			this.store.dispatch(actions.blueClr());
		}

		this.red = () => {
			this.store.dispatch(actions.redClr());
		}
	}

	componentDidMount(){
    this.unsubscribe = this.store.subscribe(() => {
      this.setState(this.store.getState())
    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

	render(){
		console.log(this.state.font)
		return(
			<div>
				<button onClick={this.blue}>Blue</button> &nbsp; &nbsp; &nbsp;
				<button onClick={this.red}>Red</button>
			</div>
		)
	}
}

export default Button;
