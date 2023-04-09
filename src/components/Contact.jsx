import { useNavigate } from "react-router-dom"
const Contact = ({user}) => {
const navigate=useNavigate()

const navigateToChatPage=(id)=>navigate(`/chat/${id}`)
  return (
    <div className="flex bg-transparent py-2 px-4" onClick={()=>navigateToChatPage(user?.id)}>
    
    
    <div className="flex-none h-[50px] w-[50px] flex items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-orange-400" >
                        {user?.imgurl ? <div className="image-container" >
                            <img className='h-full w-full object-cover'
                                src={user?.imgurl}
                                alt="user" />
                        </div> : <h3 className="text-lg uppercase whitespace-nowrap
                        overflow-hidden line-clamp-1">{user?.name?.slice(0, 1)}   </h3>

                        }
    

                    </div>
                    <div className="flex-1 pl-4 pb-1 capitalize overflow-hidden " style={{ flex: "1" }}>
                    <div className="flex  justify-between leading-3">
                        <h3 className="text-lg font-manrope line-clamp-1 text-black dark:text-white max-w-[200px] overflow-hidden">{user?.name} </h3>
                        {/* <span className="text-sm text-slate-500 "> {user?.lastmessage?.time}</span> */}
                    </div>
                    {/* bottm text box */}
                    <div className="flex  justify-between leading-3">
                        <h3 className="text-sm text-slate-500 line-clamp-1" 
                        style={{ flex: "1" }}> last seen at {user?.lastmessage?.time}</h3>
                        {/* <span className="text-sm text-white w-[20px]
    h-[20px] bg-blue-500 rounded-full flex items-center justify-center " >{user.lastmessage.msgcnt}</span> */}
                    </div>
                    </div>
    
    
    </div>
  )
}

export default Contact