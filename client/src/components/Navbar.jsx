import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import { useState } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { useContext } from 'react'
TransactionContext
 
const NavbarItem = ({title, classProps}) => <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { connectedAccount, connectWallet } = useContext(TransactionContext)
  return (

    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial flex-initial justify-center items-center">
        <h1 className='navbar-brand text-white'>CRYPTOCHIEF</h1>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
      {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (<NavbarItem key={item + index} title={item} />))}
      {!connectedAccount && <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] hover:text-[#23233e]" onClick={connectWallet}>Connect Wallet</li>}
      </ul>

      <div className="flex relative">
        {toggleMenu 
        ? <AiOutlineClose fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToggleMenu(false)}/>
        : <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <ul className='z-10 fixed top-0 right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
            <li className="text-xl w-full my-2"><AiOutlineClose fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(false)}/></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (<NavbarItem classProps="my-2 text-lg" key={item + index} title={item} />))}

          </ul>
        )}
        


      </div>
    </nav>
  )
}

export default Navbar