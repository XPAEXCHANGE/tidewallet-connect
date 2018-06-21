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
### getTransactionCount
### getCode
### getTransactionByHash
### getTransactionReceipt
### gasPrice
### estimateGas
### sign
### call
### sendTransaction
