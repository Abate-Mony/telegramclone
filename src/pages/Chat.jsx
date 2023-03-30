import { MdArrowBack } from 'react-icons/md'
import { useNavigate } from "react-router-dom"
import { Send,Recieve } from '../components'
import {BsEmojiSmile,BsMic} from 'react-icons/bs'
const Chat = () => {
    const navigate = useNavigate()

    return (
        <div className=''>
            <div className="chattop__navbar flex  h-[60px] bg-slate-800 shadow fixed top-0 left-0 text-white container mx-auto gap-4 items-center ">
                <div className="flex-none h-[40px] w-[40px] flex items-center justify-center" >
                    <MdArrowBack size={25} color="white" onClick={() => navigate(-1)} />
                </div>
                <div className="flex flex-col " style={{ flex: 1 }}>
                    <h2 className="text-xl">Nelly</h2>
                    <p className="text-slate-400 leading-3">last seen at 17:03 am</p>
                </div>
                <div className="flex justify-between items-center" style={{ flex: "none" }}>

                    <div className="icon">i</div>
                    <div className="icon">2</div>
                </div>
            </div>
            <div className="chat__container mt-[60px] " style={{
                height: "calc(100svh - 60px)"

            }}>
                <Send />
                <Send />
                <Recieve/>
                <Send />

            </div>

            <div className="fixed bottom-0 w-full shadow-md border-2 border-slate-400 bg-white dark:bg-slate-600 left-0  
            flex items-center justify-center px-4
            gap-2
            
         py-1 z-40">

                <span className='w-[30px] h-[30px]'><BsEmojiSmile size={25} className="text-slate-300" /></span>
                <div className="input-container  focus:border-2 h-[40px] " style={{ flex: 1 }}>
                    <input type="text" name="text" id="text" placeholder='Message ' className='h-full pl-[1rem] w-full bg-transparent' />
                </div>
                <span className='w-[25px] h-[30px] flex-none flex items-center justify-center' ><BsMic size={20}/></span>
                <span className='w-[25px] h-[30px] flex-none flex items-center justify-center' ><BsMic size={20}/></span>
            </div>


        </div>
    )
}

export default Chat