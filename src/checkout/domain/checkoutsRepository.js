'use strict';

const priceRepository = require('./priceRepository');

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
  if (!checkoutMap[id]) return;

  let checkout = checkoutMap[id];
  checkout.total.value = priceRepository.getPrice(checkout.items) || 0;
  return checkout;
}

function add(id, item) {
  if (!checkoutMap[id]) return false;

  checkoutMap[id].items[item] = checkoutMap[id].items[item] || 0;
  checkoutMap[id].items[item]++;

  return true;
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
