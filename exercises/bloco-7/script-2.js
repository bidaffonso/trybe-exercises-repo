const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const newKey = (obj, key, val) => {

  obj[key] = val;
  return obj;
  // const customer = customer1;
  // let newKey = key;
  // const value = val;
  
  // customer1[newKey] = value;
  // return customer1;
}



console.log(newKey(customer1, 'lastName', 'Ferreira'));
