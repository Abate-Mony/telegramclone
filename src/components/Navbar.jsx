import { AiOutlineMenu } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux/es/exports'
import {SearchOverlay} from './'

const Navbar = () => {
const dispatch =useDispatch()
const toggleSideBar=()=>dispatch({type:"side-bar"})
  return (
    <div className="fixed w-full left-0 right-0 top-0 shadow-lg">
    {/* <SearchOverlay/> */}
      <div className="flex items-center h-[60px] gap-4 text-white bg-blue-400 dark:bg-slate-600 container"
      >
        <div className="flex-none flex items-center 
      justify-center  w-[40px] h-[40px] rounded-full
      hover:bg-slate-300 transition-bg">
          <AiOutlineMenu size={20} onClick={toggleSideBar} />
        </div>
        <h1 className="text-2xl font-manrope" style={{ flex: "1" }}>Telegram</h1>
        <div className="flex-none flex items-center 
      justify-center  w-[40px] h-[40px] rounded-full
      hover:bg-slate-300 transition-bg">
          <BiSearch size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar