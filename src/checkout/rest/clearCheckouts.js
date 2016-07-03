'use strict';

const checkoutRepository = require('../domain/checkoutsRepository');

module.exports = function (req, res, next) {
    checkoutRepository.clear()
    res.send(200);

    return next();
};
