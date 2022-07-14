import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractAddress, contractABI } from '../utils/Constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);


    return transactionContract
}


export const TransactionProvider = ({ children }) => {
    const [connectedAccount, setConnectedAccount] = useState('');
    const [formData, setFormData] = useState({ addressTo: '', 'amount': '', 'keyword': '', 'message': '' });
    const [isLoading, setIsLoading] = useState(false)
    const [transactionCount, setTranactionCount] = useState(localStorage.getItem("transactionCount"))
    const [transactions, setTransactions] = useState([])

    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name] : e.target.value }))
    }

    const getAllTransactions =  async () => {
        try {
            if(!ethereum) return alert("Please install metamask");
            
            const TransactionContract =  getEthereumContract();
            const availableTransactions = await TransactionContract.getAllTransactions();

            const structuredTransactions = availableTransactions.map(transaction => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex, 16) / (10 ** 18)

            }))

            setTransactions(structuredTransactions);
        } catch (error) {
            console.log(error)
        }
    }


    const checkIfWalletIsConneted =  async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts' })
            if(accounts.length){
                setConnectedAccount(accounts[0])

                getAllTransactions()
                // getAllTransactions();
            } else{
                console.log('no accounts found')

            }
        } catch (error) {
        console.log(error)

        throw new Error('No Ethereun Object')

        }
    }

    const checkifTransactionsExist = async () => {
        try {
            const TransactionContract =  getEthereumContract();
            const transactionCount = await TransactionContract.getAllTransactionsCount()

            window.localStorage.setItem("transactionCount", transactionCount)

            
        } catch (error) {
            throw new Error('No Ethereun Object')
            
        }
    }
    

    const connectWallet = async() => {
        try{
        if(!ethereum) return alert("Please install metamask");
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

        setConnectedAccount(accounts[0]);

        }catch(error){
            console.log(error)

            throw new Error('No Ethereun Object')
        }
    }

    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");
                
            // get form data
            const   { addressTo, amount, keyword, message  } = formData;

            const TransactionContract =  getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount)
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: connectedAccount,
                    to: addressTo,
                    gas: '0x5208', // 2100 gwei
                    value: parsedAmount._hex
                }]
            });

            // store tnx
            const transactionHash = await TransactionContract.addTOBlockChain(addressTo, parsedAmount, message, keyword)
            setIsLoading(true)
            console.log(`loading - ${transactionHash.hash}`)

            await transactionHash.wait();

            setIsLoading(false)
            console.log(`Success - ${transactionHash.hash}`)

            const transactionCount = await TransactionContract.getAllTransactionsCount()

            setTranactionCount(transactionCount.toNumber())
            getAllTransactions()

        } catch (error) {
            console.log(error)

            throw new Error('No Ethereun Object')
        }
    }

    useEffect(() => {
        checkIfWalletIsConneted();
        checkifTransactionsExist();
    }, []);


    return (
        <TransactionContext.Provider value={{ connectWallet, connectedAccount, formData, handleChange, sendTransaction, isLoading, transactions }}>
            {children}
        </TransactionContext.Provider>
    );
}