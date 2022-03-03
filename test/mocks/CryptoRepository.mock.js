import CryptoRepository from '../../src/repository/CryptoRepository.js';
import CryptoService from '../../src/service/CryptoService.js';
import sinon from 'sinon';
import validResponseMock from './valid-response.js';
import formatedResponse from './formated-response.js';
import formatedResponseArray from './formated-responseArray.js';

const mocks = {
  firstResponse: validResponseMock,
  paginationResponse: validResponseMock,
  formatedResponse,
  formatedResponseArray
};

const cryptoRepositoryMock = new CryptoRepository();
const cryptoServiceMock = new CryptoService({ repository: cryptoRepositoryMock })

const stub = sinon.stub(
  cryptoRepositoryMock,
  cryptoRepositoryMock.list.name
);

stub.withArgs(1, 5).resolves(mocks.firstResponse);
stub.withArgs(2, 5).resolves(mocks.paginationResponse);

sinon.stub(
  cryptoServiceMock,
  cryptoServiceMock.list.name
).resolves(formatedResponseArray)

export { cryptoRepositoryMock, cryptoServiceMock, mocks };
