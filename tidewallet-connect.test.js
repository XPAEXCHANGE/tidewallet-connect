/*
const User = "0x89871c844ffcbeaf7bc4f161d081defaa35bed67";
const USX = "0xb8e5c9d9e8ea9cb92cd883ecb0d4f718f031551d";
const XDice = "0x1c1530c92f622a5a6e23d51792e285575f20007f";

// 取得當前用戶帳號
TWC.accounts().then(console.log)
=> ["0x49aa79070f27f2fa4c375586eaf03c862cad26e9"]

// 取得當期資訊（期數, 累積投注, 開獎需求金額）
TWC.call({ to: XDice, data: `0x565b1a25000000000000000000000000${USX.substr(2)}` }).then(console.log)
=> ["0xb", "0x7ce66c50e2840000", "0x8ac7230489e80000"]

// 投注
TWC.sendTransaction({ from: User, to: XDice, data: `0x56142ca4000000000000000000000000${USX.substr(2)}00000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000` }).then(console.log)
=> "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"

// 取得第 5 期結果
TWC.call({ to: XDice, data: `0x7724f4e7000000000000000000000000${USX.substr(2)}0000000000000000000000000000000000000000000000000000000000000005` }).then(console.log)
=> "0xa"

// 用戶第 5 期中獎狀態（有無中獎, 是否已領取）
TWC.call({ to: XDice, data: `0xe62c06af000000000000000000000000${USX.substr(2)}0000000000000000000000000000000000000000000000000000000000000005${User.substr(2)}` }).then(console.log)
=> ["0x0000000000000000000000000000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000000000000000000000000000000"]

// 領第 5 期獎
TWC.sendTransaction({ from: User, to: XDice, data: `0xaad3ec96000000000000000000000000${USX.substr(2)}0000000000000000000000000000000000000000000000000000000000000005` }).then(console.log)
=> "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"

//取得用戶 balanceOf 
TWC.call({ to: USX, data: `0x70a08231000000000000000000000000${User.substr(2)}` }).then(console.log)
*/

(function (module, exports) {
'use strict';

const ecalert = (title, content) => {
  let container;
  const items = document.getElementById('tidewallet-connect-debug');
  const body = document.getElementsByTagName('body').item(0);
  const msg = document.createElement('li');
  const close = document.createElement('a');
  close.onclick = () => { msg.remove(); }
  close.append('x');
  close.style = 'position: absolute; right: 0px; top: 0px; padding: 0px 5px; height: 100%; line-height: 100%; cursor: pointer; background: #abd; border-top-right-radius: 5px; border-bottom-right-radius: 5px;';
  msg.style = 'display: block; width: 300px; padding: 10px; background: #cdf; border-radius: 5px; position: relative; color: #666; margin: 1px';
  msg.append(title);
  msg.append(document.createElement('br'));
  msg.append(content);
  msg.append(close);
  if(!!items) {
    container = items;
  } else {
    container = document.createElement('ul');
    container.id = 'tidewallet-connect-debug';
    container.style = 'position: fixed; top: 0px; margin: auto;';
    body.append(container);
  }
  container.append(msg);
};

class TWC {
  static randomWait(result) {
    return new Promise((resolve, reject) => {
    	setTimeout(() => {
    	  this.randomSuccess() ?
    	    resolve(result) :
    	    reject(new Error('oops'));
    	}, Math.random() * 3000 + 1000);
    });
  }
  static randomSuccess() {
  	return Math.random() > 0.1;
  }
  static log(fn, args) {
    if(this.debug) {
  	  ecalert(`--- ${fn} ---`, args);
    }
  }
  static accounts() {
  	this.log('accounts');
    return this.randomWait(['0x49aa79070f27f2fa4c375586eaf03c862cad26e9']);
  }
  static getBalance({ address }) {
    this.log('getBalance', arguments[0]);
    return this.randomWait(Math.random() * 10**18);
  }
  static getTokenBalance({ address }) {
    this.log('getBalance', arguments[0]);
    return this.randomWait(Math.random() * 10**18);
  }
  static getTransactionReceipt({ tx }) {
    this.log('getTransactionReceipt', arguments[0]);
    const result = Math.random() > 0.5 ?
      {
        "blockHash": "0xd96a04602a1c19d19f8c854f8339290d513ef2cff058d941859e6cc36177c03d",
        "blockNumber": "0x58fbe9",
        "contractAddress": null,
        "cumulativeGasUsed": "0x734905",
        "gasUsed": "0xcb51",
        "logs": [
          {
            "address": "0xfb8bf095ebcdad57d2e37573a505e7d3bafdd3cc",
            "blockHash": "0xd96a04602a1c19d19f8c854f8339290d513ef2cff058d941859e6cc36177c03d",
            "blockNumber": "0x58fbe9",
            "data": "0x00000000000000000000000000000000000000000000000000000000b2d05e00",
            "logIndex": "0x95",
            "topics": [
              "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
              "0x000000000000000000000000b1f545c55322d4bee27eda5d8cf33ad63a9db81c",
              "0x0000000000000000000000008ac8a3353020b4167253663ee43b8e6fd3755e1d"
            ],
            "transactionHash": "0x764191f33228fb917eff0c6cc6d34838c8bf6004d38e3f2ede7b172d5fe3ceff",
            "transactionIndex": "0x6f",
            "transactionLogIndex": "0x0",
            "type": "mined"
          }
        ],
        "logsBloom": "0x00000000000001000000000000000000000000000040000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000001000008000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000080000200000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000400000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000",
        "root": null,
        "status": "0x1",
        "transactionHash": tx,
        "transactionIndex": "0x6f"
      } :
      null;
    return this.randomWait(result);
  }
  static call({ from, to, value, data }) {
    this.log('getTransactionReceipt', arguments[0]);
    let result;
    if(/da359a24/.test(data)) {  // gameSets(address,uint256,uint256)
      result = '0x' + ((parseInt(Math.random() * 10) + 1) * 10 ** 18).toString(16);
    } else if(/a61d0aed/.test(data)) {  // maxBets()
      result = '0x' + (10 * 10 ** 18).toString(16);
    } else if(/118ea1af/.test(data)) {  // getTotalStakes(address,uint256)
      result = '0x' + ((parseInt(Math.random() * 10) + 1) * 10 ** 18).toString(16);
    } else if(/d4b19a1d/.test(data)) {  // period(address)
      result = '0x' + (parseInt(Math.random() * 100)).toString(16);
    } else if(/8143c7e6/.test(data)) {  // unclaimedReward(address,uint256,address)
      result = Math.random() > 0.7 ?
        '0x0000000000000000000000000000000000000000000000000000000000000001' :
        '0x0000000000000000000000000000000000000000000000000000000000000000';
    } else if(/aeeaf377/.test(data)) {  // tickets(address,uint256,address)
      result = '0x' + (parseInt(Math.random() * 11) + 2).toString(16);
    } else if(/7724f4e7/.test(data)) {  // results(address,uint256)
      result = '0x' + (parseInt(Math.random() * 11) + 2).toString(16);
    } else if(/565b1a25/.test(data)) {  // getCurrentRound(address)
      result = [
        '0x' + (parseInt(Math.random() * 100)).toString(16),
        '0x' + ((parseInt(Math.random() * 10) + 1) * 10 ** 18).toString(16),
        '0x' + (10 * 10 ** 18).toString(16)
      ];
    } else if(/e62c06af/.test(data)) {
      const r1 = Math.random() > 0.8;
      const b1 = r1 ?
        '0x0000000000000000000000000000000000000000000000000000000000000001' :
        '0x0000000000000000000000000000000000000000000000000000000000000000';
      const b2 = r1 && Math.random() > 0.5 ?
        '0x0000000000000000000000000000000000000000000000000000000000000001' :
        '0x0000000000000000000000000000000000000000000000000000000000000000'
      result = [b1, b2];
    } else {
      result = '0x' + (parseInt(Math.random() * 10 ** 18)).toString(16);
    }
    return this.randomWait(result);
  }
  static sendTransaction({ from, to, value, data }) {
  	this.log('sendTransaction', arguments[0]);
  	return this.randomWait('0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331');
  }
}
TWC.debug = false;

if (typeof module === 'object') {
  module.exports = TWC;
} else {
  exports.TWC = TWC;
}
})(typeof module === 'undefined' || module, this);