// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Ethers = require("ethers");
var FloatUtil = require("./FloatUtil.js");
var Caml_array = require("rescript/lib/js/caml_array.js");
var FloatEthers = require("./FloatEthers.js");
var FloatContracts = require("./FloatContracts.js");
var FloatMarketSide = require("./FloatMarketSide.js");

function div(prim0, prim1) {
  return prim0.div(prim1);
}

function fromInt(prim) {
  return Ethers.BigNumber.from(prim);
}

function toNumber(prim) {
  return prim.toNumber();
}

var tenToThe18 = FloatEthers.BigNumber.tenToThe18;

function makeLongShortContract(p, c) {
  return FloatContracts.LongShort.make(Ethers.utils.getAddress(c.contracts.longShort.address), p);
}

function makeStakerContract(p, c) {
  return FloatContracts.Staker.make(Ethers.utils.getAddress(c.contracts.longShort.address), p);
}

function leverage(p, c, marketIndex) {
  return makeLongShortContract(FloatEthers.wrapProvider(p), c).marketLeverage_e18(marketIndex).then(function (m) {
              return m.div(tenToThe18).toNumber();
            });
}

function syntheticTokenPrices(p, c, marketIndex) {
  return Promise.all([
                FloatMarketSide.syntheticTokenPrice(p, c, marketIndex, true),
                FloatMarketSide.syntheticTokenPrice(p, c, marketIndex, false)
              ]).then(function (param) {
              return {
                      long: param[0],
                      short: param[1]
                    };
            });
}

function exposures(p, c, marketIndex) {
  return Promise.all([
                FloatMarketSide.exposure(p, c, marketIndex, true),
                FloatMarketSide.exposure(p, c, marketIndex, false)
              ]).then(function (param) {
              return {
                      long: param[0],
                      short: param[1]
                    };
            });
}

function unconfirmedExposures(p, c, marketIndex) {
  return Promise.all([
                FloatMarketSide.unconfirmedExposure(p, c, marketIndex, true),
                FloatMarketSide.unconfirmedExposure(p, c, marketIndex, false)
              ]).then(function (param) {
              return {
                      long: param[0],
                      short: param[1]
                    };
            });
}

function fundingRateAprs(p, c, marketIndex) {
  return Promise.all([
                FloatMarketSide.fundingRateApr(p, c, marketIndex, true),
                FloatMarketSide.fundingRateApr(p, c, marketIndex, false)
              ]).then(function (param) {
              return {
                      long: param[0],
                      short: param[1]
                    };
            });
}

function positions(p, c, marketIndex, address) {
  return Promise.all([
                FloatMarketSide.positions(p, c, marketIndex, true, address),
                FloatMarketSide.positions(p, c, marketIndex, false, address)
              ]).then(function (param) {
              return {
                      long: param[0],
                      short: param[1]
                    };
            });
}

function stakedPositions(p, c, marketIndex, address) {
  return Promise.all([
                FloatMarketSide.stakedPositions(p, c, marketIndex, true, address),
                FloatMarketSide.stakedPositions(p, c, marketIndex, false, address)
              ]).then(function (param) {
              return {
                      long: param[0],
                      short: param[1]
                    };
            });
}

function unsettledPositions(p, c, marketIndex, address) {
  return Promise.all([
                FloatMarketSide.unsettledPositions(p, c, marketIndex, true, address),
                FloatMarketSide.unsettledPositions(p, c, marketIndex, false, address)
              ]).then(function (param) {
              return {
                      long: param[0],
                      short: param[1]
                    };
            });
}

function claimFloatCustomFor(w, c, marketIndexes, address) {
  var partial_arg = makeStakerContract(FloatEthers.wrapWallet(w), c);
  return function (param) {
    return partial_arg.claimFloatCustomFor(marketIndexes, address, param);
  };
}

function settleOutstandingActions(w, c, marketIndex, address) {
  var partial_arg = makeLongShortContract(FloatEthers.wrapWallet(w), c);
  return function (param) {
    return partial_arg.executeOutstandingNextPriceSettlementsUser(address, marketIndex, param);
  };
}

function updateSystemState(w, c, marketIndex) {
  var partial_arg = makeLongShortContract(FloatEthers.wrapWallet(w), c);
  return function (param) {
    return partial_arg.updateSystemState(marketIndex, param);
  };
}

function makeWithWallet(w, marketIndex) {
  return {
          contracts: FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                return {
                        longToken: Caml_array.get(c.markets, marketIndex).longToken,
                        shortToken: Caml_array.get(c.markets, marketIndex).shortToken,
                        yieldManager: Caml_array.get(c.markets, marketIndex).yieldManager
                      };
              }),
          getLeverage: (function (param) {
              return FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                          return leverage(w.provider, c, Ethers.BigNumber.from(marketIndex));
                        });
            }),
          getFundingRateMultiplier: (function (param) {
              return FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                          return FloatMarketSide.fundingRateMultiplier(w.provider, c, Ethers.BigNumber.from(marketIndex));
                        });
            }),
          getSyntheticTokenPrices: (function (param) {
              return FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                          return syntheticTokenPrices(w.provider, c, Ethers.BigNumber.from(marketIndex));
                        });
            }),
          getExposures: (function (param) {
              return FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                          return exposures(w.provider, c, Ethers.BigNumber.from(marketIndex));
                        });
            }),
          getUnconfirmedExposures: (function (param) {
              return FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                          return unconfirmedExposures(w.provider, c, Ethers.BigNumber.from(marketIndex));
                        });
            }),
          getFundingRateAprs: (function (param) {
              return FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                          return fundingRateAprs(w.provider, c, Ethers.BigNumber.from(marketIndex));
                        });
            }),
          getPositions: (function (ethAddress) {
              return FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                          return positions(w.provider, c, Ethers.BigNumber.from(marketIndex), ethAddress);
                        });
            }),
          getStakedPositions: (function (ethAddress) {
              return FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                          return stakedPositions(w.provider, c, Ethers.BigNumber.from(marketIndex), ethAddress);
                        });
            }),
          getUnsettledPositions: (function (ethAddress) {
              return FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                          return unsettledPositions(w.provider, c, Ethers.BigNumber.from(marketIndex), ethAddress);
                        });
            }),
          claimFloatCustomFor: (function (ethAddress, txOptions) {
              return FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                          return claimFloatCustomFor(w, c, [Ethers.BigNumber.from(marketIndex)], ethAddress)(txOptions);
                        });
            }),
          settleOutstandingActions: (function (ethAddress, txOptions) {
              return FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                          return settleOutstandingActions(w, c, Ethers.BigNumber.from(marketIndex), ethAddress)(txOptions);
                        });
            }),
          updateSystemState: (function (txOptions) {
              return FloatUtil.getChainConfig(FloatEthers.wrapWallet(w)).then(function (c) {
                          return updateSystemState(w, c, Ethers.BigNumber.from(marketIndex))(txOptions);
                        });
            }),
          getSide: (function (param) {
              return FloatMarketSide.makeWithWallet(w, marketIndex, param);
            })
        };
}

function makeWithProvider(p, marketIndex) {
  return {
          contracts: FloatUtil.getChainConfig(FloatEthers.wrapProvider(p)).then(function (c) {
                return {
                        longToken: Caml_array.get(c.markets, marketIndex).longToken,
                        shortToken: Caml_array.get(c.markets, marketIndex).shortToken,
                        yieldManager: Caml_array.get(c.markets, marketIndex).yieldManager
                      };
              }),
          getLeverage: (function (param) {
              return FloatUtil.getChainConfig(FloatEthers.wrapProvider(p)).then(function (c) {
                          return leverage(p, c, Ethers.BigNumber.from(marketIndex));
                        });
            }),
          getFundingRateMultiplier: (function (param) {
              return FloatUtil.getChainConfig(FloatEthers.wrapProvider(p)).then(function (c) {
                          return FloatMarketSide.fundingRateMultiplier(p, c, Ethers.BigNumber.from(marketIndex));
                        });
            }),
          getSyntheticTokenPrices: (function (param) {
              return FloatUtil.getChainConfig(FloatEthers.wrapProvider(p)).then(function (c) {
                          return syntheticTokenPrices(p, c, Ethers.BigNumber.from(marketIndex));
                        });
            }),
          getExposures: (function (param) {
              return FloatUtil.getChainConfig(FloatEthers.wrapProvider(p)).then(function (c) {
                          return exposures(p, c, Ethers.BigNumber.from(marketIndex));
                        });
            }),
          getUnconfirmedExposures: (function (param) {
              return FloatUtil.getChainConfig(FloatEthers.wrapProvider(p)).then(function (c) {
                          return unconfirmedExposures(p, c, Ethers.BigNumber.from(marketIndex));
                        });
            }),
          getFundingRateAprs: (function (param) {
              return FloatUtil.getChainConfig(FloatEthers.wrapProvider(p)).then(function (c) {
                          return fundingRateAprs(p, c, Ethers.BigNumber.from(marketIndex));
                        });
            }),
          getPositions: (function (ethAddress) {
              return FloatUtil.getChainConfig(FloatEthers.wrapProvider(p)).then(function (c) {
                          return positions(p, c, Ethers.BigNumber.from(marketIndex), ethAddress);
                        });
            }),
          getStakedPositions: (function (ethAddress) {
              return FloatUtil.getChainConfig(FloatEthers.wrapProvider(p)).then(function (c) {
                          return stakedPositions(p, c, Ethers.BigNumber.from(marketIndex), ethAddress);
                        });
            }),
          getUnsettledPositions: (function (ethAddress) {
              return FloatUtil.getChainConfig(FloatEthers.wrapProvider(p)).then(function (c) {
                          return unsettledPositions(p, c, Ethers.BigNumber.from(marketIndex), ethAddress);
                        });
            }),
          getSide: (function (isLong) {
              return FloatMarketSide.WithProvider.make(p, marketIndex, isLong);
            }),
          connect: (function (w) {
              return makeWithWallet(w, marketIndex);
            })
        };
}

exports.div = div;
exports.fromInt = fromInt;
exports.toNumber = toNumber;
exports.tenToThe18 = tenToThe18;
exports.makeLongShortContract = makeLongShortContract;
exports.makeStakerContract = makeStakerContract;
exports.leverage = leverage;
exports.syntheticTokenPrices = syntheticTokenPrices;
exports.exposures = exposures;
exports.unconfirmedExposures = unconfirmedExposures;
exports.fundingRateAprs = fundingRateAprs;
exports.positions = positions;
exports.stakedPositions = stakedPositions;
exports.unsettledPositions = unsettledPositions;
exports.claimFloatCustomFor = claimFloatCustomFor;
exports.settleOutstandingActions = settleOutstandingActions;
exports.updateSystemState = updateSystemState;
exports.makeWithWallet = makeWithWallet;
exports.makeWithProvider = makeWithProvider;
/* ethers Not a pure module */
