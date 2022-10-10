'use strict'

const wrapper = document.querySelector('.wrapper')
const myDiv = document.createElement('div')
const input = document.createElement('input')
const buttonAdd = document.createElement('button')
const myList = document.createElement('ul')
const items = document.createElement('li')
const buttonClear = document.createElement('button')
const buttonClose = document.createElement('button')

buttonClose.classList.add('close')


buttonClear.textContent = 'clear'

input.setAttribute('placeholder', 'title') 

myDiv.classList.add('list')
input.classList.add('input')
buttonAdd.classList.add('add')
myList.classList.add('my-list')
items.classList.add('item')
buttonClear.classList.add('clear')

buttonAdd.textContent = 'add'
wrapper.append(myDiv)
myDiv.append(input)
myDiv.append(buttonAdd)
wrapper.append(myList)
wrapper.append(buttonClear)

buttonAdd.addEventListener('click', () => {
	if (input.value === '') {
		alert('write text...')
	} else {
		const items = document.createElement('li')
		items.classList.add('list-item')
		myList.append(items)
		const buttonClose = document.createElement('button')
		buttonClose.classList.add('close')
		buttonClose.textContent = 'x'
		myList.append(buttonClose)
		items.textContent = input.value
		input.value = ''
		buttonClose.addEventListener('click', (e) => {
			items.textContent = ''
		})
		buttonClose.addEventListener('click', () => {
			buttonClose.textContent = ''
			// myList.textContent = ''
			items.style.cssText = 'display: none'
			
		})
	}

})

buttonClear.addEventListener('click', () => {
	myList.textContent = ''
})

