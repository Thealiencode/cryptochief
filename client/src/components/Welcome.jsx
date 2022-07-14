import { useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import EtherCard from "./EtherCard";
import Input from "./Input";
import Loader from "./Loader";
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
import React, { useContext } from "react";

const Welcome = () => {
  const { connectWallet, connectedAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);



  const handleSubmit = (e) => {
    const   { addressTo, amount, keyword, message  } = formData;

    e.preventDefault();

    if(!addressTo || !amount || !keyword || !message) return;

    sendTransaction()
  }  

  return (
    <div className="flex w-full justify-center items-center mt-11">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-white text-3xl sm:text-5xl py-1 hero-text">
            Send Crypto <br /> accross the globe
          </h1>
          <p className="text-left font-bold mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell crypto currencies easily on cryptocheif
          </p>
          {!connectedAccount && <button type="button" className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd text-white text-base font-semibold" onClick={connectWallet}>Connect Wallet</button>}


        </div>
          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <EtherCard />

            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
              <Input placeholder="Address to" name="addressTo" type="text" handleChange={handleChange} />
              <Input placeholder="Amount of (ETH)" name="amount"  type="number" handleChange={handleChange} />
              <Input placeholder="Keyword (GIF)" name="keyword"  type="text" handleChange={handleChange} />
              <Input placeholder="Enter Message" name="message"  type="text" handleChange={handleChange} />

              <div className="h-[1px] w-full bg-gray-400 my-2" />

              {isLoading ? (
                <Loader />
              ) : (
                <button type="button" onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer">Send Now</button>
              )}

            </div>
          </div>
      </div> 

    </div>
  )
}

export default Welcome 