import logo from './logo.svg';
import './App.css';

import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useState, } from "react";
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Web3 from "web3";
//import { convertUtf8ToHex } from "@walletconnect/utils";


function App() {

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
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenOwner",
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
          "name": "tokens",
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
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
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
      "name": "getOwner",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "addWhitelistAddress",
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
      "name": "removeWhitelistAddress",
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
      "name": "isInvestorWhiteListed",
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
      "stateMutability": "pure",
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
      "outputs": [],
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
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
      "outputs": [],
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
      "name": "mint",
      "outputs": [],
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
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  const contractAddress = "0xaB719f67AAD0B17883616489967dfacd4D5E7851";


  const providerOptions = {
    binancechainwallet: {
      package: true,
    },
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "fe41724da6f24b76a782f376b2698ee8" // required
      },
      display: {
        logo: "data:image/gif;base64,INSERT_BASE64_STRING",
        name: "Mobile Wallet Connect",
        description: "Scan qrcode with your mobile wallet"
      },      
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "Coinbase", // Required
        infuraId: "fe41724da6f24b76a782f376b2698ee8", // Required
        chainId: 4, //4 for Rinkeby, 1 for mainnet (default)
      },
    },    
  }  


  const web3Modal = new Web3Modal({
    network: "goerli",
    //theme: "light", // optional, 'dark' / 'light',
    theme: {
      background: "rgb(39, 49, 56)",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      border: "rgba(195, 195, 195, 0.14)",
      hover: "rgb(16, 26, 32)"
    },    
    cacheProvider: false, // optional
    providerOptions // required
  });




  const [connectedAccount, setConnectedAccount] = useState("");
  const [provider, setProvider] = useState();

  const connectWeb3Wallet = async () => {
    try {
      const web3Provider = await web3Modal.connect();
      web3Provider.on("accountsChanged", async (accounts) => {
          setConnectedAccount( accounts[0] );  
      });
      web3Provider.on("disconnect", () => {
        setConnectedAccount("")
      });
      web3Provider.on("chainChanged", (chainId) => {
          alert(chainId)
      });
      web3Provider.on("networkChanged", (networkId) => {
          alert(networkId)
      });      


      const web3 = new Web3(web3Provider);
      setProvider(web3);
      
      var accounts  = await web3.eth.getAccounts(); // get all connected accounts
      setConnectedAccount( accounts[0] ); // get the primary account


    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    window.localStorage.clear();
    setConnectedAccount("");
    setProvider(null);
  };




  const signTransaction = async () => {

    alert( await provider.eth.personal.sign("hewf wef we f ewf", connectedAccount) )

  }


  const sendEther = async () => {
    var send = await provider.eth.sendTransaction({ from: connectedAccount, to: "0xAD3DF0f1c421002B8Eff81288146AF9bC692d13d", value: 1 });
    alert(send)
  }


  const getInvestorBalance = async () => {
      const NameContract = new provider.eth.Contract(smartContractABI, contractAddress);
      const bal = await NameContract.methods.balanceOf("0xad3df0f1c421002b8eff81288146af9bc692d13d").call()
      alert(bal);
  }


  const getTotalBalance = async () => {     
    const NameContract = new provider.eth.Contract(smartContractABI, contractAddress);
    const bal = await NameContract.methods.totalSupply().call();
    alert(bal);    
  }


  const sendTokensTransaction = async () => {     

    const contract = new provider.eth.Contract(smartContractABI, contractAddress);
    const methodABI = contract.methods.transfer( "0x3cb6df9845af79ab7c2af9530da0b046bacb6cf9", "50000000000000000000").encodeABI();

    // Get list of accounts of the connected wallet
    const accounts = await provider.eth.getAccounts();
    const gasPrice = await provider.eth.getGasPrice();
    const estimateGas = await provider.eth.estimateGas({
        from: connectedAccount,
        to: contractAddress,
        data: methodABI
    });

    await provider.eth.getTransactionCount(connectedAccount, 'pending').then(obj=> {

        // creating raw tranaction
        const rawTransaction = {
            from: connectedAccount,
            gasPrice: provider.utils.toHex(gasPrice),
            gasLimit: estimateGas + 10000,
            to: contractAddress,
            value: 0x0,
            data: methodABI,
            nonce: provider.utils.toHex( obj ),
        };


        provider.eth.sendTransaction( rawTransaction )
        .once('transactionHash', function(hash){ 
            alert(hash);
        })
        .once('receipt', function(receipt){ })
        .on('confirmation', function(confNumber, receipt){  })
        .on('error', function(error){ 
            alert("error")
        })
        .then ( obj => {
            alert("done")
        });

    })

  }



  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <br />
      {connectedAccount && <p>Connected to ${connectedAccount}</p>}
      {!connectedAccount ? (
        <button onClick={connectWeb3Wallet}>Connect Wallet</button>
      ) : (
        <div>
            <button onClick={disconnectWeb3Modal}>Disconnect</button>
            &nbsp;
            <button onClick={signTransaction}>Sign</button>  
            &nbsp;
            <button onClick={sendEther}>Send Ether</button>                        
            <br /><br />
            <button onClick={getTotalBalance}>Get Total Supply</button>  
             &nbsp;
            <button onClick={getInvestorBalance}>Get Investor Supply</button>  
            &nbsp;
            <button onClick={sendTokensTransaction}>Send Tokens</button>                                                
        </div>
      )}
    </header>
  </div>
  );





}

export default App;
