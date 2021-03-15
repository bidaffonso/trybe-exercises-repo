const state = document.getElementById('state');
function createStates() {
  const stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < stateOptions.length; index += 1) {
    const newState = document.createElement('option');
    state.appendChild(newState).innerHTML = stateOptions[index];
    state.appendChild(newState).value = stateOptions[index];
  }
}

window.onload = function () {
  createStates();
}
