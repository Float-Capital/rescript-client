// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Float__Util = require("./Float__Util.js");
var Float__Ethers = require("./Float__Ethers.js");

function wrapMarketP(market) {
  return {
          TAG: /* P */0,
          _0: market
        };
}

function wrapMarketW(market) {
  return {
          TAG: /* W */1,
          _0: market
        };
}

function fundingRateMultiplier(provider, config, marketIndex) {
  return Float__Util.makeLongShortContract(Float__Ethers.wrapProvider(provider), config).fundingRateMultiplier_e18(marketIndex);
}

exports.wrapMarketP = wrapMarketP;
exports.wrapMarketW = wrapMarketW;
exports.fundingRateMultiplier = fundingRateMultiplier;
/* Float__Util Not a pure module */
