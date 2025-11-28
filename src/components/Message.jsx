import { IoMdCheckmark } from "react-icons/io";
import dayjs from "dayjs";
const Message = ({message, showTail = true}) => {
  const isUserMessage = "user" in message;
  return (
    <div className={`flex relative my-[12px] ${!isUserMessage?"justify-start":"justify-end"}`}>
    
    <div className={`message-bubble max-w-[450px] relative w-fit text-[15px] pt-1.5 pb-5 px-2.5 rounded-[10px] shadow-sm ${isUserMessage ? 'snd-msg-bg my-message' : 'bg-white'} ${showTail ? 'droplet' : ''}`}>

{
  message.imgurl && <img src={message.imgurl} alt="message-img" className="max-h-72 h-full w-full rounded-md mb-2 object-fit"/>
}
    <p className="text-gray-900 leading-[1.3rem] pr-14">
   {
isUserMessage ? message.user : message.me
      }
    </p>
    
    <span className="absolute bottom-1 right-2 inline-flex items-center gap-x-0.5">
        <span className="text-[11px] text-gray-500 font-normal whitespace-nowrap">{
          dayjs(message.timestamp).format("HH:mm")
          }</span>
        {
          isUserMessage &&    <span className="inline-flex relative">
          <IoMdCheckmark size={15} className="text-[#4FC3F7]" />
          <IoMdCheckmark size={15} className="-ml-[0.55rem] text-[#4FC3F7]" />
        </span>
        }
      </span>
    
       </div>
    </div>
  )
}

export default Message
