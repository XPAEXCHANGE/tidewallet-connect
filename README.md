# tidewallet-connect
A javascript library to develop Dapp in TideWallet

- [accounts](#accounts)
- [getBalance](#getBalance)
- [getTokenBalance](#getTokenBalance)
- [getTransactionCount](#getTransactionCount)
- [getCode](#getCode)
- [getTransactionByHash](#getTransactionByHash)
- [getTransactionReceipt](#getTransactionReceipt)
- [gasPrice](#gasPrice)
- [estimateGas](#estimateGas)
- [sign](#sign)
- [call](#call)
- [sendTransaction](#sendTransaction)

## TideWallet IPC
### accounts
- tidewallet://connect/accounts/${request_id}
- javascript:TideWalletEmit(${result})
```json
{
  "id": ${request_id},
  "jsonrpc": "2.0",
  "result": ["0x7d04e22b7b4bd658ecb74bd97c7031b02c5060eb"]
}
```

### getBalance
- tidewallet://connect/getBalance/${request_id}?address=0x7a96a850eddd0f635b9d7ec867b13a380069bedc
- javascript:TideWalletEmit(${result})
```json
{
  "id": ${request_id},
  "jsonrpc": "2.0",
  "result": ["0x280ba95e417584167"]
}
```

### getTokenBalance
- tidewallet://connect/getTokenBalance/${request_id}?address=0x7a96a850eddd0f635b9d7ec867b13a380069bedc&token=0xa325aaa53de6ae1ad7df6671162beea340ac08c6
- javascript:TideWalletEmit(${result})
```json
{
  "id": ${request_id},
  "jsonrpc": "2.0",
  "result": ["0x280ba95e417584167"]
}
```

### getTransactionCount
- tidewallet://connect/getTransactionCount/${request_id}?address=0x353852c791150c1a78851a6cb28e246b30c8c6d9
- javascript:TideWalletEmit(${result})
```json
{
  "id": ${request_id},
  "jsonrpc": "2.0",
  "result": ["0x15"]
}
```

### getCode
- tidewallet://connect/getCode/${request_id}?address=0x13b4b9c415213bb2d0a5d692b6f2e787b927c211
- javascript:TideWalletEmit(${result})
```json
{
  "id": ${request_id},
  "jsonrpc": "2.0",
  "result": ["0x60606040526004361061019d5763ffffffff6..."]
}
```

### getTransactionByHash
- tidewallet://connect/getTransactionByHash/${request_id}?tx=0x764191f33228fb917eff0c6cc6d34838c8bf6004d38e3f2ede7b172d5fe3ceff
- javascript:TideWalletEmit(${result})
```json
{
  "id": ${request_id},
  "jsonrpc": "2.0",
  "result": {
    "blockHash": "0xd96a04602a1c19d19f8c854f8339290d513ef2cff058d941859e6cc36177c03d",
    "blockNumber": "0x58fbe9",
    "chainId": null,
    "condition": null,
    "creates": null,
    "from": "0xb1f545c55322d4bee27eda5d8cf33ad63a9db81c",
    "gas": "0xea60",
    "gasPrice": "0x342770c00",
    "hash": "0x764191f33228fb917eff0c6cc6d34838c8bf6004d38e3f2ede7b172d5fe3ceff",
    "input": "0xa9059cbb0000000000000000000000008ac8a3353020b4167253663ee43b8e6fd3755e1d00000000000000000000000000000000000000000000000000000000b2d05e00",
    "nonce": "0x1a45",
    "publicKey": "0x5c64b295acdc2d3d244070b0be2b4e06f8d18bbab04b30f27b5f2be5137ebd6f9cd595d2e57fefe5160629578f220e4331497351bafe34c182e65ae400ef3251",
    "r": "0x314b2c80527fd6bcab96f05255b1178fa792ac1cae8267f8c5edef57858be987",
    "raw": "0xf8ab821a45850342770c0082ea6094fb8bf095ebcdad57d2e37573a505e7d3bafdd3cc80b844a9059cbb0000000000000000000000008ac8a3353020b4167253663ee43b8e6fd3755e1d00000000000000000000000000000000000000000000000000000000b2d05e001ba0314b2c80527fd6bcab96f05255b1178fa792ac1cae8267f8c5edef57858be987a005f2a6f1bcc3b684500573ec4250d5eb5f850b7634680f085bc42fbf31da135f",
    "s": "0x5f2a6f1bcc3b684500573ec4250d5eb5f850b7634680f085bc42fbf31da135f",
    "standardV": "0x0",
    "to": "0xfb8bf095ebcdad57d2e37573a505e7d3bafdd3cc",
    "transactionIndex": "0x6f",
    "v": "0x1b",
    "value": "0x0"
  }
}
```

### getTransactionReceipt
- tidewallet://connect/getTransactionReceipt/${request_id}?tx=0x764191f33228fb917eff0c6cc6d34838c8bf6004d38e3f2ede7b172d5fe3ceff
- javascript:TideWalletEmit(${result})
```json
{
  "id": ${request_id},
  "jsonrpc": "2.0",
  "result": {
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
    "transactionHash": "0x764191f33228fb917eff0c6cc6d34838c8bf6004d38e3f2ede7b172d5fe3ceff",
    "transactionIndex": "0x6f"
  }
}
```

### gasPrice
- tidewallet://connect/gasPrice/${request_id}
- javascript:TideWalletEmit(${result})
```json
{
  "id": ${request_id},
  "jsonrpc": "2.0",
  "result": ["0x09184e72a000"]
}
```

### estimateGas
- tidewallet://connect/estimateGas/${request_id}?from=0x353852c791150c1a78851a6cb28e246b30c8c6d9&to=0x6a9d4e243bff85b1405f23c2a90bdc3d8a31190f&value=0x2386f26fc10000&data=0x4b7c2b110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016345785d8a0000000000000000000000000000ca78a735d4e045ea057ebceed0a94e02eadfc096000000000000000000000000000000000000000000000a968163f0a57b400000
- javascript:TideWalletEmit(${result})
```json
{
  "id": ${request_id},
  "jsonrpc": "2.0",
  "result": ["0x5d984"]
}
```

### sign
- tidewallet://connect/estimateGas/${request_id}?address=0x89871c844ffcbeaf7bc4f161d081defaa35bed67&data=0x22e62f15
- javascript:TideWalletEmit(${result})
```json
{
  "id": ${request_id},
  "jsonrpc": "2.0",
  "result": ["0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"]
}
```

### call
- tidewallet://connect/call/${request_id}?from=0x353852c791150c1a78851a6cb28e246b30c8c6d9&to=0x6a9d4e243bff85b1405f23c2a90bdc3d8a31190f&value=0x2386f26fc10000&data=0x4b7c2b110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016345785d8a0000000000000000000000000000ca78a735d4e045ea057ebceed0a94e02eadfc096000000000000000000000000000000000000000000000a968163f0a57b400000
- javascript:TideWalletEmit(${result})
```json
{
  "id": ${request_id},
  "jsonrpc": "2.0",
  "result": ["0x0"]
}
```

### sendTransaction
- tidewallet://connect/sendTransaction/${request_id}?from=0x353852c791150c1a78851a6cb28e246b30c8c6d9&to=0x6a9d4e243bff85b1405f23c2a90bdc3d8a31190f&value=0x2386f26fc10000&data=0x4b7c2b110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016345785d8a0000000000000000000000000000ca78a735d4e045ea057ebceed0a94e02eadfc096000000000000000000000000000000000000000000000a968163f0a57b400000
- javascript:TideWalletEmit(${result})
```json
{
  "id": ${request_id},
  "jsonrpc": "2.0",
  "result": ["0x5c25e265c981e1606e0390723a562678419af88895ec78335d1fa90caa38a396"]
}
```
