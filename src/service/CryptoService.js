import Crypto from '../entity/Crypto.js';
import CryptoRepository from '../repository/CryptoRepository.js';

class CryptoService {
  constructor({ repository } = {}) {
    this.repository = repository || new CryptoRepository();
  }
  async *list() {
    let page = 1;

    while(true) {
      const { data } = await this.repository.list(page++)
      const formatedData = data.map(cryptoData => new Crypto(cryptoData))
      yield formatedData
    }
    
  }
}

export default CryptoService;
