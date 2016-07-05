'use strict';

const checkoutRepository = require('../../../src/checkout/domain/checkoutsRepository');

require('chai').should();
const expect = require('chai').expect;
const _ = require('lodash');

describe('The Checkout Repository', () => {

    beforeEach(function () {
        checkoutRepository.clear();
    });

    const fixture = {
        id: 1,
        checkout: {
            items: {},
            total: {
                value: 0,
                currency: 'EUR'
            }
        }
    };

    it('Should create a new checkout given an identifier', done => {
        const id = fixture.id;
        const checkout = checkoutRepository.create(id);

        checkout.should.deep.equal(fixture.checkout);

        done();
    });

    it('Should retrieve a previously checkout given an identifier', done => {
        const id = fixture.id;

        checkoutRepository.create(id);
        const checkout = checkoutRepository.retrieve(id);

        checkout.should.deep.equal(fixture.checkout);

        done();
    });

    it('Should retrieve an undefined checkout when it have not been created previously', done => {
        const id = fixture.id;
        const checkout = checkoutRepository.retrieve(id);

        expect(checkout).to.be.an('undefined');

        done();
    });

    it('Should add a new product to an existing checkout', done => {

      const id = fixture.id;

      checkoutRepository.create(id);
      checkoutRepository.add(id, 'A');

      const checkout = checkoutRepository.retrieve(id);
      checkout.should.deep.equal(_.assign(fixture.checkout,{items: {'A': 1}}));

      done();

    });

    it('Should add several products to an existing checkout', done => {

      const id = fixture.id;

      checkoutRepository.create(id);
      ['A', 'A', 'A', 'B', 'C'].forEach((item) => checkoutRepository.add(id, item));

      const checkout = checkoutRepository.retrieve(id);
      checkout.should.deep.equal(_.assign(fixture.checkout,{items: {'A': 3, 'B': 1, 'C': 1}}));

      done();

    });
});
