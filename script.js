




let taskcontainer = document.querySelector("#task-container")
let addtask = document.querySelector(".roundbtn")
let form = document.querySelector("#createtask")
let addtaskbtn = document.querySelector("#enterbtn")
let thetask = document.querySelector("#maintodo")
let bodycontainer = document.querySelector(".container")



function addnewtask() {
    form.style.display = 'block'
    taskcontainer.style.display = 'none'
}

addtask.addEventListener ('click', ()=> {
    addnewtask()
    
})

addtaskbtn.addEventListener ('click', () =>{

    
    
    if(thetask.value === ''){
        alert("Enter todo")
    }else{
        let li = document.createElement('li')
        li.innerHTML = thetask.value;
        taskcontainer.appendChild(li);

        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        
        form.style.display = 'none'
        taskcontainer.style.display = 'block'
    }
    
    thetask.value = "";
    saveData()
})

taskcontainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskcontainer.innerHTML);
}

function getData(){
    taskcontainer.innerHTML = localStorage.getItem("data")
}

getData();