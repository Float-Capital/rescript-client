// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Chain = require("./Chain.js");

function make(param) {
  return {
          getChainWithProvider: Chain.makeWithProvider,
          getChainWithWallet: Chain.makeWithWallet,
          getChain: Chain.makeWithDefaultProvider
        };
}

exports.make = make;
/* Chain Not a pure module */
