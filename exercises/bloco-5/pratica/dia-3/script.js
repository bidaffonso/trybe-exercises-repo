
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
//1
function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const weekDaysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    if( dezDaysList[index] === 24 || dezDaysList[index] === 31) {
      dayListItem.className = 'day holiday'; 
    } else if( dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
      dayListItem.className = 'day friday'; 
    } else if (dezDaysList[index] === 25) {
      dayListItem.className = 'day holiday friday';
    } else {
      dayListItem.className = 'day';
    }

    weekDaysList.appendChild(dayListItem);
  }
};
//2
let button = document.createElement('button');

function createButton(buttonName) {
 
  button.id = 'btn-holiday';
  button.innerHTML = buttonName;
  let ulButton = document.querySelector('.buttons-container');
  ulButton.appendChild(button);
};
//3
let button2 = document.createElement('button');

function createButton2(buttonName) {
 
  button2.id = 'btn-friday';
  button2.innerHTML = buttonName;
  let ulButton = document.querySelector('.buttons-container');
  ulButton.appendChild(button2);
};
//4
function holidayColor() {
  let button = document.querySelector('#btn-holiday');
  let holiday = document.querySelectorAll('.day');
  for (let index in holiday) {
    if (holiday[index].className == 'day holiday' || holiday[index].className == 'day holiday friday'){
      if (holiday[index].style.backgroundColor != 'yellow'){
        holiday[index].style.backgroundColor = 'yellow';
      } else {
        holiday[index].style.backgroundColor = 'rgb(238,238,238)';
      }
    }
  }
};
//5
function fridayMod() {
  let button = document.querySelector('#btn-holiday');
  let friday = document.querySelectorAll('.day');
  for (let index in friday) {
    if (friday[index].className == 'day friday' || friday[index].className == 'day holiday friday'){
      let guardaDay = friday[index];
      if (friday[index].innerHTML != 'Sextou!'){
        friday[index].innerHTML = 'Sextou!';
      } else {
        friday[index].innerHTML = index - 1;
      }
    }
  }
};
//6
function zoomIn() {
  let day = document.querySelector('#days');

  day.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function zoomOut() {
  let day = document.querySelector('#days');

  day.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};

//7
function newTasks(task) {
  let myTasks = document.querySelector('.my-tasks');
  let newTask = document.createElement('span');
  newTask.innerHTML = task;
  myTasks.appendChild(newTask);
}

//8
function addDivTask(color) {
  let myTasks = document.querySelector('.my-tasks');
  let divTask = document.createElement('div');
  divTask.className = 'task';
  divTask.style.backgroundColor = color;
  myTasks.appendChild(divTask);
}

//9
function classTask() {
  let task = document.querySelector('.task');
  task.addEventListener('click', taskClass);
  function taskClass() {
    
    if (task.className === 'task') {
      task.className = 'task selected';
    } else {
      task.className = 'task';
    }
  }    
}

//10
function colorDayTask() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

button.addEventListener('click', holidayColor);
button2.addEventListener('click', fridayMod);
createDaysOfTheWeek();
createDays();
createButton('Feriados');
createButton2('Sexta-feira');
zoomOut();
zoomIn();
newTasks('Cozinhar');
addDivTask('red');
classTask();
colorDayTask();
