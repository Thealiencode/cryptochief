import { BsShieldFillCheck } from "react-icons/bs"
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'
import ServivesCard from "./ServivesCard"
import fast from '../images/fast.svg'
import join from '../images/join.svg'
import security from '../images/security.svg'

const Services = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start ">
          <h1 className="text-white text-3xl sm:text-5xl py-2 underline">Services that we Continue to improve
          </h1>
        </div>
      </div>
      <div className="flex flex-col justiify-start items-center">
        <ServivesCard 
          color="bg-[#2952e3]"
          title="security Guranteed"
          icon={fast}
          subtitle="security is guranteed. we always maintain privacy and the quality of out products"
        />
        
        <ServivesCard 
          color="bg-[#8945f8]"
          title="Best Exchange Rate"
          icon={join}
          subtitle="provides the simplest yet most secure way to connect to blockchain-based applications. You are always in control when interacting on the new decentralized web."
        />

        <ServivesCard 
          color="bg-[#F84550]"
          title="Fastest Transactions"
          icon={security}
          subtitle="security is guranteed. we always maintain privacy and the quality of out products"
        />
      </div>
    </div>
  )
}

export default Services