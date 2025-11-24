import { MdArrowBack } from 'react-icons/md'
import { useNavigate, useParams } from "react-router-dom"
import { Send, Recieve } from '../components'
import { BsEmojiSmile, BsMic } from 'react-icons/bs'
import { IoIosAttach, IoMdCall } from 'react-icons/io'
import { CiInstagram } from 'react-icons/ci'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { BsChevronRight } from 'react-icons/bs'
import { useState, useEffect, useRef } from 'react'
import users from '../Constants/User'
import { IoMdSend } from 'react-icons/io'
import EmojiPicker from 'emoji-picker-react'
import Message from '../components/Message'
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
            <div className='select-none fadein' >
                <div className={`fixed bottom-0 z-50 w-full h-full  left-0 bg-slate-300
                ${bol ? "block" : "hidden"}`} onClick={()=>setBol(false)}>
                    <div className="absolute bottom-0 w-full left-0" onClick={e=>e.stopPropagation()}>



                    <EmojiPicker theme="dark" height={350} autoFocusSearch={false}
                    width={window.innerWidth < 400 ? window.innerWidth : 400} className="w-full border-4 border-orange-600" onEmojiClick={(emjObj) => {

                        console.log(emjObj.emoji)
                        setText(text.concat(emjObj.emoji))
                        setBol(false)

                    }} />

                    </div>


                </div>
                <div className={`fixed top-0 left-0 w-full bg-red-300 min-h-[60px] opacity-0 transition-opacity duration-500
            ${selected.length > 0 && "z-50 opacity-100"}`}></div>

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
                <div className="chattop__navbar flex  h-[60px] bg-slate-800 shadow fixed top-0 left-0 
            text-white container mx-auto gap-4 items-center ">

                    <div className="flex-none h-[40px] w-[40px] flex items-center justify-center" >
                        <MdArrowBack size={25} color="white" onClick={() => navigate(-1)} />
                    </div>
                    <div className="flex-none h-[40px] w-[40px] flex items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-orange-400" >
                        {currentUser?.imgurl ? <div className="image-container" >
                            <img className='h-full w-full object-cover'
                                src={currentUser?.imgurl}
                                alt="user" />
                        </div> : <h3 className="text-lg uppercase whitespace-nowrap
                        overflow-hidden line-clamp-1">{currentUser?.name?.slice(0, 1)}   </h3>

                        }


                    </div>
                    <div className="flex flex-col flex-1 overflow-hidden" style={{ flex: 1 }} onClick={handleState}
                    >

                        <h2 className="text-xl whitespace-nowrap overflow-hidden w-full">{currentUser?.name}</h2>
                        <p className="text-slate-400 leading-3">{currentUser?.lastseen}</p>
                    </div>
                    <div className="flex justify-between items-center gap-3 " style={{ flex: "none" }}>
                        <div className="icon"><IoMdCall size={25} /></div>
                        <div className="icon"><HiOutlineDotsVertical size={25} onClick={(e) => [changeClassList(), e.stopPropagation()]} /></div>
                    </div>
                </div>
                <div className="chat__container !bg-telegram-blue-gradient-  mt-[60px] pb-[10rem] overflow-auto" style={{
                    height: "calc(100svh - 60px)",
                    backgroundImage:'url(/telegram-bg.jpg)',
                    backgroundSize:'cover',
                    backgroundPosition:'center'

                }}>
                    {currentUser?.textmessages?.map((message, index) => {

                        return (
                            <div className={` flex px-1 ${selected.includes(index) ? "bg-blue-200" : "bg-transparent"}`} key={index} 
                            // onTouchStart={() => handleTouchStart(index)} onTouchEnd={handleTouchEnd}
                            >
                                <div className={`icon text-lg ${selected.includes(index) ? "block" : "hidden"}`}>0</div>

                                {       
                                    <Message  message={message}/>}
                            </div>
                        )


                    })}

                </div>

                <div className="fixed bottom-0 w-full max-w-[calc(100%-1rem)] rounded-full mb-2 
                left-1/2
                translate-x-[-50%]
                shadow-2xl bg-white dark:bg-slate-600  
            flex items-center justify-center px-4
            gap-2 min-h-[50px]
            
         py-1 z-40">

                    <span className='w-[30px] h-[30px]'><BsEmojiSmile onClick={() => setBol(true)} size={25} className="text-slate-300" /></span>
                    <div className="input-container  focus:shadow-2xl h-[40px] " style={{ flex: 1 }}>
                        <input type="text" name="text" id="text" placeholder='Message ' value={text} onChange={handleTextChange}
                            className='h-full pl-[1rem] w-full bg-transparent border-0 focus:border-none focus:outline-none focus:shadow-lg' />
                    </div>

                    {


                        text.trim().length > 0 ? <IoMdSend onClick={handleTextSend}
                            size={30} className={`text-blue-400 transition-all duration-[3s]
                        ${text.trim().length > 0 ? "translate-x-0" : "translate-x-4"} `} /> :
                            <>
                                <span className='w-[25px] h-[30px] flex-none flex items-center justify-center'
                                ><IoIosAttach size={25} className="text-slate-300 rotate-45" /></span>
                                <span className='w-[25px] h-[30px] flex-none flex items-center justify-center' onClick={() => _set_M(!_toggleMic)}
                                >{_toggleMic ? <BsMic size={25} className="text-slate-300" /> : <CiInstagram size={28} className="text-slate-300" />}</span>
                            </>
                    }


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