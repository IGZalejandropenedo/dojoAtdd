'use strict';

const sinon = require('sinon'),
    proxyquire = require('proxyquire');

require('chai').should();

let repositoryStub = {},
    addToCheckout = proxyquire('../../../src/checkout/rest/addToCheckout', {
        '../domain/checkoutsRepository': repositoryStub
    });

describe('Add items to checkout', () => {

    it('Should return 200 status code when adding items to an existing checkout', done => {
        const request = createRequest(),
            response = createResponse();

        const responseMock = sinon.mock(response);
        repositoryStub.add = () => { return true };

        responseMock.expects('send').once().withArgs(200);
        addToCheckout(request, response, () => {
            responseMock.verify();
            done();
        });
    });

    it('Should return 404 status code when adding items to an non-existing checkout', done => {
        const request = createRequest(),
            response = createResponse();


        const responseMock = sinon.mock(response);
        repositoryStub.add = () => { return false };

        responseMock.expects('send').once().withArgs(404);
        addToCheckout(request, response, () => {
            responseMock.verify();
            done();
        });
    });


    function createRequest() {
        return {
            context:{
              checkoutId: 1
            },
            body: {
              item: "A"
            }
        };
    }

    function createResponse() {
        return {
            send: () => {},
            setHeader: () => {}
        };
    }
});
