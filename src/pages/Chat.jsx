import { MdArrowBack } from 'react-icons/md'
import { useNavigate ,useParams} from "react-router-dom"
import { Send, Recieve } from '../components'
import { BsEmojiSmile, BsMic } from 'react-icons/bs'
import { IoIosAttach, IoMdCall } from 'react-icons/io'
import { CiInstagram } from 'react-icons/ci'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { BsChevronRight } from 'react-icons/bs'
import { useState, useEffect, useRef } from 'react'
import users from '../Constants/User'
const Chat = () => {
const id=useParams().id
    const _ref = useRef(null)
    const _opt=useRef(null)
    const [scale, setScale] = useState(2)
    const [chng, setChng] = useState(true)
    const navigate = useNavigate()
    const [_toggleMic, _set_M] = useState(true)
    const [opt, setOpt] = useState(false)
    const [tp, setTp] = useState(150)
    const [top, setTop] = useState(60)
    const [left, setLeft] = useState(30)
    const [bol, setBol] = useState(false)
    const [currentUser,setCurrentUser]=useState("")
    const handleState = () => {
        setChng(!chng)
        window.history.pushState({}, window.location.href, null)
    }
    useEffect(() => {
        window.addEventListener("popstate", () => {
            if (!chng) {
                setChng(true)
            }
        })
        return () => {
        }
    }, [chng]);
    useEffect(() => {

const baseuser=users.find(user=>user.id==id)
setCurrentUser(baseuser)

        if (chng) {
            window.scrollTo(0, 50)
            window.addEventListener("scroll", () => {
                const y = window.pageYOffset
                const value = 300 - y
                const _value = 200 - y
                setTp(value)
                const _x = 30
                if (value > 0) {
                    const _percent = (_value / 200) * _x
                    setTop((_value / 200) * 60)
                    setScale((_value / 200) * 0.6 + 1)
                    setLeft(_percent)
                }
                if (y > 100) {

                }
            })

        }

    }, [])

    return (

        <>{chng ?
            <div className='select-none' onClick={() => opt && setOpt(false)}>
                <div className="chattop__navbar flex  h-[60px] bg-slate-800 shadow fixed top-0 left-0 
            text-white container mx-auto gap-4 items-center ">
                    <div className={`absolute right-3 top-2 bg-white shadow-2xl flex flex-col  overflow-hidden
                rounded-lg text-black  transition-all duration-500 
                ${opt ? "max-h-[1000px] max-w-[1000px] select-none  py-2" : "max-h-[0px]"} `}
                onClick={e => e.stopPropagation()} ref={_opt}>
                        <div className="flex gap-2 items-center px-2 hover:bg-slate-300 py-2">
                            <IoMdCall size={20} />
                            <h3 className="text-lg ">clear history </h3>
                            <BsChevronRight size={20} color="black" />
                        </div>
                        <div className="flex gap-2 items-center px-2 hover:bg-slate-300 py-2">
                            <IoMdCall size={20} />
                            <h3 className="text-lg ">clear history {id} {id?"id ispresent ":" no id"} </h3>
                        </div>
                        <div className="flex gap-2 items-center px-2 hover:bg-slate-300 py-2">
                            <IoMdCall size={20} />
                            <h3 className="text-lg ">clear history </h3>
                        </div>
                        <div className="flex gap-2 items-center px-2 hover:bg-slate-300 py-2">
                            <IoMdCall size={20} />
                            <h3 className="text-lg ">clear history </h3>
                        </div>
                    </div>
                    <div className="flex-none h-[40px] w-[40px] flex items-center justify-center" >
                        <MdArrowBack size={25} color="white" onClick={() => navigate(-1)} />
                    </div>
                    <div className="flex-none h-[40px] w-[40px] flex items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-orange-400" >
                    {currentUser?.imgurl?  <div className="image-container">
                    <img className='h-full w-full object-cover'
                     src={currentUser?.imgurl}
                        alt="user" />
                </div> :<h3 className="text-lg uppercase">{currentUser?.name?.slice(0,1)}   </h3> 
                    
                    }
                        
                        
                    </div>
                    <div className="flex flex-col " style={{ flex: 1 }} onClick={handleState}>
                     
                        <h2 className="text-xl">{currentUser?.name}</h2>
                        <p className="text-slate-400 leading-3">{currentUser?.lastseen}</p>
                    </div>
                    <div className="flex justify-between items-center gap-3 " style={{ flex: "none" }}>
                        <div className="icon"><IoMdCall size={25} /></div>
                        <div className="icon"><HiOutlineDotsVertical size={25} onClick={() => setOpt(!opt)} /></div>
                    </div>
                </div>
                <div className="chat__container mt-[60px] " style={{
                    height: "calc(100svh - 60px)"

                }}>
                {currentUser?.textmessages?.map((message,index)=>{
                
                if("user" in message){
                 return   <Send message={message.user}/>
                }
                return <Recieve message={message.me}/>
                
                })}

                </div>

                <div className="fixed bottom-0 w-full shadow-2xl bg-white dark:bg-slate-600 left-0  
            flex items-center justify-center px-4
            gap-2
            
         py-1 z-40">

                    <span className='w-[30px] h-[30px]'><BsEmojiSmile size={25} className="text-slate-300" /></span>
                    <div className="input-container  focus:border-2 h-[40px] " style={{ flex: 1 }}>
                        <input type="text" name="text" id="text" placeholder='Message ' className='h-full pl-[1rem] w-full bg-transparent' />
                    </div>
                    <span className='w-[25px] h-[30px] flex-none flex items-center justify-center'
                    ><IoIosAttach size={25} className="text-slate-300 rotate-45" /></span>
                    <span className='w-[25px] h-[30px] flex-none flex items-center justify-center' onClick={() => _set_M(!_toggleMic)}
                    >{_toggleMic ? <BsMic size={25} className="text-slate-300" /> : <CiInstagram size={28} className="text-slate-300" />}</span>
                </div>


            </div> : <div className='min-h-screen  overflow-y-auto bg-white dark:bg-slate-800' ref={_ref}>

                <div className="top-nav-bar
                bg-blue-300 dark:bg-slate-700 py-2 
                fixed top-0 left-0 w-full shadow-xl" style={{

                        backgroundImage: tp > 200 && `url("https://th.bing.com/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?w=158&h=180&c=7&r=0&o=5&pid=1.7")`
                        , backgroundRepeat: "no-repeat", backgroundSize: "cover"
                    }} >

                    <div className='items-start flex gap-3 max-h-[300px] min-h-[60px] w-full relative' style={{ height: `${tp}px` }}>
                        <div className={`absolute bottom-0 right-12 w-[70px] h-[70px] rounded-full shadow-2xl bg-white dark:bg-blue-300 
                mb-[-40px] ${tp <= 60 && "hidden "} `} style={{ transition: "display 0.4s ease" }}>



                        </div>
                        <div className="flex-none h-[40px] w-[40px] flex items-center justify-center" >
                            <MdArrowBack size={25} color="white" onClick={() => navigate(-1)} />
                        </div>
                        <div className="flex-1">
                            <div className={`image-container ${tp > 200 && "hidden"}`} style={{
                                "--size": "40px",
                                transform: `translate(-${left}px,${top}px) scale(${scale})`
                            }}>
                                <img
                                    src="https://th.bing.com/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?w=158&h=180&c=7&r=0&o=5&pid=1.7"
                                    alt="user" />

                            </div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <CiInstagram size={28} className="text-slate-300" />
                            <IoMdCall size={25} className="text-slate-200" />
                            <HiOutlineDotsVertical size={25} className="text-slate-200" />
                        </div>
                    </div>
                </div>

                <div className="bg-orange-400  h-[300px]">
                </div>
                <div className="user-box min-h-[140vh]
         bg-white dark:bg-slate-800 text-black dark:text-white px-4
             "><div className="flex flex-col gap-1 shadow-b dark:shadow-d pb-4">


                        <h2 className='text-lg text-blue-400 mt-20'>Info</h2>
                        <p className="text-dark dark:text-white pt-2"> +237672301714</p>
                        <div className="text-slate-500">Mobile</div>
                    </div>
                    <div className="flex justify-between py-4 shadow-b dark:shadow-d">
                    
                    <div className="space-y-1">
                    
                    <h4 className="text-black dark:text-white">
                    Notifications
                    </h4>
                    <h5 className="text-slate-400 text-sm ">On</h5>
                    </div>
                    
                    </div>
                </div>


            </div>}</>
    )
}

export default Chat