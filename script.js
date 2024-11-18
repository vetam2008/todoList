const addTaskBtn = document.querySelector("#add_task");
const popup = document.querySelector(".popup ");
let procesingToDo = document.querySelector(".procesing");
let inputAddTask = document.querySelector(".popup input");
let completed = document.querySelector('.completed')
let DeletTasks = document.querySelector('.deleted_list')
let buttonDivs = document.querySelectorAll('.buttons_div button')

let deleted
let correcting
let chekInput

addTaskBtn.addEventListener("click",showPopap)

function showPopap (){
  popup.classList.add("active");
  inputAddTask.focus();
}

inputAddTask.addEventListener("keydown", addTask);

function addTask(e) {
  if (e.key === "Enter") {
    let li = document.createElement("li");
    let paragraph = document.createElement("p");
    let correcting = document.createElement('button')
     deleted = document.createElement('button')
    correcting.innerHTML = 'Редагувати'
    correcting.classList.add('correct')
    deleted.innerHTML ='Видалити'
    deleted.classList.add('deleting')
    paragraph.innerHTML = inputAddTask.value;
    procesingToDo.append(li);
    li.prepend(paragraph);
    chekInput = paragraph.insertAdjacentHTML('beforebegin', '<input type="checkbox" name="input-text"/>')
    li.append(correcting)
    li.append(deleted)
    inputAddTask.value = "";
    popup.classList.remove("active");

    deleted.addEventListener('click', ()=>{
      procesingToDo.removeChild(li);
      // let deletedTask = document.createElement('li')
      // deletedTask.innerHTML = paragraph.innerText;
      // DeletTasks.append(deletedTask)
    })

    correcting.addEventListener('click',()=> {
      popup.classList.add('active')
      inputAddTask.focus();
      inputAddTask.value=paragraph.innerText;
      procesingToDo.removeChild(li);
  })
  }
}




