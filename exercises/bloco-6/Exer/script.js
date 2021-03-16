console.log("olá")
const state = document.getElementById('state');
console.log(state);
function createStates() {
  const stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < stateOptions.length; index += 1) {
    const newState = document.createElement('option');
    state.appendChild(newState).innerHTML = stateOptions[index];
    state.appendChild(newState).value = stateOptions[index];
  }
}

const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

function validarData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') ===5) {
    const dia = data.substr(0, 2);
    const mes = data.substr(3, 2);
    const ano = data.substr(6, 4);
    if ((dia > 0 && dia < 31) && (mes > 0 && mes < 13) && (ano > 0 && ano.length === 4)) {
      return true;
    }
  }
  return false;
}

function verificaData() {
  const dataIn = document.querySelector('.data-inicio');
  let data = dataIn.value;
  const dataUsuario = validarData(data);
  if (!dataUsuario && data.length) {
    dataIn.value = '';
    alert('Data inserida inválida!');
    return false;
  }
  return dataUsuario;
}

function renderCv(event) {
  event.preventDefault();
  const formsIn = document.querySelectorAll('input');
  for (let index = 0; index < formsIn.length; index += 1) {
    if (formsIn[index].type === 'radio' && !formsIn[index].checked) {
      continue;
    }
    const userIn = formsIn[index].value;
    const dadosUsr = document.querySelector('.dados-gerais');
    if (verificaData()) {
      const div = document.createElement('div');
      div.className = 'div-cv';
      div.innerHTML = userIn;
      dadosUsr.appendChild(div);
    }
  }
}

const clearButton = document.querySelector('.clear');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
  }
}

clearButton.addEventListener('click', clearFields);

const subButton = document.querySelector('.submit');
subButton.addEventListener('click', renderCv);

window.onload = function () {
  createStates();
}
