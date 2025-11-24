import { IoMdCheckmark } from "react-icons/io";
import dayjs from "dayjs";
const Message = ({message}) => {
  const isUserMessage = "user" in message;
  return (
    <div className={` flex  relative  mx-2 ${!isUserMessage?"justify-start":"justify-end"} flex-1`}>
    
{
  isUserMessage?    <span className="absolute
    bottom-0 -right-[0.2rem] rounded-t-2xl   mb-1 border-b-[var(--snd-msg-bg)] 
    w-0 h-0 border-l-[12px] border-l-transparent border-r-[20px] border-r-transparent border-b-[10px] snd-msg-bg
    "></span>:    <span className="absolute
    bottom-0 -left-[0.15rem] rounded-t-2xl   mb-1 border-b-slate-100 
    w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] 
    "></span>
}
    <div className={`max-w-[calc(100%-6rem)] relative w-full bg-black pb-5  text-sm py-2  px-1 my-1  rounded-xl ml-2 ${isUserMessage ? 'snd-msg-bg !rounded-ee-none' : 'bg-slate-100 !rounded-es-none'}`}>

{
  message.imgurl && <img src={message.imgurl} alt="message-img" className="max-h-72 h-full w-full rounded-lg mb-2  object-fit"/>
}
    <p className="px-2">
   {
isUserMessage ? message.user : message.me
      }
    </p>
        <p
      className="absolute flex items-center gap-x-1  bottom-1 mt-2"
      style={{
        right:isUserMessage?"0.5rem":"0.5rem"
      }}
      >
        <span className="text-xs text-green-500 font-medium">{
          dayjs(message.timestamp).format("hh:mm A")
          }</span>
        {
          isUserMessage &&    <span className="flex relative">
          <span
          className="w-[3.5px] snd-msg-bg h-[1px]  absolute top-[10px] left-[3.5px] snd-msg-bg"
          ></span>
          <IoMdCheckmark className="text-green-400" />
          <IoMdCheckmark size={14} className="-ml-[0.7rem] mt-[2px] text-green-400" />
        </span>
        }
    
        
        </p>
    
       </div>
    </div>
  )
}

export default Message