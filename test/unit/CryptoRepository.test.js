import { describe, it, before } from 'mocha';
import { expect } from 'chai';
import { cryptoRepositoryMock, mocks } from '../mocks/setup.js';

describe('CryptoReposittory suit tets', () => {

  let repository = {};

  before(() => {
    repository = cryptoRepositoryMock;
  });

  it('should return the correct response when function list is called', async () => {
    const expected = mocks.firstResponse;
    const result = await repository.list(1, 5);

    expect(result).to.be.equal(expected);
  });

  it('should return the correct response when function list is called using another arguments', async () => {
    const expected = mocks.paginationResponse;
    const result = await repository.list(2, 5);

    expect(result).to.be.equal(expected);
  });
    
})