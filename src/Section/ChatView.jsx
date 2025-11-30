import { BsSearch } from 'react-icons/bs'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { IoMdCall } from 'react-icons/io'
import Message from '../components/Message'
import InputButton from '../Section/InputButton'
import users from '../Constants/User'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BiArrowBack, BiArrowToLeft } from 'react-icons/bi'
const ChatView = () => {
    const id=useParams().id;
    // CSSFontFeatureValuesRule
    const currentUser=users.find((user)=>user.id===parseInt(id));
    const selected=[]; // Dummy selected array for illustration
    const navigateBack=useNavigate()
    
  return (
     <div className="flex-1 flex flex-col h-screen w-full" style={{
                    backgroundColor: '#E5DDD5',
                    backgroundImage: 'url(/telegram-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    
                    <div className="chattop__navbar flex h-[56px] bg-white shadow-sm w-full
            text-gray-800 gap-3 items-center px-3 z-40">
<span onClick={()=>navigateBack(-1)}>
                            <BiArrowBack  className='' size={24} color="" /> 

</span>
                        <div className="flex-none h-[42px] w-[42px] flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 cursor-pointer" 
                        // onClick={handleState}
                        >
                            {currentUser?.imgurl ? <div className="image-container" >
                                <img className='h-full w-full object-cover rounded-full'
                                    src={currentUser?.imgurl}
                                    alt="user" />
                            </div> : <h3 className="text-base font-medium text-white uppercase whitespace-nowrap
                        overflow-hidden line-clamp-1">{currentUser?.name?.slice(0, 1)}</h3>

                            }


                        </div>
                        <div className="flex flex-col flex-1 overflow-hidden cursor-pointer" style={{ flex: 1 }}
                        //  onClick={handleState}
                        >

                            <h2 className="text-[15px] font-medium whitespace-nowrap overflow-hidden w-full text-gray-900">{currentUser?.name}</h2>
                            <p className="text-gray-500 leading-4 text-[13px]">{currentUser?.lastseen}</p>
                        </div>
                        <div className="flex justify-between items-center gap-1 " style={{ flex: "none" }}>
                            <div className="icon cursor-pointer hover:bg-gray-100 rounded-full p-2 transition-colors"><BsSearch size={20} color="#707579" /></div>
                            <div className="icon cursor-pointer hover:bg-gray-100 rounded-full p-2 transition-colors"><IoMdCall size={20} color="#707579" /></div>
                            <div className="icon cursor-pointer hover:bg-gray-100 rounded-full p-2 transition-colors"><HiOutlineDotsVertical size={20} color="#707579" 
                            // onClick={(e) => [changeClassList(), e.stopPropagation()]}
                             /></div>
                        </div>
                    </div>
                    <div className="chat__container flex-1 pb-[5rem] overflow-auto custom-scrollbar">
                        <div className="max-w-3xl mx-auto px-4">
                            {currentUser?.textmessages?.map((message, index) => {

                                return (
                                    <div className={`${selected.includes(index) ? "bg-blue-200" : "bg-transparent"}`} key={index}
                                    // onTouchStart={() => handleTouchStart(index)} onTouchEnd={handleTouchEnd}
                                    >
                                        <div className={`icon text-lg ${selected.includes(index) ? "block" : "hidden"}`}>0</div>
                                        <Message message={message} />
                                    </div>
                                )


                            })}
                        </div>

                    </div>
<InputButton/>
                </div>

  )
}

export default ChatView