import { BsEmojiSmile, BsMic } from "react-icons/bs"
import { CiInstagram } from "react-icons/ci"
import { IoIosAttach, IoMdSend } from "react-icons/io"

const InputButton = () => {
    const text=""
    const _toggleMic=true
  return (
   <div className="w-full pb-3">
                        <div className="flex items-end gap-2 max-w-4xl mx-auto px-4">
                            {/* Main input container */}
                            <div className="flex-1 flex items-center bg-white rounded-3xl shadow-md px-3 py-2 gap-2 min-h-[46px]">
                                <span className='w-[30px] h-[30px] cursor-pointer flex items-center justify-center'>
                                    <BsEmojiSmile 
                                    // onClick={() => setBol(true)}
                                     size={22} className="text-gray-500 hover:text-gray-700 transition-colors" />
                                </span>

                                <div className="input-container flex-1 h-[32px]">
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        placeholder='Message'
                                        // value={text}
                                        // onChange={handleTextChange}
                                        className='h-full px-2 w-full bg-transparent border-0 focus:border-none focus:outline-none text-gray-800 placeholder-gray-400 text-[15px]'
                                    />
                                </div>

                                {text.trim().length === 0 && (
                                    <span className='w-[30px] h-[30px] flex items-center justify-center cursor-pointer'>
                                        <IoIosAttach size={22} className="text-gray-500 rotate-45 hover:text-gray-700 transition-colors" />
                                    </span>
                                )}
                            </div>

                            {/* Separate mic/send button */}
                            <div className="flex-none">
                                {text.trim().length > 0 ? (
                                    <div className="w-[46px] h-[46px] bg-[#2AABEE] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2499d4] transition-colors shadow-md" 
                                    // onClick={handleTextSend}
                                    >
                                        <IoMdSend size={22} className="text-white" />
                                    </div>
                                ) : (
                                    <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors shadow-md" 
                                    // onClick={() => _set_M(!_toggleMic)}
                                    >
                                        {_toggleMic ? <BsMic size={22} className="text-gray-500" /> : <CiInstagram size={26} className="text-gray-500" />}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
  )
}

export default InputButton