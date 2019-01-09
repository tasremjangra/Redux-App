export const resetTimer = () => ({
	type : "RESET_CONUTER",
	newValue: 100
});

export const decrement = () => ({
	type: "DECREMENT"
});

export const changeWidthImage = () => ({
	type: "WIDTH",
	newValue:800,
	imagePath: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
});

export const OriginalWidthImage = () => ({
	type: "ORIGINAL",
	newValue:400
})

export const GeenClr = () => ({
	type:"GREEN",
	newValue:"green"
});

export const RedClr = () => ({
	type:"RED",
	newValue:"red"

})

export const blackclr = () => ({
	type:"BLACK",
})

export const blueClr = () => ({
	type:"BLUE",
	font:20,
	background:"blue"
})

export const redClr = () => ({
	type:"RED",
	font:20,
	background:"red"
})