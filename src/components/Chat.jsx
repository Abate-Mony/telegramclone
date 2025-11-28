import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
const Chat = ({ user, id }) => {
    const dispatch = useDispatch()
    const _ref = useRef(null)
    const navigate = useNavigate()
    const [start, setStart] = useState(null)
    const [isPressedDown, setIsPressedDown] = useState(false)
    const [diff, setDiff] = useState(0)
    const handleTouchend = () => {
        setIsPressedDown(false)
        _ref.current.style.transform = `translateX(${0}px)`

    }
    const handleTouchstart = (e) => {

        setIsPressedDown(true)
        setStart(e.touches[0].clientX)
    }
    const handleTouchMove = e => {
        // const 
        if (!isPressedDown) return
        const { clientX: x } = e.touches[0];
        const _diff = start - x
        if (_diff < 0) {

            setIsPressedDown(false);

            return
        }
        setDiff(_diff)
        _ref.current.style.transform = `translateX(-${diff}px)`
        if (diff > 200) {
            window.navigator.vibrate([100])
            _ref.current.parentElement.remove()
            dispatch({ type: "toggle-on" })
            const timeout = setTimeout(() => {
                clearTimeout(timeout)
                dispatch({ type: "toggle-off" })

            }, 1000);
        }

    }
    const handleImageLoadingError = e => {
    const {target:currentElement}=e
        console.log("error loading image")
    }
    return (



        <div className={`${isPressedDown ? "bg-blue-400" : ""} relative`} onClick={() => navigate(`chat/${user.id}`)} onTouchStart={handleTouchstart}
            onTouchEnd={handleTouchend}
            onTouchMove={handleTouchMove}>
            <div className={`absolute right-[10px] h-full w-[80px] bg-white top-0 z-10`}>
                <span className='text-sm text-center'>archive</span>
            </div>
            <div className="flex py-2 px-3 container mx-auto gap-3 bg-white dark:bg-slate-800
          overflow-x-hidden
        hover:bg-gray-100 dark:hover:bg-slate-700 select-none relative z-10 transition-colors cursor-pointer"ref={_ref} >

                <div className="flex-none 
    h-[50px] w-[50px] flex items-center justify-center rounded-full bg-gradient-to-br
    from-blue-400 to-purple-500" >
                    {user?.imgurl ? <div className="image-container" >
                        <img className='h-full w-full object-cover'
                            src={user?.imgurl} onError={handleImageLoadingError}
                            alt="user" />
                    </div> : <h3 className="text-lg font-medium text-white uppercase whitespace-nowrap 
                        overflow-hidden line-clamp-1">{user?.name?.slice(0, 1)}</h3>

                    }


                </div>
                {/* <div className="image-container">
                    <img className='h-full w-full object-cover'
                     src={user?.imgurl || "https://th.bing.com/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?w=158&h=180&c=7&r=0&o=5&pid=1.7"}
                        // src="https://th.bing.com/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?w=158&h=180&c=7&r=0&o=5&pid=1.7"
                        alt="user" />

                </div> */}
                <div className="text-box border-b-[1px] border-gray-100 dark:border-slate-700 pb-3 overflow-hidden" style={{ flex: "1" }}>
                    <div className="flex justify-between items-start leading-5 mb-1">
                        <h3 className="text-[15px] font-normal line-clamp-1 max-w-[200px] overflow-hidden text-gray-900 dark:text-white">{user.name} </h3>
                        <span className="text-[13px] text-gray-400 dark:text-gray-500 ml-2 flex-shrink-0"> {user?.lastmessage?.time}</span>
                    </div>
                    {/* bottm text box */}
                    <div className="flex justify-between items-center leading-5 mt-1">
                        <h3 className="text-[14px] text-gray-500 dark:text-gray-400 line-clamp-1" style={{ flex: "1" }}>{user?.lastmessage?.message}</h3>
                        {user.lastmessage.msgcnt > 0 && <span className="text-[12px] font-medium text-white min-w-[20px] px-1.5
    h-[20px] bg-[#2AABEE] rounded-full flex items-center justify-center ml-2 flex-shrink-0">{user.lastmessage.msgcnt}</span>}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Chat