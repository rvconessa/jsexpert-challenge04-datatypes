import { describe, it, before } from 'mocha';
import { expect } from 'chai';
import { cryptoServiceMock, mocks } from '../mocks/setup.js';


describe('CryptoService suit tets', () => {

    let service = {};

    before(() => {
        service = cryptoServiceMock
    });

    it('should return the correct response when function list is called', async () => {
        const expected = mocks.formatedResponseArray;
        const result = await service.list();

        expect(result[0]).to.be.haveOwnProperty('id')
        expect(result).to.be.equal(expected);
    });
})