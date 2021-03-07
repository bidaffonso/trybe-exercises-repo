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
  };
}

let button = document.createElement('button');

function createButton(buttonName) {
 
  button.id = 'btn-holiday';
  button.innerHTML = buttonName;
  let ulButton = document.querySelector('.buttons-container');
  ulButton.appendChild(button);
}

let button2 = document.createElement('button');

function createButton2(buttonName) {
 
  button2.id = 'btn-friday';
  button2.innerHTML = buttonName;
  let ulButton = document.querySelector('.buttons-container');
  ulButton.appendChild(button2);
}

function holidayColor() {
  let button = document.querySelector('#btn-holiday');
  let holiday = document.querySelectorAll('.day');
  for (let index in holiday) {
    if (holiday[index].className == 'holiday' || holiday[index].className == 'day holiday' || holiday[index].className == 'day holiday friday'){
      if (holiday[index].style.backgroundColor != 'yellow'){
        holiday[index].style.backgroundColor = 'yellow';
      } else {
        holiday[index].style.backgroundColor = 'rgb(238,238,238)';
      }
    }
  }
}

button.addEventListener('click', holidayColor);
createDaysOfTheWeek();
createDays();
createButton('Feriados');
createButton2('Sexta-feira');
