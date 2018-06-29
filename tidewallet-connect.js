/*
const User = "0x89871c844ffcbeaf7bc4f161d081defaa35bed67";
const USX = "0xb8e5c9d9e8ea9cb92cd883ecb0d4f718f031551d";
const XDice = "0x014449dd1b335284d3e63c3a94c7954e95f8ef43";

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

// 用戶第 5 期中獎狀態（有無中獎, 是否已領取, 投注數字, 該期中獎數字）
TWC.call({ to: XDice, data: `0xe62c06af000000000000000000000000${USX.substr(2)}0000000000000000000000000000000000000000000000000000000000000005${User.substr(2)}` }).then(console.log)
=> ["0x0000000000000000000000000000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000000000000000000000000000000", "0x000000000000000000000000000000000000000000000000000000000000000a", "0x000000000000000000000000000000000000000000000000000000000000000a"]

// 領第 5 期獎
TWC.sendTransaction({ from: User, to: XDice, data: `0xaad3ec96000000000000000000000000${USX.substr(2)}0000000000000000000000000000000000000000000000000000000000000005` }).then(console.log)
=> "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
*/

(function (module, exports) {
'use strict';

const events = {};
class TWC {
  static once({ id, callback }) {
    const fn = callback instanceof Function ? callback : () => {};
    events[id] = fn;
  }
  static zeroFill(content, n, fillRight) {
  	const fillZ = n - content.length;
  	let result = content;
    if(fillZ > 0) {
      result = !!fillRight ?
        content + new Array(fillZ).fill(0).join('') :
        new Array(fillZ).fill(0).join('') + content;
    }
    return result;
  }
  static randomID() {
    const ID = this.zeroFill(
    	(parseInt(Math.random() * 16 ** 8)).toString(16),
    	8,
    	false
    );
    return ID;
  }
  static encodeQuery(data) {
  	let result = "";
  	if(data instanceof Object) {
      result = Object.keys.map((k) => {

      });
  	}
  }

  static TidewalletCommand({ cmd, address, tx, from, to, token, value, data }) {
  	const tmpA = document.createElement('a');
  	const rid = this.randomID();
  	tmpA.target = '_blank'
    switch(cmd) {
      case 'accounts':
        tmpA.href = `tidewallet://connect/accounts/${rid}`;
        break;
      case 'getBalance':
        tmpA.href = `tidewallet://connect/getBalance/${rid}?address=${address}`;
        break;
      case 'getTokenBalance':
        tmpA.href = `tidewallet://connect/getTokenBalance/${rid}?address=${address}&token=${token}`;
        break;
      case 'getTransactionReceipt':
        tmpA.href = `tidewallet://connect/getTransactionReceipt/${rid}?tx=${tx}`;
        break;
      case 'call':
        tmpA.href = `tidewallet://connect/call/${rid}?from=${from}?to=${to}?value=${value}?data=${data}`;
        break;
      case 'sendTransaction':
        tmpA.href = `tidewallet://connect/sendTransaction/${rid}?from=${from}?to=${to}?value=${value}?data=${data}`;
        break;
    }

    return new Promise((resolve, reject) => {
      this.once({ id: rid, callback: (data) => {
        if(data){
          if(cmd == 'call'){
            let l = Math.floor(data.slice(2).length / 64);
            let r = [];
            for (let i = 0; i < l; i++) {
                r.push(data.slice(2+i*64, 66+i*64));
            }
            resolve(r);
          } else {
            resolve(data);
          }
        } else {
          reject(new Error('oops!'));
        }
      }});
      tmpA.click();
    });
  }
  static accounts() {
  	return this.TidewalletCommand({
  	  cmd: 'accounts'
  	});
  }
  static getBalance({ address }) {
    return this.TidewalletCommand({
      cmd: 'getBalance',
      address: address
  	});
  }
  static getTokenBalance({ address, token }) {
    return this.TidewalletCommand({
      cmd: 'getTokenBalance',
      address: address,
      token: token
  	});
  }
  static getTransactionReceipt({ tx }) {
    return this.TidewalletCommand({
      cmd: 'getTransactionReceipt',
      tx: tx
  	});
  }
  static call({ from, to, value, data }) {
    return this.TidewalletCommand({
      cmd: 'call',
      from: from,
      to: to,
      value: value,
      data: data
  	});
  }
  static sendTransaction({ from, to, value, data }) {
    return this.TidewalletCommand({
      cmd: 'sendTransaction',
      from: from,
      to: to,
      value: value,
      data: data
  	});
  }
}
const TidewalletEmit = ({ id, result }) => {
  if(events[id] instanceof Function) {
  	events[id](result);
  	delete events[id];
  }
};

if (typeof module === 'object') {
  module.exports = TWC;
} else {
  exports.TWC = TWC;
  exports.TidewalletEmit = TidewalletEmit;
}
})(typeof module === 'undefined' || module, this);