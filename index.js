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
			const popap = document.querySelector('.popap');
			const popapContent = document.querySelector('.popap__content');
			const popapClose = document.querySelector('.popap__close');
			const popapInput = document.querySelector('.popap__input');
			const popapSubmit = document.querySelector('.popap__submit');

			popap.style.visibility = 'visible';
			// popap.style.cssText = 'display: block';
			popapContent.append(popapInput)

			popapClose.addEventListener('click', () => {
				// popap.style.cssText = 'visibility: hidden';
				popap.style.visibility = 'hidden';
				popapInput.value = '';
			});

			popapSubmit.addEventListener('click', () => {
				if (popapInput.value) {
					itemContent.textContent = popapInput.value;
					popapInput.value = '';
				}
				// popap.style.cssText = 'display: none';					
				popap.style.visibility = 'hidden';					
			})
		};
		buttonEdit.addEventListener('click', editList);

		buttonDone.addEventListener('click', () => {
			item.classList.toggle('text-decoration')
		});
	}	
}

const clearList = () => {
	buttonClear.addEventListener('click', () => {
		myList.textContent = ''
	})
}


buttonAdd.addEventListener('click', addItemToList)
buttonClear.addEventListener('click', clearList)



