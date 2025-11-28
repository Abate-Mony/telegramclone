import { IoMdCheckmark } from "react-icons/io";
import dayjs from "dayjs";
const Message = ({message}) => {
  const isUserMessage = "user" in message;
  return (
    <div className={`flex relative my-1 ${!isUserMessage?"justify-start":"justify-end"}`}>
    
    <div className={`max-w-[450px] relative w-fit pb-5 text-[15px] py-2 px-3 rounded-[20px] shadow-sm ${isUserMessage ? 'snd-msg-bg rounded-br-sm' : 'bg-white rounded-bl-sm'}`}>
{
  isUserMessage?    <span className="absolute
    bottom-0 -right-[8px]
    w-0 h-0 border-l-[10px] border-l-transparent border-t-[13px] snd-msg-bg
    "></span>:  
    <span></span>
   
}

{
  message.imgurl && <img src={message.imgurl} alt="message-img" className="max-h-72 h-full w-full rounded-md mb-2 object-fit"/>
}
    <p className="text-gray-900 pr-16 leading-[1.35rem]">
   {
isUserMessage ? message.user : message.me
      }
    </p>
        <p
      className="absolute flex items-center gap-x-0.5 bottom-1 right-2"
      >
        <span className="text-[11px] text-gray-500 font-normal">{
          dayjs(message.timestamp).format("HH:mm")
          }</span>
        {
          isUserMessage &&    <span className="flex relative ml-0.5">
          <IoMdCheckmark size={15} className="text-[#4FC3F7]" />
          <IoMdCheckmark size={15} className="-ml-[0.55rem] text-[#4FC3F7]" />
        </span>
        }
    
        
        </p>
    
       </div>
    </div>
  )
}

export default Message