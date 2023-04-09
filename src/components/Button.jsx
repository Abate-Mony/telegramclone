import {FaPen} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Button = () => {
const navigate=useNavigate()
const gotoContactsPage =()=>navigate("/contacts")
  return (
    <div className="fixed bottom-3 right-5 bg-blue-500
    flex items-center  w-[55px] h-[55px] rounded-full  justify-center " onClick={gotoContactsPage}><FaPen size={20} color="white"/></div>
  )
}

export default Button