import { AiOutlineMenu } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux/es/exports'
import {SearchOverlay} from './'

const Navbar = () => {
const dispatch =useDispatch()
const toggleSideBar=()=>dispatch({type:"side-bar"})
  return (
    <div className="fixed w-full left-0 right-0 top-0 shadow-sm bg-white dark:bg-slate-800 z-30">
    {/* <SearchOverlay/> */}
      <div className="flex items-center h-[60px] gap-4 text-gray-800 dark:text-white container px-4"
      >
        <div className="flex-none flex items-center 
      justify-center w-[40px] h-[40px] rounded-full
      hover:bg-gray-100 dark:hover:bg-slate-700 transition-bg cursor-pointer">
          <AiOutlineMenu size={22} onClick={toggleSideBar} />
        </div>
        <h1 className="text-xl font-medium" style={{ flex: "1" }}>Telegram</h1>
        <div className="flex-none flex items-center 
      justify-center w-[40px] h-[40px] rounded-full
      hover:bg-gray-100 dark:hover:bg-slate-700 transition-bg cursor-pointer">
          <BiSearch size={22} />
        </div>
      </div>
    </div>
  )
}

export default Navbar