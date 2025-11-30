import EmojiPicker from 'emoji-picker-react'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChevronRight, BsSearch } from 'react-icons/bs'
import { CiInstagram } from 'react-icons/ci'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { IoMdCall } from 'react-icons/io'
import { MdArrowBack } from 'react-icons/md'
import { useNavigate, useParams } from "react-router-dom"
import users from '../Constants/User'
import ChatList from '../Section/ChatList'
import ChatView from '../Section/ChatView'
const Chat = () => {
    const id = useParams().id
    const _ref = useRef(null)
    const _opt = useRef(null)
    const [scale, setScale] = useState(2)
    const [chng, setChng] = useState(true)
    const navigate = useNavigate()
    const [_toggleMic, _set_M] = useState(true)
    const [opt, setOpt] = useState(false)
    const [tp, setTp] = useState(150)
    const [top, setTop] = useState(60)
    const [left, setLeft] = useState(30)
    const [bol, setBol] = useState(false)
    const [currentUser, setCurrentUser] = useState("")
    const [text, setText] = useState("")
    const [selected, setSelected] = useState([])
    var [timer, setTimer] = useState(null)
    const handleState = () => {
        setChng(!chng)
        window.history.pushState({}, window.location.href, null)
    }
    useEffect(() => {
        window.addEventListener("popstate", () => {
            setSelected([])
            if (!chng) {
                setChng(true)
            }
        })
        return () => {
        }
    }, [chng]);

    useEffect(() => {

        const baseuser = users.find(user => user.id == id)
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
        window.addEventListener("popstate", () => {
            setSelected([])

        })
        window.addEventListener("scroll", () => {
            // setSelected([])

            clearInterval(timer)

        })
    }, [])
    const changeClassList = () => {
        _opt.current.classList.toggle("h-screen")
        _opt.current.classList.toggle("h-0")
        setOpt(!opt)
    }
    const resetTextValue = () => setText("")
    const handleTextChange = e => {
        setText(e.target.value)
        if (text.trim().length < 0) return
    }
    const handleTextSend = e => {
        const _temp = {
            ...currentUser, textmessages: [...currentUser.textmessages, {
                "user": text
            }]

        }
        resetTextValue()
        setCurrentUser({ ..._temp })
        // console.log(_temp);

    }
    const handleTouchEnd = () => {
        clearInterval(timer)


    }
    const handleSelectedText = (id) => {

        if (selected.includes(id)) {
            const temp = selected.filter(select => select !== id);
            setSelected(temp)
            return
        }
        setSelected([...selected, id])

        if (selected.length == 1) {
            window.history.pushState({}, window.location.href, null)
        }
        if (selected.length == 0) {

            // navigate(-1)
        }

    }
    const handleTouchStart = (id) => {
        var _t = 0
        if (selected.length > 0) {
            return handleSelectedText(id)
        }
        const _timer = setInterval(() => {
            ++_t;
            if (_t >= 2) {
                clearInterval(timer)
                return handleSelectedText(id)
            }

        }, [1000])
        setTimer(_timer)

    }
    return (

        <>{chng ?
            <div className='select-none fadein flex h-screen' >
                <div className={`fixed bottom-0 z-50 w-full h-full  left-0 bg-slate-300
                ${bol ? "block" : "hidden"}`} onClick={() => setBol(false)}>
                    <div className="absolute bottom-0 w-full left-0" onClick={e => e.stopPropagation()}>



                        <EmojiPicker theme="dark" height={350} autoFocusSearch={false}
                            width={window.innerWidth < 400 ? window.innerWidth : 400} className="w-full border-4 border-orange-600" onEmojiClick={(emjObj) => {

                                console.log(emjObj.emoji)
                                setText(text.concat(emjObj.emoji))
                                setBol(false)

                            }} />

                    </div>


                </div>
                {/* <div className={`fixed top-0 left-0 w-full bg-red-300 min-h-[60px] opacity-0 transition-opacity duration-500
            ${selected.length > 0 && "z-50 opacity-100"}`}></div> */}

                <div className={`fixed bottom-0 left-0 w-full bg-red-300 min-h-[60px] opacity-0 transition-opacity duration-500
            ${selected.length > 0 && "z-50 opacity-100"}`}></div>
                <div className="absolute top-0 h-0 bg-transparent left-0 w-full overflow-hidden z-50"
                    ref={_opt} onClick={changeClassList}>
                    <div className={`absolute right-3 top-2 bg-white shadow-2xl flex
                    flex-col  overflow-hidden
                rounded-lg text-black  transition-all 
                duration-500 select-none ${opt ? "max-h-[1000px] " : "max-h-[0]"}
                 `}
                        onClick={e => e.stopPropagation()}   >
                        <div className="flex gap-4 items-center px-6 pr-3 hover:bg-slate-300 py-2">
                            <IoMdCall size={20} />
                            <h3 className="text-lg flex-1">Mute </h3>
                            <BsChevronRight size={20} color="black" />
                        </div>
                        <div className="flex gap-4 items-center px-6 hover:bg-slate-300 py-2">
                            <IoMdCall size={20} />
                            <h3 className="text-lg ">Video Call   </h3>
                        </div>
                        <div className="flex gap-4 items-center px-6 hover:bg-slate-300 py-2">
                            <IoMdCall size={20} />
                            <h3 className="text-lg ">clear history </h3>
                        </div>
                        <div className="flex gap-4 items-center px-6 hover:bg-slate-300 py-2">
                            <IoMdCall size={20} />
                            <h3 className="text-lg ">Change colors  </h3>
                        </div>
                        <div className="flex gap-4 items-center px-6 hover:bg-slate-300 py-2">
                            <IoMdCall size={20} />
                            <h3 className="text-lg ">Delete Chat</h3>
                        </div>
                        <div className="flex gap-4 items-center px-6 hover:bg-slate-300 py-2">
                            <IoMdCall size={20} />
                            <h3 className="text-lg ">Search </h3>
                        </div>
                    </div>
                </div>
                 <div className='w-[420px]'>
                      <div className=" border-r border-gray-200 h-fit flex flex-col  bg-white">
                    {/* Sidebar Header */}
                    <div className="flex h-[56px] items-center px-4 gap-3 border-b border-gray-100">
                        <div className="flex-none flex items-center justify-center w-[40px] h-[40px] rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
                            <AiOutlineMenu size={22} color="#707579" />
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-400"
                                />
                            </div>
                        </div>
                    </div>


                </div>
                {/* Chat List Sidebar */}
                <ChatList />
                 </div>
             

                {/* Chat View */}
           
           <div className="hidden md:block flex-1" >

            <ChatView/>
           </div>

            </div> : <div className='min-h-screen  overflow-y-auto  dark:bg-slate-800' ref={_ref}>

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