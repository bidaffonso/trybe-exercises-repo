const newEmployees = (employeeGen) => {
  const employees = {
    id1: employeeGen('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: employeeGen('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: employeeGen('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

const employeeGen = (fullName) => {
  const email = { fullName, email: `${fullName.toLowerCase().split(' ').join('_')}@trybe.com` };
  return email;
};

console.log(newEmployees(employeeGen));
