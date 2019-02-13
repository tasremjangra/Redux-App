import {createStore} from 'redux'
import mainReducer from './reducers'

const configureStore = () => {
	return createStore(mainReducer, {
			width:400,
			currentValue:110, 
			color:"black", 
			imagePath:"https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
			font:10,
			background:"white"

		}
	)
}

export default configureStore	