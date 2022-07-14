import { AiFillPlayCircle } from "react-icons/ai"
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { useContext } from "react"
import { TransactionContext } from "../context/TransactionContext"
import { shortenAddress } from "../utils/shortenAddress"

const EtherCard = () => {
    const { connectedAccount } = useContext(TransactionContext)
  return (
    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism ">
        <div className="flex justify-between flex-col w-full h-100">
            <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff"/>
            </div>
            <div>
                <p className="text-white font-light text-sm mt-3">
                    
                    {connectedAccount && shortenAddress(connectedAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                   Ethereum Address
                </p>
            </div>
        </div>
    </div>
  )
}

export default EtherCard