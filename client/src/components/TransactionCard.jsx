import React from 'react'
import useFetch from '../hooks/useFetch'
import { shortenAddress } from '../utils/shortenAddress'

const TransactionCard = ({  url, keyword, message, timestamp, addressFrom, amount, addressTo }) => {
    const gifUrl = useFetch({ keyword })

  return (
    <div className='bg-[#181918] m-4 flex flex-1
     2xl:min-w-[450px]    
     2xl:max-w-[500px]
     sm:min-w-[270px]    
     sm:max-w-[3000px]    
     flex-col p-3 rounded-md hover:shadow-2xl
    '>
        <div className="flex flex-col items-center w-full mt-3 ">
            <div className="w-full mb-6 p-2">
                <a href={`https://rinkeby.etherscan.io/address/${addressFrom}`} target="__blank" rel='noopener noreferrer'>
                    <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
                </a>
                <a href={`https://rinkeby.etherscan.io/address/${addressTo}`} target="__blank" rel='noopener noreferrer'>
                    <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
                </a>
                <p className='text-white text-base'>Amount: {amount}</p>

                {message && (
                    <>
                    <br />
                    <p className='text-white text-base'>Message: {message}</p>
                    </>
                )}
            </div>
                <img src={gifUrl || url} alt="gif" className='w-full h-64 2xl:h-96 shadow-lg object-cover' />

                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className='text-[#37C7da] font-bold'>{timestamp}</p>
                </div>
        </div>
    </div>
  )
}

export default TransactionCard