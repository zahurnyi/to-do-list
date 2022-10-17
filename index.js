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
const buttonDone = document.createElement('button')

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
// buttonDone.classList.add('done')

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
		const buttonDone = document.createElement('button')

		buttonClose.classList.add('close')
		item.classList.add('list-item')
		buttonEdit.classList.add('edit')
		buttonDone.classList.add('done')
		buttonClose.style.cssText = 'background: url("img/delete.svg") no-repeat'
		buttonEdit.textContent = 'edit'
		buttonDone.style.cssText = 'background: url("img/checked1.svg") no-repeat'

		myList.append(item)
		item.append(itemContent);
		item.append(buttonDone);
		item.append(buttonClose)
		item.prepend(buttonEdit)

		itemContent.textContent = input.value
		input.value = ''	
		
		buttonClose.addEventListener('click', () => {
			item.remove();
		})

		const editList = () => {
			// const popapChange = document.createElement('div')
			// popapChange.classList.add('popap')
			// item.append(popapChange)
			const input = document.createElement('input')
			// popapChange.append(input)
			// let retake = prompt('change your list');
			// if (age) {
			// 	itemContent.textContent = retake;
			// }

			const popap = document.querySelector('.popap');
			const popapContent = document.querySelector('.popap__content');
			const popapClose = document.querySelector('.popap__close');
			// const buttonDone = document.createElement('button')
			const buttonDone = document.querySelector('.done');

			popap.style.cssText = 'visibility: visible';
			popapContent.append(input)

			popapClose.addEventListener('click', () => {
				popap.style.cssText = 'visibility: hidden';
			})

			buttonDone.addEventListener('click', (e) => {
				// alert('testDONEEEE');
				console.log(e.target);
				console.log('testDONenee');

				// popapContent.style.cssText = 'text-decoration = text-decoration: line-through'
			});
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




// console.log(res);