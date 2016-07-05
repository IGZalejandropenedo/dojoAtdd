'use strict'

const _ = require('lodash');

const priceList = require('./priceList.json');

function getPrice(items){
  let keys =_.keys(items);
  let amounts = _.map(keys, (key) => {
    return calculatePrice(items[key], priceList[key]);
  });
  return _.reduce(amounts, (sum, amount) => sum + amount)
}

function calculatePrice(amount, offers) {
  if (!offers || amount <= 0) return 0;

  let value = 0;

  const sortedOffers = _.sortBy(offers, (offer) => -offer.amount);

  _.map(sortedOffers, (offer) =>{
    if(amount === offer.amount) {
      value += (offer.value * amount);
      amount = 0;
    } else if (amount > offer.amount) {
      let d = Math.floor(amount / offer.amount)
      let r = amount % offer.amount;

      value += (offer.value * offer.amount * d );
      amount = r;
    }
  });
  return value;
}

module.exports = {
  getPrice: getPrice
};
