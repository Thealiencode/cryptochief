
const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4'>
      <div className="w-full flex sm:flex-row flex-col justify-between item-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
        <h1 className='navbar-brand text-white'>CRYPTOCHIEF</h1>

        </div>
        <div className="flex flex-1 justfy-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className='text-white text-base mx-2 cursor-pointer'>Market</p>
          <p className='text-white text-base mx-2 cursor-pointer'>Exchange</p>
          <p className='text-white text-base mx-2 cursor-pointer'>Turtorials</p>
          <p className='text-white text-base mx-2 cursor-pointer'>Wallets</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className='text-white text-sm  text-center'>Come Join us</p>
        <p className='text-white text-sm  text-center'>goldmos1@gmail.com</p>
      </div >
      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5' />

      <div className="sm:w-[90%]  w-full flex justify-between items-center mt-3">
        <p className='text-white text-sm  text-center'>@codechief 2022</p>
        <p className='text-white text-sm  text-center'>All rights reserved</p>

      </div>
    </div>
  )
}

export default Footer