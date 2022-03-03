import User from './User.js';

// TODO: Criar um Symbol para a propriedade privada 'kUsers'
const kData = Symbol('kUsers');
class Users {
  constructor() {
    // TODO: inicializar a propriedade privada 'kData' como uma estrutura importante vista no curso
    this[kData] = new Set()
  }

  add(userRaw) {
    const user = new User(userRaw);
    this[kData].add(user)
  }

  hasUsers() {
    return this[kData].size > 0;
  }

  // TODO: Me parece que o objeto gerado precisa ser iterável 🤔
  *[Symbol.iterator]() {
    for (const item of this[kData]) {
      yield item;
    }
  }
}

export default Users;
