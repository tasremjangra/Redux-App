import React, {Component} from 'react'

class Image extends Component{
	render(){
		return(
			<div>
				<img src={this.props.src} width={this.props.width} alt="hello"></img>
			</div>	
		)
	}
}

export default Image;