const clearList = () => {
	const buttonClear = document.createElement('button')	
	const myList = document.createElement('ul')

	buttonClear.addEventListener('click', () => {
		myList.textContent = ''
	})
}

export default clearList