import logo from './logo.svg';
import './App.css';
import { useState, } from "react";
import useWalletConnect from "./useWalletConnect";


function App() {

  const [ connectWallet, 
          disConnectWallet, 
          isWeb3WalletConnected, 
          web3WalletConnection, 
          web3WalletCurrentAccount,
          currentWeb3WalletConnectChainID,
          currentWeb3WalletConnectChainName
  ] = useWalletConnect("Test App Name", "light", 1, "https://eth-goerli.g.alchemy.com/v2/t4I2C_2QN-uTLjmmUpflVG4Oc5XvLddg");

  const smartContractABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_initialSupply",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "uint64",
          "name": "_allowedInvestors",
          "type": "uint64"
        },
        {
          "internalType": "uint8",
          "name": "_decimalsPlaces",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "_ShareCertificate",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_CompanyHomepage",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_CompanyLegalDocs",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_atomicSwapContractAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "_allowedInvestors",
          "type": "uint64"
        }
      ],
      "name": "AllowedInvestorsReset",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "BurnTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "_CompanyHomepage",
          "type": "string"
        }
      ],
      "name": "CompanyHomepageReset",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "_CompanyLegalDocs",
          "type": "string"
        }
      ],
      "name": "CompanyLegalDocsReset",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "_tradingHoldingPeriod",
          "type": "uint64"
        }
      ],
      "name": "HoldingPeriodReset",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "IssuerForceTransfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "receiveRestriction",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sendRestriction",
          "type": "uint256"
        }
      ],
      "name": "KYCDataForUserSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "MintTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "_ShareCertificate",
          "type": "string"
        }
      ],
      "name": "ShareCertificateReset",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TransferFrom",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "errorCode",
          "type": "uint8"
        }
      ],
      "name": "TransferRestrictionDetected",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "WhitelistAuthorityStatusRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "WhitelistAuthorityStatusSet",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "CompanyHomepage",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "CompanyLegalDocs",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "IssuancePlatform",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ShareCertificate",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "allowedInvestors",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentTotalInvestors",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "issuanceProtocol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tradingHoldingPeriod",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_ShareCertificate",
          "type": "string"
        }
      ],
      "name": "resetShareCertificate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_CompanyHomepage",
          "type": "string"
        }
      ],
      "name": "resetCompanyHomepage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_CompanyLegalDocs",
          "type": "string"
        }
      ],
      "name": "resetCompanyLegalDocs",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "_allowedInvestors",
          "type": "uint64"
        }
      ],
      "name": "resetAllowedInvestors",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "_tradingHoldingPeriod",
          "type": "uint64"
        }
      ],
      "name": "setTradingHoldingPeriod",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "setWhitelistAuthorityStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "removeWhitelistAuthorityStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getWhitelistAuthorityStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "receiveRestriction",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sendRestriction",
          "type": "uint256"
        }
      ],
      "name": "modifyKYCData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "account",
          "type": "address[]"
        },
        {
          "internalType": "uint256",
          "name": "receiveRestriction",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sendRestriction",
          "type": "uint256"
        }
      ],
      "name": "bulkWhitelistWallets",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getKYCData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "detectTransferRestriction",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "status",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "restrictionCode",
          "type": "uint8"
        }
      ],
      "name": "messageForTransferRestriction",
      "outputs": [
        {
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "forceTransferToken",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  const contractByteCode = "0x608060405260126006556040518060400160405280600381526020017f312e3100000000000000000000000000000000000000000000000000000000008152506007908051906020019062000056929190620004ef565b506040518060400160405280600a81526020017f446967695368617265730000000000000000000000000000000000000000000081525060089080519060200190620000a4929190620004ef565b506040518060400160405280600881526020017f4552432d3134303400000000000000000000000000000000000000000000000081525060099080519060200190620000f2929190620004ef565b50600060105560006011556001601260006101000a81548160ff0219169083151502179055503480156200012557600080fd5b5060405162003f8238038062003f8283398181016040528101906200014b91906200063f565b87600b908051906020019062000163929190620004ef565b5086600c90805190602001906200017c929190620004ef565b508460068190555033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001806000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560118190555088600a81905550600a5460026000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600160056000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555083600d908051906020019062000421929190620004ef565b5082600e90805190602001906200043a929190620004ef565b5081600f908051906020019062000453929190620004ef565b50600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600a54604051620004d89190620007a6565b60405180910390a350505050505050505062000966565b828054620004fd906200089e565b90600052602060002090601f0160209004810192826200052157600085556200056d565b82601f106200053c57805160ff19168380011785556200056d565b828001600101855582156200056d579182015b828111156200056c5782518255916020019190600101906200054f565b5b5090506200057c919062000580565b5090565b5b808211156200059b57600081600090555060010162000581565b5090565b6000620005b6620005b084620007f7565b620007c3565b905082815260208101848484011115620005cf57600080fd5b620005dc84828562000868565b509392505050565b600081519050620005f58162000932565b92915050565b600082601f8301126200060d57600080fd5b81516200061f8482602086016200059f565b91505092915050565b60008151905062000639816200094c565b92915050565b60008060008060008060008060006101208a8c0312156200065f57600080fd5b60006200066f8c828d0162000628565b99505060208a015167ffffffffffffffff8111156200068d57600080fd5b6200069b8c828d01620005fb565b98505060408a015167ffffffffffffffff811115620006b957600080fd5b620006c78c828d01620005fb565b9750506060620006da8c828d0162000628565b9650506080620006ed8c828d0162000628565b95505060a08a015167ffffffffffffffff8111156200070b57600080fd5b620007198c828d01620005fb565b94505060c08a015167ffffffffffffffff8111156200073757600080fd5b620007458c828d01620005fb565b93505060e08a015167ffffffffffffffff8111156200076357600080fd5b620007718c828d01620005fb565b925050610100620007858c828d01620005e4565b9150509295985092959850929598565b620007a0816200085e565b82525050565b6000602082019050620007bd600083018462000795565b92915050565b6000604051905081810181811067ffffffffffffffff82111715620007ed57620007ec62000903565b5b8060405250919050565b600067ffffffffffffffff82111562000815576200081462000903565b5b601f19601f8301169050602081019050919050565b600062000837826200083e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620008885780820151818401526020810190506200086b565b8381111562000898576000848401525b50505050565b60006002820490506001821680620008b757607f821691505b60208210811415620008ce57620008cd620008d4565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200093d816200082a565b81146200094957600080fd5b50565b62000957816200085e565b81146200096357600080fd5b50565b61360c80620009766000396000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c80637cae04f711610125578063abc30a4b116100ad578063d4ce14151161007c578063d4ce141514610644578063da76e2f314610674578063dd62ed3e14610690578063e8379421146106c0578063f2fde38b146106f05761021c565b8063abc30a4b146105d2578063ac893db1146105ee578063b1b5932a1461060a578063c319e41c146106285761021c565b806395d89b41116100f457806395d89b41146105055780639dc29fac14610523578063a48179ff14610553578063a9059cbb14610571578063ab47a2f9146105a15761021c565b80637cae04f71461047b5780637f4ab1dd1461049957806384f9007f146104c95780638da5cb5b146104e75761021c565b806340c10f19116101a857806359a72ddc1161017757806359a72ddc146103d557806362a3d4bd146103f35780636401ca761461040f578063654b6f151461042d57806370a082311461044b5761021c565b806340c10f191461034d578063459688361461037d57806351aebcd41461039b57806354fd4d50146103b75761021c565b806320b6a50f116101ef57806320b6a50f146102a957806323b872dd146102b35780632b8e797a146102e3578063313ce567146102ff5780633a24ddc51461031d5761021c565b806306fdde0314610221578063095ea7b31461023f57806309fc38921461026f57806318160ddd1461028b575b600080fd5b61022961070c565b60405161023691906130ad565b60405180910390f35b61025960048036038101906102549190612ae5565b61079a565b6040516102669190613092565b60405180910390f35b61028960048036038101906102849190612b70565b61093e565b005b610293610a41565b6040516102a0919061324f565b60405180910390f35b6102b1610a4b565b005b6102cd60048036038101906102c89190612a96565b610b07565b6040516102da9190613092565b60405180910390f35b6102fd60048036038101906102f89190612b21565b610d4e565b005b610307610df1565b604051610314919061324f565b60405180910390f35b61033760048036038101906103329190612ae5565b610df7565b6040516103449190613092565b60405180910390f35b61036760048036038101906103629190612ae5565b610ec0565b6040516103749190613092565b60405180910390f35b6103856110d4565b604051610392919061324f565b60405180910390f35b6103b560048036038101906103b09190612bd7565b6110da565b005b6103bf611184565b6040516103cc91906130ad565b60405180910390f35b6103dd611212565b6040516103ea91906130ad565b60405180910390f35b61040d60048036038101906104089190612c18565b6112a0565b005b610417611388565b604051610424919061324f565b60405180910390f35b61043561138e565b60405161044291906130ad565b60405180910390f35b61046560048036038101906104609190612a31565b61141c565b604051610472919061324f565b60405180910390f35b610483611465565b60405161049091906130ad565b60405180910390f35b6104b360048036038101906104ae9190612c41565b6114f3565b6040516104c091906130ad565b60405180910390f35b6104d161157c565b6040516104de91906130ad565b60405180910390f35b6104ef61160a565b6040516104fc9190613077565b60405180910390f35b61050d611634565b60405161051a91906130ad565b60405180910390f35b61053d60048036038101906105389190612ae5565b6116c2565b60405161054a9190613092565b60405180910390f35b61055b611958565b6040516105689190613092565b60405180910390f35b61058b60048036038101906105869190612ae5565b61196b565b6040516105989190613092565b60405180910390f35b6105bb60048036038101906105b69190612a31565b6119ea565b6040516105c992919061326a565b60405180910390f35b6105ec60048036038101906105e79190612bd7565b611a75565b005b61060860048036038101906106039190612bd7565b611b1f565b005b610612611bc9565b60405161061f91906130ad565b60405180910390f35b610642600480360381019061063d9190612a31565b611c57565b005b61065e60048036038101906106599190612a96565b611d42565b60405161066b9190613293565b60405180910390f35b61068e60048036038101906106899190612a31565b61214a565b005b6106aa60048036038101906106a59190612a5a565b61222c565b6040516106b7919061324f565b60405180910390f35b6106da60048036038101906106d59190612a31565b6122b3565b6040516106e79190613092565b60405180910390f35b61070a60048036038101906107059190612a31565b612309565b005b600b805461071990613478565b80601f016020809104026020016040519081016040528092919081815260200182805461074590613478565b80156107925780601f1061076757610100808354040283529160200191610792565b820191906000526020600020905b81548152906001019060200180831161077557829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561080b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108029061318f565b60405180910390fd5b6000821161084e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108459061312f565b60405180910390fd5b81600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161092c919061324f565b60405180910390a36001905092915050565b60011515600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146109d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c89061322f565b60405180910390fd5b60005b8351811015610a3b57610a28848281518110610a19577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151848461244d565b8080610a33906134aa565b9150506109d4565b50505050565b6000600a54905090565b3373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610adb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad2906130cf565b60405180910390fd5b601260009054906101000a900460ff1615601260006101000a81548160ff021916908315150217905550565b60008383836000610b19848484611d42565b905060018160ff1614610b2b826114f3565b90610b6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6391906130ad565b60405180910390fd5b5085600360008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610c2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c239061314f565b60405180910390fd5b610c378888886124d9565b85600360008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610cbf91906133ad565b600360008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060019450505050509392505050565b60011515600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610de1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd89061322f565b60405180910390fd5b610dec83838361244d565b505050565b60065481565b60003373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e80906130cf565b60405180910390fd5b610eb683600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846124d9565b6001905092915050565b60003373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610f52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f49906130cf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610fc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb99061318f565b60405180910390fd5b81600a54610fd09190613357565b600a8190555081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110219190613357565b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110c2919061324f565b60405180910390a36001905092915050565b60105481565b3373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461116a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611161906130cf565b60405180910390fd5b80600f9080519060200190611180929190612851565b5050565b6007805461119190613478565b80601f01602080910402602001604051908101604052809291908181526020018280546111bd90613478565b801561120a5780601f106111df5761010080835404028352916020019161120a565b820191906000526020600020905b8154815290600101906020018083116111ed57829003601f168201915b505050505081565b600d805461121f90613478565b80601f016020809104026020016040519081016040528092919081815260200182805461124b90613478565b80156112985780601f1061126d57610100808354040283529160200191611298565b820191906000526020600020905b81548152906001019060200180831161127b57829003601f168201915b505050505081565b3373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611330576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611327906130cf565b60405180910390fd5b6000811461137e5760105481101561137d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611374906131ef565b60405180910390fd5b5b8060118190555050565b60115481565b6008805461139b90613478565b80601f01602080910402602001604051908101604052809291908181526020018280546113c790613478565b80156114145780601f106113e957610100808354040283529160200191611414565b820191906000526020600020905b8154815290600101906020018083116113f757829003601f168201915b505050505081565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6009805461147290613478565b80601f016020809104026020016040519081016040528092919081815260200182805461149e90613478565b80156114eb5780601f106114c0576101008083540402835291602001916114eb565b820191906000526020600020905b8154815290600101906020018083116114ce57829003601f168201915b505050505081565b606060018260ff16141561153e576040518060400160405280600b81526020017f57686974656c69737465640000000000000000000000000000000000000000008152509050611577565b6040518060400160405280600f81526020017f4e6f742057686974656c6973746564000000000000000000000000000000000081525090505b919050565b600e805461158990613478565b80601f01602080910402602001604051908101604052809291908181526020018280546115b590613478565b80156116025780601f106115d757610100808354040283529160200191611602565b820191906000526020600020905b8154815290600101906020018083116115e557829003601f168201915b505050505081565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600c805461164190613478565b80601f016020809104026020016040519081016040528092919081815260200182805461166d90613478565b80156116ba5780601f1061168f576101008083540402835291602001916116ba565b820191906000526020600020905b81548152906001019060200180831161169d57829003601f168201915b505050505081565b60003373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611754576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174b906130cf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156117c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117bb9061318f565b60405180910390fd5b81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015611846576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183d906131cf565b60405180910390fd5b81600a5461185491906133ad565b600a8190555081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118a591906133ad565b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611946919061324f565b60405180910390a36001905092915050565b601260009054906101000a900460ff1681565b6000338383600061197d848484611d42565b905060018160ff161461198f826114f3565b906119d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c791906130ad565b60405180910390fd5b506119dc3388886124d9565b600194505050505092915050565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205491509150915091565b3373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611b05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611afc906130cf565b60405180910390fd5b80600e9080519060200190611b1b929190612851565b5050565b3373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611baf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ba6906130cf565b60405180910390fd5b80600d9080519060200190611bc5929190612851565b5050565b600f8054611bd690613478565b80601f0160208091040260200160405190810160405280929190818152602001828054611c0290613478565b8015611c4f5780601f10611c2457610100808354040283529160200191611c4f565b820191906000526020600020905b815481529060010190602001808311611c3257829003601f168201915b505050505081565b3373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611ce7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cde906130cf565b60405180910390fd5b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600060011515601260009054906101000a900460ff16151514611d9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d919061310f565b60405180910390fd5b60008211611ddd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dd4906130ef565b60405180910390fd5b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414158015611e6c575060008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414155b611eab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ea29061320f565b60405180910390fd5b42600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411158015611f385750426000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411155b611f77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f6e9061316f565b60405180910390fd5b60006011541415611f8b5760019050612143565b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411806120265750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b156120345760019050612143565b60115460105410156120495760019050612143565b81600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541480156120d657506000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054145b80156121305750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614155b1561213e5760019050612143565b600090505b9392505050565b3373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146121da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121d1906130cf565b60405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff021916905550565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b3373ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612399576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612390906130cf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612409576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124009061318f565b60405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561255b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612552906131af565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546125a691906133ad565b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541480156126865750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b156126a157600160105461269a91906133ad565b6010819055505b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414801561273e5750600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156127595760016010546127529190613357565b6010819055505b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546127a49190613357565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051612844919061324f565b60405180910390a3505050565b82805461285d90613478565b90600052602060002090601f01602090048101928261287f57600085556128c6565b82601f1061289857805160ff19168380011785556128c6565b828001600101855582156128c6579182015b828111156128c55782518255916020019190600101906128aa565b5b5090506128d391906128d7565b5090565b5b808211156128f05760008160009055506001016128d8565b5090565b6000612907612902846132df565b6132ae565b9050808382526020820190508285602086028201111561292657600080fd5b60005b85811015612956578161293c888261299e565b845260208401935060208301925050600181019050612929565b5050509392505050565b600061297361296e8461330b565b6132ae565b90508281526020810184848401111561298b57600080fd5b612996848285613436565b509392505050565b6000813590506129ad81613591565b92915050565b600082601f8301126129c457600080fd5b81356129d48482602086016128f4565b91505092915050565b600082601f8301126129ee57600080fd5b81356129fe848260208601612960565b91505092915050565b600081359050612a16816135a8565b92915050565b600081359050612a2b816135bf565b92915050565b600060208284031215612a4357600080fd5b6000612a518482850161299e565b91505092915050565b60008060408385031215612a6d57600080fd5b6000612a7b8582860161299e565b9250506020612a8c8582860161299e565b9150509250929050565b600080600060608486031215612aab57600080fd5b6000612ab98682870161299e565b9350506020612aca8682870161299e565b9250506040612adb86828701612a07565b9150509250925092565b60008060408385031215612af857600080fd5b6000612b068582860161299e565b9250506020612b1785828601612a07565b9150509250929050565b600080600060608486031215612b3657600080fd5b6000612b448682870161299e565b9350506020612b5586828701612a07565b9250506040612b6686828701612a07565b9150509250925092565b600080600060608486031215612b8557600080fd5b600084013567ffffffffffffffff811115612b9f57600080fd5b612bab868287016129b3565b9350506020612bbc86828701612a07565b9250506040612bcd86828701612a07565b9150509250925092565b600060208284031215612be957600080fd5b600082013567ffffffffffffffff811115612c0357600080fd5b612c0f848285016129dd565b91505092915050565b600060208284031215612c2a57600080fd5b6000612c3884828501612a07565b91505092915050565b600060208284031215612c5357600080fd5b6000612c6184828501612a1c565b91505092915050565b612c73816133e1565b82525050565b612c82816133f3565b82525050565b6000612c938261333b565b612c9d8185613346565b9350612cad818560208601613445565b612cb681613580565b840191505092915050565b6000612cce601c83613346565b91507f4f6e6c79206f776e65722063616e2063616c6c2066756e6374696f6e000000006000830152602082019050919050565b6000612d0e602383613346565b91507f56616c7565206272696e67207472616e736665727265642063616e6e6f74206260008301527f65203000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612d74601483613346565b91507f5472616e73666572206e6f7420616c6c6f7765640000000000000000000000006000830152602082019050919050565b6000612db4601283613346565b91507f416d6f756e742063616e6e6f74206265203000000000000000000000000000006000830152602082019050919050565b6000612df4602783613346565b91507f416d6f756e742063616e6e6f742062652067726561746572207468616e20416c60008301527f6c6f77616e6365000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612e5a601483613346565b91507f4b59432054696d65205265737472696374696f6e0000000000000000000000006000830152602082019050919050565b6000612e9a601883613346565b91507f5a65726f2061646472657373206e6f7420616c6c6f77656400000000000000006000830152602082019050919050565b6000612eda602383613346565b91507f20416d6f756e742067726561746572207468616e2073656e6465722062616c6160008301527f6e636500000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612f40601b83613346565b91507f416d6f756e742067726561746572207468616e2062616c616e636500000000006000830152602082019050919050565b6000612f80603583613346565b91507f416c6c6f77656420496e766573746f72732063616e6e6f74206265206c65737360008301527f207468616e2043757272656e7420686f6c6465727300000000000000000000006020830152604082019050919050565b6000612fe6600f83613346565b91507f4e6f742057686974656c697374656400000000000000000000000000000000006000830152602082019050919050565b6000613026601783613346565b91507f4e6f742057686974656c69737420417574686f726974790000000000000000006000830152602082019050919050565b6130628161341f565b82525050565b61307181613429565b82525050565b600060208201905061308c6000830184612c6a565b92915050565b60006020820190506130a76000830184612c79565b92915050565b600060208201905081810360008301526130c78184612c88565b905092915050565b600060208201905081810360008301526130e881612cc1565b9050919050565b6000602082019050818103600083015261310881612d01565b9050919050565b6000602082019050818103600083015261312881612d67565b9050919050565b6000602082019050818103600083015261314881612da7565b9050919050565b6000602082019050818103600083015261316881612de7565b9050919050565b6000602082019050818103600083015261318881612e4d565b9050919050565b600060208201905081810360008301526131a881612e8d565b9050919050565b600060208201905081810360008301526131c881612ecd565b9050919050565b600060208201905081810360008301526131e881612f33565b9050919050565b6000602082019050818103600083015261320881612f73565b9050919050565b6000602082019050818103600083015261322881612fd9565b9050919050565b6000602082019050818103600083015261324881613019565b9050919050565b60006020820190506132646000830184613059565b92915050565b600060408201905061327f6000830185613059565b61328c6020830184613059565b9392505050565b60006020820190506132a86000830184613068565b92915050565b6000604051905081810181811067ffffffffffffffff821117156132d5576132d4613551565b5b8060405250919050565b600067ffffffffffffffff8211156132fa576132f9613551565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561332657613325613551565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006133628261341f565b915061336d8361341f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156133a2576133a16134f3565b5b828201905092915050565b60006133b88261341f565b91506133c38361341f565b9250828210156133d6576133d56134f3565b5b828203905092915050565b60006133ec826133ff565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015613463578082015181840152602081019050613448565b83811115613472576000848401525b50505050565b6000600282049050600182168061349057607f821691505b602082108114156134a4576134a3613522565b5b50919050565b60006134b58261341f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156134e8576134e76134f3565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61359a816133e1565b81146135a557600080fd5b50565b6135b18161341f565b81146135bc57600080fd5b50565b6135c881613429565b81146135d357600080fd5b5056fea26469706673582212202e70b4589c4c4a9b7bea918f9c8e7b4fc51785c0457903345754bcb8e1baa3d164736f6c63430008000033"

  const [contractAddress, setContractAddress] = useState("");
  const [TotalSupplyOfToken, setTotalSupplyOfToken] = useState("");
  const [investorAddress, setInvestorAddress] = useState("");
  const [investorCurrentBalance, setInvestorCurrentBalance] = useState("");
  const [investorAddressToSendTokens, setInvestorAddressToSendTokens] = useState("");
  const [tokenAmountToSend, setTokenAmountToSend] = useState(0);
  const [investorAddressToWhitelist, setInvestorAddressToWhitelist] = useState("");



  const [initialSupply, setInitialSupply] = useState(0);
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");    
  const handleInitialSupplyChange = (event) => {
    const value = event.target.value;
    setInitialSupply(value);
  };
  const handleNameChange = (event) => {
    const value = event.target.value;
    setTokenName(value);
  };
  const handleSymbolChange = (event) => {
    const value = event.target.value;
    setTokenSymbol(value);
  };



  const [tokenAddress, setTokenAddress] = useState("");  
  const handleTokenAddressChange = (event) => {
    const value = event.target.value;
    setTokenAddress(value);
  };






  const handleConnectTokenButtonClick = async () => {
      setContractAddress (tokenAddress);
      const NameContract = new web3WalletConnection.eth.Contract(smartContractABI, tokenAddress);
      const bal = await NameContract.methods.totalSupply().call();
      setTotalSupplyOfToken(bal); 
  }

  const handleDisconnectToken = () => {
      setContractAddress("");
      setTokenAddress("");
  }

  const handleInvestorAddressChange = (event) => {
    const value = event.target.value;
    setInvestorAddress(value);
  }
  
  const handleInvestorAddressToSendTokenChange = (event) => {
    const value = event.target.value;
    setInvestorAddressToSendTokens(value);
  }

  const handleTokenAmountToSendChange = (event) => {
    const value = event.target.value;
    setTokenAmountToSend(value);
  }

  const handleInvestorAddressToWhitelistChange = (event) => {
    const value = event.target.value;
    setInvestorAddressToWhitelist(value);
  }
       


  const connectWeb3Wallet = async () => {
    connectWallet();
  };

  const disconnectWeb3Modal = async () => {
    disConnectWallet();
  };

  const deployContractTransaction = async () => {     
    const contract = new web3WalletConnection.eth.Contract(smartContractABI, contractAddress);

    // var gasPrice = await web3WalletConnection.eth.getGasPrice();

    await web3WalletConnection.eth.getTransactionCount(web3WalletCurrentAccount, 'pending').then(obj=> {

          const encodedParameters = web3WalletConnection.eth.abi.encodeParameters(
            ['uint256', 'string', 'string', 'uint256', 'uint256', 'string', 'string', 'string'],
            [initialSupply, tokenName, tokenSymbol, 0, 0, "", "", ""]
          ).slice(2);

          // creating raw tranaction
          const rawTransaction = {
              from: web3WalletCurrentAccount,
              //gasPrice: web3WalletConnection.utils.toHex(gasPrice),
              //gasLimit: 3984152,
              data: contractByteCode + encodedParameters,
              nonce: web3WalletConnection.utils.toHex( obj ),
          };

          web3WalletConnection.eth.sendTransaction( rawTransaction )
          .once('transactionHash', function(hash){ 
              alert( "Transaction is send with blockchain hash - " + hash); 
          })
          .once('receipt', function(receipt){ })
          .on('confirmation', function(confNumber, receipt){ 
              // this will trigger everytime a new block is created
          })
          .on('error', function(error){ 
              alert("Wallet is disconnected or user disconnected")
          })
          .then ( obj => {
              alert(  JSON.stringify( obj )  )
          });

    })

  }

  const getInvestorBalance = async () => {
      const NameContract = new web3WalletConnection.eth.Contract(smartContractABI, contractAddress);
      const bal = await NameContract.methods.balanceOf(investorAddress).call()
      setInvestorCurrentBalance(bal);
  }

  const sendTokensTransaction = async () => {     

      const contract = new web3WalletConnection.eth.Contract(smartContractABI, contractAddress);
      const methodABI = contract.methods.transfer( investorAddressToSendTokens, tokenAmountToSend).encodeABI();

      // Get list of accounts of the connected wallet
      const gasPrice = await web3WalletConnection.eth.getGasPrice();
      const estimateGas = await web3WalletConnection.eth.estimateGas({
          from: web3WalletCurrentAccount,
          to: contractAddress,
          data: methodABI
      }).catch(function(error){
        alert(  JSON.stringify( error )  );
      });


      await web3WalletConnection.eth.getTransactionCount(web3WalletCurrentAccount, 'pending').then(obj=> {

          // creating raw tranaction
          const rawTransaction = {
              from: web3WalletCurrentAccount,
              //gasPrice: web3WalletConnection.utils.toHex(gasPrice),
              //gasLimit: estimateGas + 10000,
              to: contractAddress,
              value: 0x0,
              data: methodABI,
              nonce: web3WalletConnection.utils.toHex( obj ),
          };

          web3WalletConnection.eth.sendTransaction( rawTransaction )
          .once('transactionHash', function(hash){ 
              alert(hash);
          })
          .once('receipt', function(receipt){ 
              alert( receipt );
          })
          .on('confirmation', function(confNumber, receipt){ 
              //alert("transaction done 123");
          })
          .on('error', function(error){ 
              alert("error")
          })
          .then ( obj => {
              alert("done")
          });

      })

  }

  const whitelstWalletTransaction = async () => {     

    const contract = new web3WalletConnection.eth.Contract(smartContractABI, contractAddress);
    const methodABI = contract.methods.modifyKYCData( investorAddressToWhitelist, 1, 1).encodeABI();

    // Get list of accounts of the connected wallet
    const gasPrice = await web3WalletConnection.eth.getGasPrice();
    const estimateGas = await web3WalletConnection.eth.estimateGas({
        from: web3WalletCurrentAccount,
        to: contractAddress,
        data: methodABI
    }).catch(function(error){
      alert(  JSON.stringify( error )  );
    });


    await web3WalletConnection.eth.getTransactionCount(web3WalletCurrentAccount, 'pending').then(obj=> {

        // creating raw tranaction
        const rawTransaction = {
            from: web3WalletCurrentAccount,
            //gasPrice: web3WalletConnection.utils.toHex(gasPrice),
            //gasLimit: estimateGas + 10000,
            to: contractAddress,
            value: 0x0,
            data: methodABI,
            nonce: web3WalletConnection.utils.toHex( obj ),
        };

        web3WalletConnection.eth.sendTransaction( rawTransaction )
        .once('transactionHash', function(hash){ 
            alert(hash);
        })
        .once('receipt', function(receipt){ 
            alert( receipt );
         })
        .on('confirmation', function(confNumber, receipt){ 
            //alert("transaction done");
         })
        .on('error', function(error){ 
            alert("error")
        })
        .then ( obj => {
            alert("done")
        });

    })

  }



  const signTransaction = async () => {
    alert( await web3WalletConnection.eth.personal.sign("hewf wef we f ewf", web3WalletCurrentAccount) )
  }

  const sendEther = async () => {
    var send = await web3WalletConnection.eth.sendTransaction({ from: web3WalletCurrentAccount, to: "0xAD3DF0f1c421002B8Eff81288146AF9bC692d13d", value: 1 });
    alert(send)
  }

  const getTotalBalance = async () => {     
    const NameContract = new web3WalletConnection.eth.Contract(smartContractABI, contractAddress);
    const bal = await NameContract.methods.totalSupply().call();
    alert(bal);    
  }




  return (
    <div className="App">
    <header className="App-header">

      {!isWeb3WalletConnected ? (

          <div>
              <img src={logo} className="App-logo" alt="logo" />
              <br />
              <button onClick={connectWeb3Wallet}>Connect Wallet</button>
          </div>
          
      ) : (

        <div>

                <p>Current Wallet Address  {web3WalletCurrentAccount} </p><br />
                <p>Current Chain ID {currentWeb3WalletConnectChainID} </p><br />
                <p>Current Chain Name {currentWeb3WalletConnectChainName}</p><br />

                <button onClick={disconnectWeb3Modal}>Disconnect Wallet</button>
                

                {!contractAddress ? (

                      <div>
                          <br /><br />&nbsp;
                          Deploy ERC1404 Token <br />
                          Token Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" value={tokenName} onChange={handleNameChange} />    
                          <br />
                          Token Symbol &nbsp;&nbsp; <input type="text" value={tokenSymbol} onChange={handleSymbolChange} />            
                          <br />        
                          Initial Supply &nbsp;&nbsp;&nbsp;&nbsp; <input type="text" value={initialSupply} onChange={handleInitialSupplyChange} />                    
                          <br />                
                          <button onClick={deployContractTransaction}>Deploy ERC1404 Smart Contract</button> 
                          <br /><br /><br />
                          Connect with existing token <br />
                          Token Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" value={tokenAddress} onChange={handleTokenAddressChange} /> 
                          &nbsp; 
                          <button onClick={handleConnectTokenButtonClick}>Connect Token</button> 
                      </div>

                  ) : (
                    
                    <div>
                        <br />
                        Currently Connected Token <br />
                        {contractAddress} <br />
                        <button onClick={handleDisconnectToken}>Disconnect Token</button> 
                        <br />
                        <br />
                        Total Supply of Tokens : {TotalSupplyOfToken}  
                        <br /><br /><hr />
                        <br />           
                        Get Investor Balance <br /><br />
                        Address  <input type="text" value={investorAddress} onChange={handleInvestorAddressChange} /> 
                        &nbsp; <button onClick={getInvestorBalance}>Get Balance</button>  
                        <br /><br /> {investorCurrentBalance}
                        <br /><br /><hr />
                        
                        <br />
                        Whitelist Investor Address <br /><br />
                        Address  <input type="text" value={investorAddressToWhitelist} onChange={handleInvestorAddressToWhitelistChange} /> 
                        &nbsp;
                        <button onClick={whitelstWalletTransaction}>Whitelist</button>    
                        <br /><br /><hr />
                        
                        <br />
                        Send Tokens To investor <br /><br />
                        Address <input type="text" value={investorAddressToSendTokens} onChange={handleInvestorAddressToSendTokenChange} /> <br />
                        Tokens &nbsp;&nbsp; <input type="text" value={tokenAmountToSend} onChange={handleTokenAmountToSendChange} /> <br />
                        <button onClick={sendTokensTransaction}>Send Tokens</button>
                        <br /><br /><br />
                    </div>

                  )
                }

        </div>

      )}
    </header>
  </div>
  );





}

export default App;
