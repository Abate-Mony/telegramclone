import { BsFillPersonFill } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { IoMdCall, IoMdSettings } from 'react-icons/io'
import { BiMessageAlt } from 'react-icons/bi'


const Icons = [
    {

        icon: <FiUsers size={25}  className='text-slate-300'/>
        , name: "New Group"
    },
    {

        icon: <BsFillPersonFill size={25}  className='text-slate-300'/>
        , name: "Contacts"
    },
    {

        icon: <IoMdCall size={25}  className='text-slate-300'/>
        , name: "Calls"
    },
    {

        icon: <IoMdSettings size={25}  className='text-slate-300'/>
        , name: "New Group"
    }
]
export default Icons