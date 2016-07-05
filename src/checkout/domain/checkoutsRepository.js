'use strict';

let checkoutMap = {};

function create(id) {
    checkoutMap[id] = {
        items: {},
        total: {
            value: 0,
            currency: 'EUR'
        }
    };

    return checkoutMap[id];
}

function retrieve(id) {
    return checkoutMap[id];
}

function add(id, item) {
  if (!checkoutMap[id]) return;

  checkoutMap[id].items[item] = checkoutMap[id].items[item] || 0;
  checkoutMap[id].items[item]++;
}

function clear() {
    checkoutMap = {};
}

module.exports = {
  create: create,
  retrieve: retrieve,
  add: add,
  clear: clear
};
