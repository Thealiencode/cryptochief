import React, { useContext, useState } from "react"
import { TransactionContext } from '../context/TransactionContext'
import dummyData from "../utils/dummyData"
import { shortenAddress } from "../utils/shortenAddress"
import TransactionCard from "./TransactionCard"

const Transactions = () => {
  const  { connectedAccount, transactions } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions"
    >
      <div className="flex flex-col md:p-12 py-12 px-4">
        {/* lastest trnasations */}
        {connectedAccount ? (
          <h3 className="text-white text-3xl text-center my-2">Lastest Transactions</h3>

        ) : 
          <h3 className="text-white text-3xl text-center my-2">Connect wallet to see lastest transactions</h3>
        }

        <div className="flex flex-wrap justify-center items-center mt-10">

          {transactions.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>


      </div>
    </div>
  )
}

export default Transactions