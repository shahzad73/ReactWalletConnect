import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { useState } from "react";


const useWalletConnect = (appname, theme, chainid, rpcURLString) => {

    const [isWeb3WalletConnected, setISWeb3WalletConnected] = useState(false);
    const [web3WalletConnection, setWeb3WalletConnection] = useState(null);    
    const [web3WalletCurrentAccount, setWeb3WalletCurrentAccount] = useState("");
    const [currentWeb3WalletConnectChainID, setCurrentWeb3WalletConnectChainID] = useState(null);
    const [currentWeb3WalletConnectChainName, setCurrentWeb3WalletConnectChainName] = useState(null);    



  /*
      these are different options of web3WalletConnection options below
      
      bridge: A string representing the URL of the WalletConnect bridge server. The bridge server is responsible for creating the session between the dApp and the user's wallet.

      qrcode: A boolean value that determines whether to display a QR code on the dApp for the user to scan. If set to true, a QR code will be displayed on the dApp, otherwise the user will need to manually enter the session key.

      infuraId: A string representing the Infura project ID. This option is used when connecting to the Ethereum node using Infura.

      rpcUrl: A string representing the Ethereum node's JSON-RPC URL. This option is used when connecting to a custom Ethereum node.

      wsUrl: A string representing the Ethereum node's WebSocket URL. This option is used when connecting to a custom Ethereum node using WebSockets.

      pollingInterval: An integer value representing the polling interval (in milliseconds) when using the Httpweb3WalletConnection.

      gasPrice : A number that represents the gas price for the transaction in Gwei.

      chainId: A number that represents the chainId of the network.

      accounts : An array of pre-approved addresses that the dApp can interact with.



      const web3WalletConnection = new WalletConnectweb3WalletConnection({
        bridge: "https://bridge.walletconnect.org",
        qrcode: true,
        infuraId: "your_infura_id",
        autoConnect: true,
        blockRefreshInterval: 0,
        alchemyId: "your_alchemy_api_key"
      });      
  */


    const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            //infuraId: "t4I2C_2QN-uTLjmmUpflVG4Oc5XvLddg", // required
            rpc: {
              1: rpcURLString,
              3: rpcURLString,
              5: rpcURLString
            },            
            qrcode: true,
            appName: appname, // Required
          }
        },
        coinbasewallet: {
          package: CoinbaseWalletSDK, // Required
          options: {
            appName: appname, // Required
            alchemyId: "t4I2C_2QN-uTLjmmUpflVG4Oc5XvLddg", // Required
            chainId: chainid, //4 for Rinkeby, 1 for mainnet (default)
          },
        },    
    }  
    
    const web3Modal = new Web3Modal({
        //network: network,
        theme: theme, // optional, 'dark' / 'light',
        /*theme: {
          background: "rgb(39, 49, 56)",
          main: "rgb(199, 199, 199)",
          secondary: "rgb(136, 136, 136)",
          border: "rgba(195, 195, 195, 0.14)",
          hover: "rgb(16, 26, 32)"
        },*/
        cacheProvider: false, // optional
        providerOptions // required
    });
    
    const connectWallet = async () => {

      try {

        const web3Provider = await web3Modal.connect();
        web3Provider.on("accountsChanged", async (accounts) => {
            setWeb3WalletCurrentAccount( accounts[0] );
        });
        web3Provider.on("disconnect", () => {
            setISWeb3WalletConnected(false);
            setWeb3WalletCurrentAccount( "" );
        });
        web3Provider.on("chainChanged", async (chainId) => {
          setCurrentWeb3WalletConnectChainID ( parseInt(chainId) );
          setCurrentWeb3WalletConnectChainName(  getNetworkNameBasedOnChainID ( parseInt(chainId) ) );
        });
        web3Provider.on("networkChanged", (chainId) => {
            setCurrentWeb3WalletConnectChainID ( parseInt(chainId) );
            setCurrentWeb3WalletConnectChainName(  getNetworkNameBasedOnChainID ( parseInt(chainId) ) );
        });      


        const web3 = new Web3(web3Provider);
        setWeb3WalletConnection(web3);
        setISWeb3WalletConnected(true);

        var accounts  = await web3.eth.getAccounts(); // get all connected accounts
        setWeb3WalletCurrentAccount( accounts[0] ); // get the primary account
        setCurrentWeb3WalletConnectChainName(  getNetworkNameBasedOnChainID (  parseInt(await web3.eth.net.getId())) );
        setCurrentWeb3WalletConnectChainID ( parseInt(await web3.eth.net.getId()) );

      } catch (error) {
         
      }
    
    }

    const disConnectWallet = async () => {
      await web3Modal.clearCachedProvider();
      window.localStorage.clear();
      setISWeb3WalletConnected(false);
      setWeb3WalletCurrentAccount("");
    }


    return [connectWallet, 
      disConnectWallet, 
      isWeb3WalletConnected, 
      web3WalletConnection, 
      web3WalletCurrentAccount,
      currentWeb3WalletConnectChainID,
      currentWeb3WalletConnectChainName
    ];





    function getNetworkNameBasedOnChainID(chainId) {

      let networkName = "";

      switch(chainId) {
        case 1:
            networkName = 'mainnet';
            break;
        case 3:
            networkName = 'ropsten';
            break;
        case 4:
            networkName = 'rinkeby';
            break;
        case 5:
            networkName = 'goerli';
            break;
        case 42:
            networkName = 'kovan';
            break;
        default:
            networkName = 'unknown';
      }    

      return networkName;

    }

}

export default useWalletConnect;

