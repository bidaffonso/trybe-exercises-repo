const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const newKey = (obj, key, val) => {
  obj[key] = val;
  return obj;
}



console.table(newKey(customer1, 'lastName', 'Ferreira'));
