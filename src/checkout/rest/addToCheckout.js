'use strict';

const checkoutRepository = require('../domain/checkoutsRepository');
const _ = require('lodash');

module.exports = function (req, res, next) {
    const checkoutId = req.context.checkoutId;
    const item =  req.body.item;

    if (checkoutRepository.add(checkoutId, item)){
      res.send(200);
    } else {
      res.send(404);
    }

    return next();
};
