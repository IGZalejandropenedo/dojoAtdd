'use strict';

const server = require('./server'),
    heartbeat = require('./checkout/rest/heartbeat.js'),
    createCheckout = require('./checkout/rest/createCheckout.js'),
    clearCheckouts = require('./checkout/rest/clearCheckouts.js'),
    retrieveCheckout = require('./checkout/rest/retrieveCheckout.js');

let serverInstance = server.create();

server.start(serverInstance, 3000).tap(() => {
    serverInstance.get('/api/heartbeat', heartbeat);
    serverInstance.post('/api/checkouts', createCheckout);
    serverInstance.del('/api/checkouts', clearCheckouts);
    serverInstance.get('/api/checkouts/:checkoutId', retrieveCheckout);

    console.log('Up and running');
});
