import React, {Component} from 'react'
import configureStore from './store'
import * as actions from './actions'
import './App.css'
import Image from './Image'
import Green from './Green'

class Home extends Component{

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

    this.resetTime = () => {
      this.store.dispatch(actions.resetTimer());
    }

    setInterval(() => {
    	this.store.dispatch(actions.decrement());
    }, 1000);

    this.changeWidth = () =>{
    	this.store.dispatch(actions.changeWidthImage())
    }

    this.OriginalWidth = () => {
    	this.store.dispatch(actions.OriginalWidthImage())
    }

    this.red = () => {
    	this.store.dispatch(actions.RedClr())
    }

    this.black = () => {
    	this.store.dispatch(actions.blackclr())
    }
  }

	render(){
		return(
			<div className="Home" style={{color:this.state.color}} >
				<p>{this.state.currentValue}</p>
        		<button onClick={this.resetTime}>Reset Time</button><br />
        		<button onClick={this.changeWidth}>Change width</button>
        		<Image  src={this.state.imagePath} width={this.state.width} /><br />
        		<button onClick={this.OriginalWidth} >Original Image</button><br /><br />
        		<h1 style={{color:this.state.color}} >This is my Redux App</h1>
        		<button onClick={this.red} onDoubleClick={this.black}>Red</button>
        		<Green />
			</div>
		)
	}
}

export default Home