class User {
  constructor({ id }) {
    this.id = id;
  }
  // TODO: Alguma manipulação a fazer considerando que o objeto gerado será constantemente escrito em tela?
  [Symbol.toPrimitive](coercionType) {
    if(coercionType !== "string") throw new TypeError()
    return `idUser-${this.id}`;
  }
}

export default User;
