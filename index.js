'use strict'

const wrapper = document.querySelector('.wrapper')
const myDiv = document.createElement('div')
const input = document.createElement('input')
const buttonAdd = document.createElement('button')
const myList = document.createElement('ul')
const item = document.createElement('li')
const buttonClear = document.createElement('button')
const buttonClose = document.createElement('button')
const buttonEdit = document.createElement('button')

buttonClose.classList.add('close')

buttonClear.textContent = 'clear'

input.setAttribute('placeholder', 'title') 

myDiv.classList.add('list')
input.classList.add('input')
buttonAdd.classList.add('add')
myList.classList.add('my-list')
item.classList.add('item')
buttonClear.classList.add('clear')
buttonEdit.classList.add('edit')

buttonAdd.textContent = 'add'
wrapper.append(myDiv)
myDiv.append(input)
myDiv.append(buttonAdd)
wrapper.append(myList)
wrapper.append(buttonClear)


const addItemToList = () => {
	if (input.value === '') {
	alert('write text...')
} else {
		const item = document.createElement('li')
		const itemContent = document.createElement('span')
		const buttonClose = document.createElement('button')
		const buttonEdit = document.createElement('button')

		buttonClose.classList.add('close')
		item.classList.add('list-item')
		buttonEdit.classList.add('edit')
		buttonClose.textContent = 'x'
		buttonEdit.textContent = 'edit'

		myList.append(item)
		item.append(itemContent);
		item.append(buttonClose)
		item.append(buttonEdit)

		itemContent.textContent = input.value
		input.value = ''	
		
		buttonClose.addEventListener('click', () => {
			item.remove();
		})

		const editList = () => {
			buttonEdit.textContent = 'test'
			itemContent.textContent = input.value

		};

		buttonEdit.addEventListener('click', editList);
	}	
}

const clearList = () => {
	buttonClear.addEventListener('click', () => {
	myList.textContent = ''
})

}

buttonAdd.addEventListener('click', addItemToList)
buttonClear.addEventListener('click', clearList)


