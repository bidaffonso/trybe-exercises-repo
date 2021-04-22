var { somar, subtrair, multiplicar, dividir } = require('./math');


test('Testa função somar', () => {
  expect.assertions(2);
  somar = jest.fn().mockReturnValue(5);
  expect(somar()).toBe(5);
  expect(somar).toHaveBeenCalled();
});

test('Testa a função multiplicar', () => {
  expect.assertions(2);
  multiplicar = jest.fn().mockReturnValue(10);
  expect(multiplicar()).toBe(10);
  expect(multiplicar).toHaveBeenCalled();
});

test('Testa a função somar com mockImplementation', () => {
  expect.assertions(3);
  somar = jest.fn().mockImplementation((a, b) => a + b);
  expect(somar(5, 5)).toBe(10);
  expect(somar).toHaveBeenCalled();
  expect(somar).toHaveBeenLastCalledWith(5, 5);
})

test('Testa a função dividir', () => {
  expect.assertions(7);
  dividir = jest.fn().mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);
  expect(dividir()).toBe(2);
  expect(dividir).toHaveBeenCalledTimes(1);
  expect(dividir()).toBe(5);
  expect(dividir).toHaveBeenCalledTimes(2);
  expect(dividir(30, 2)).toBe(15);
  expect(dividir).toHaveBeenCalledTimes(3);
  expect(dividir).toHaveBeenLastCalledWith(30, 2);
})

test('Testa a função subtrair', () => {
  expect(subtrair(5, 2)).toBe(3);
  const subMock = jest.spyOn(subtrair, "subtrair")
  .mockImplementation((a , b) => a + b);
  expect(subMock(5, 2)).toBe(7);
})


// const math = require('./math');

// test("#somar", () => {
//   // testando a implementação original, o mock e a restauração da função original

//   // implementação original
//   expect(math.somar(1, 2)).resolves.toBe(3);

//   // criando o mock e substituindo a implementação para uma subtração
//   const mockSomar = jest
//     .spyOn(math, "somar")
//     .mockImplementation((a, b) => a - b);

//   math.somar(5, 1);
//   expect(mockSomar).toHaveBeenCalledTimes(1);
//   expect(mockSomar(5, 1)).toBe(4);
//   expect(mockSomar).toHaveBeenCalledTimes(2);
//   expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

//   // restaurando a implementação original
//   math.somar.mockRestore();
//   expect(math.somar(1, 2)).resolves.toBe(3);
// });