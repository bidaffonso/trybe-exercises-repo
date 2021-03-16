
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

const LimparButton = document.querySelector('.clear');
function limparTd() {
  const forms = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('.div-cv');
  for (let index = 0; index < forms.length && index < div.length; index += 1) {
    const userInput = forms[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

const subButton = document.querySelector('.submit');
subButton.addEventListener('click', renderCv);
LimparButton.addEventListener('click', limparTd);

window.onload = function () {
  createStates();
}
