'use strict'

const wrapper = document.querySelector('.wrapper')
const myDiv = document.createElement('div')
const input = document.createElement('input')
const buttonAdd = document.createElement('button')
const myList = document.createElement('ul')
const items = document.createElement('li')
const clearBtn = document.createElement('button')
const btnClose = document.createElement('button')

btnClose.classList.add('close')


clearBtn.textContent = 'clear'

input.setAttribute('placeholder', 'title') 

myDiv.classList.add('list')
input.classList.add('input')
buttonAdd.classList.add('add')
myList.classList.add('my-list')
items.classList.add('item')
clearBtn.classList.add('clear')

buttonAdd.textContent = 'add'
wrapper.append(myDiv)
myDiv.append(input)
myDiv.append(buttonAdd)
wrapper.append(myList)
wrapper.append(clearBtn)

buttonAdd.addEventListener('click', () => {
	if (input.value === '') {
		alert('write text..')
	} else {
		const items = document.createElement('li')
		items.classList.add('list-item')
		myList.append(items)
		const btnClose = document.createElement('button')
		btnClose.classList.add('close')
		btnClose.textContent = 'x'
		myList.append(btnClose)
		items.textContent = input.value
		input.value = ''
	}
})

clearBtn.addEventListener('click', () => {
	myList.textContent = ''
})
console.log(btnClose);

btnClose.addEventListener('click', () => {
	btnClose.style.cssText = 'color: black'
})


