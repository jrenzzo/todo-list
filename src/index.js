// (at the end copy the other css file) include for using css as part of webpack:
//import './style.css';
const projectPopup = document.querySelector('.edit-popup-container')

function openProjectPopUp(){
    projectPopup.classList.add('active')
    console.log('open')
}

function closeProjectPopup(){
    projectPopup.classList.remove('active')
    console.log('close')
}

const addButton = document.querySelector('.add-project')
addButton.addEventListener('click', openProjectPopUp)

const subCancelProj = document.querySelector('.sub-cancel')
subCancelProj.addEventListener('click', closeProjectPopup)


