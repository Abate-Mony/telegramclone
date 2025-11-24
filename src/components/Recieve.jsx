
const Recieve = ({message}) => {
  return (
    <div className="recieve__message flex  justify-start flex-1">
    
    <div className="max-w-[90%] bg-slate-400 text-sm py-2 px-5 my-1   single_msg ml-2 ">{message} message</div>
    </div>
  )
}

export default Recieve