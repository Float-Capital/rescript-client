// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Ethers = require("ethers");
var ConfigJs = require("./config.js");
var SecretsManagerJs = require("../secretsManager.js");
var Ethers$FloatJsClient = require("./demo/Ethers.js");

var env = process.env;

var mnemonic = SecretsManagerJs.mnemonic;

var providerUrl = SecretsManagerJs.providerUrl;

var polygonConfig = ConfigJs.polygon;

function connectToNewWallet(provider, mnemonic) {
  return new (Ethers.Wallet.fromMnemonic)(mnemonic, "m/44'/60'/0'/0/0").connect(provider);
}

function run(param) {
  connectToNewWallet(new (Ethers.providers.JsonRpcProvider)(providerUrl, 137), mnemonic).getBalance().then(function (balance) {
        console.log("Account balance:", Ethers$FloatJsClient.Utils.formatEther(balance));
        
      });
  
}

run(undefined);

exports.env = env;
exports.mnemonic = mnemonic;
exports.providerUrl = providerUrl;
exports.polygonConfig = polygonConfig;
exports.connectToNewWallet = connectToNewWallet;
exports.run = run;
/* env Not a pure module */