const projectPopup = document.querySelector('.proj-popup')
const taskPopup = document.querySelector('.task-popup')

function activateProjectOptions(){
    const addProjectButton = document.querySelector('.add-project')
    const subBtnAddProj = document.querySelector('.sub-add-proj')
    const subBtnCancelProj = document.querySelector('.sub-cancel-proj')
    
    addProjectButton.addEventListener('click', openProjectPopup)
    subBtnAddProj.addEventListener('click', addNewProject)
    subBtnCancelProj.addEventListener('click', closeProjectPopup)
}

function openProjectPopup(){
    projectPopup.classList.add('active')
}

function closeProjectPopup(){
    projectPopup.classList.remove('active')
}

function addNewProject(){
    console.log('a')
}

function activateTasksOptions(){
    const addTaskButton = document.querySelector('.add-task')
    const subBtnAddTask = document.querySelector('.sub-add-task')
    const subBtnCancelTask = document.querySelector('.sub-cancel-task')

    addTaskButton.addEventListener('click', openTaskPopup)
    subBtnAddTask.addEventListener('click', () =>{
        console.log('a')
    })
    subBtnCancelTask.addEventListener('click', closeTaskPopup)
}

function openTaskPopup(){
    taskPopup.classList.add('active')
}

function closeTaskPopup(){
    taskPopup.classList.remove('active')
}

export {activateProjectOptions, activateTasksOptions}