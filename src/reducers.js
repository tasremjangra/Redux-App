const mainReducer = (state,action) => {
	switch(action.type){
		case 'RESET_CONUTER' :
			return{
				...state,
				currentValue:action.newValue
			}

		case 'DECREMENT' :
			return{
				...state,
				currentValue: state.currentValue+1
			}

		case 'WIDTH' :
			return{
				...state,
				width:action.newValue,
				imagePath:action.imagePath
			}	

		case 'ORIGINAL'	:
			return{
				...state,
				width:action.newValue
			}

		case 'RED' :
			return{
				...state,
				color:action.newValue
			}

		case 'GREEN' :
			return{
				...state,
				color: action.newValue
			}

		case 'BLACK' :
			return{
				...state,
				color:action.color
			}	

		case 'BLUE' :
			return{
				...state,
				background:action.background
			}

		case 'RED' :
			return{
				...state,
				font:action.font,
				background:action.background
			}			

		default:
		return state;				
	}
}

export default mainReducer