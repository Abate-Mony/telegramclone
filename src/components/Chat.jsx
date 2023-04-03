import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
const Chat = ({user,id}) => {
const dispatch=useDispatch()
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
            dispatch({type:"toggle-on"})
            const timeout=setTimeout(() => {
                clearTimeout(timeout)
            dispatch({type:"toggle-off"})
                
            }, 1000);
        }

    }
    return (



        <div className={`${isPressedDown ? "bg-blue-400" : ""} relative`} onClick={() => navigate(`chat/${user.id}`)} onTouchStart={handleTouchstart}
            onTouchEnd={handleTouchend}
            onTouchMove={handleTouchMove}>
            <div className={`absolute right-[10px] h-full w-[80px] bg-white top-0 z-10`}>
                <span className='text-sm text-center'>archive</span>
            </div>
            <div className="flex  py-2 container mx-auto gap-3 bg-white dark:bg-slate-600
          duratio overflow-x-hidden
        hover:bg-slate-300 select-none rounded-lg relative z-10"ref={_ref} >
                <div className="image-container">
                    <img className='h-full w-full object-cover'
                     src={user?.imgurl || "https://th.bing.com/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?w=158&h=180&c=7&r=0&o=5&pid=1.7"}
                        // src="https://th.bing.com/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?w=158&h=180&c=7&r=0&o=5&pid=1.7"
                        alt="user" />

                </div>
                <div className="text-box shadow-d dark:shadow-b pb-1 capitalize overflow-hidden " style={{ flex: "1" }}>
                    <div className="flex  justify-between leading-3">
                        <h3 className="text-lg font-manrope line-clamp-1 max-w-[200px] overflow-hidden">{user.name} </h3>
                        <span className="text-sm text-slate-500 "> {user?.lastmessage?.time}</span>
                    </div>
                    {/* bottm text box */}
                    <div className="flex  justify-between leading-3">
                        <h3 className="text-sm text-slate-500 line-clamp-1" style={{ flex: "1" }}>{user?.lastmessage?.message}</h3>
                        <span className="text-sm text-white w-[20px]
    h-[20px] bg-blue-500 rounded-full flex items-center justify-center " >{user.lastmessage.msgcnt}</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Chat