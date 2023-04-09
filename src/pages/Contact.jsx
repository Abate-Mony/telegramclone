import {useNavigate} from "react-router-dom"
import { MdArrowBack } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'
import Icons from "../Constants/listIcons"
import users from "../Constants/User"
import {Contact as CNT} from '../components'
const Contact = () => {
const navigate=useNavigate()
const navigateToPreviousPage=()=>navigate(-1)
  return (
    <div className="max-w-md mx-auto select-none bg-white dark:bg-slate-900 min-h-screen">
    
    <div className="top min-h-[60px] sticky top-0 left-0 text-white bg-blue-400 dark:bg-slate-900 flex items-center px-2">
    <div className="flex-none w-[40px] h-[40px] flex items-center justify-center rounded-full
    hover:bg-black/25 duration-300 ">
    <MdArrowBack size={25} color="white" onClick={navigateToPreviousPage} />
    </div>
    <div className="flex-1">
    
    <h2 className="text-xl capitalize mx-4  ">new message</h2>
    
    </div>
    <div className="flex-none flex gap-2">
    <BiSearch size={20} />
    <BiSearch size={20} />
    </div>
    </div>
    {Icons.map((_, idx) => {
            return (
              <div className="px-4 flex gap-4 py-1  transition-all dark:bg-slate-400 duration-500 select-none
          hover:bg-slate-200" key={idx}>
          {_.icon}
                <h3 className="text-[16px] text-black dark:text-white">{_.name} </h3>
              </div>

            )

          })}
          <div className="bg-slate-300 px-4 py-1 text-slate-400 font-[400]">sorted by last seen time</div>
   {
   
   users.map((user)=><CNT user={user}/>)}
    </div>
  )
}

export default Contact