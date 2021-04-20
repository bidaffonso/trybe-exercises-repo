// const users = require('./users');
const findUserById = require('./users');
const getUserName = require('./users');

describe('Testa a função getUserName (Promise)', () => {
  it('quando o usuário é encontrado retorna o nome dele', () => {
    expect.assertions(1);
    return getUserName(4).then((user) => {
      expect(user.name).toEqual('Mark');
    });
  });
  it('quando o usuário não é encontrado retorna mensagem de erro', () => {
    expect.assertions(1);
    return getUserName(2).catch(error => {
      expect(error).toEqual({ error: 'User with 2 not found.' });
    });
  });
});

describe('Testa a função getUserName (async/await)', () => {
  it('quando o usuário é encontrado retorna o nome dele', async () => {
    expect.assertions(1);
    const user = await getUserName(5);
    expect(user.name).toEqual('Paul');
  });
  it('quando o usuário não é encontrado retorna mensagem de erro', async () => {
    expect.assertions(1);
    try{
      await getUserName(2);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 2 not found.' });
    }
  })
});
