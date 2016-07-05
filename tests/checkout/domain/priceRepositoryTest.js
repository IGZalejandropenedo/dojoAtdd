'use strict';

require('chai').should();
const expect = require('chai').expect;
const _ = require('lodash');
const proxyquire = require('proxyquire');

const priceRepository = require('../../../src/checkout/domain/priceRepository');

describe('The Price Repository', () => {

  const fixture = {
    singleItem: {
      items: {
        A: 1
      },
      value: 10
    },
    twoWithOffer: {
      items: {
        A: 2
      },
      value: 14
    },
    threeWithOffer: {
      items: {
        A: 3
      },
      value: 24
    },
    mixedWithOffer: {
      items: {
        A: 2,
        B: 1
      },
      value: 19
    },
    mixedWithoutOffer: {
      items: {
        A: 1,
        B: 2
      },
      value: 20
    }
  };

  it('Should return the value for an item', done => {
    const f = fixture.singleItem;
    const value = priceRepository.getPrice(f.items);

    value.should.be.equal(f.value);

    done();
  });

  it('Should return the value for 2 items of the same type with special offer', done => {
    const f = fixture.twoWithOffer;
    const value = priceRepository.getPrice(f.items);

    value.should.be.equal(f.value);

    done();
  });

  it('Should return the value for 3 items of the same type with special offer', done => {
    const f = fixture.threeWithOffer;
    const value = priceRepository.getPrice(f.items);

    value.should.be.equal(f.value);

    done();
  });

  it('Should return the value for 3 items of mixed types with special offer', done => {
    const f = fixture.mixedWithOffer;
    const value = priceRepository.getPrice(f.items);

    value.should.be.equal(f.value);

    done();
  });

  it('Should return the value for 3 items of mixed types without special offer', done => {
    const f = fixture.mixedWithoutOffer;
    const value = priceRepository.getPrice(f.items);

    value.should.be.equal(f.value);

    done();
  });
});
