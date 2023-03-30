import { MdArrowBack } from "react-icons/md"
const SearchOverlay = () => {
    return (
        <div className="h-screen w-full top-0 fixed bg-slate-400 ">

            <div className="flex container mx-auto py-2 gap-4 h-[60px] items-center">

                    <MdArrowBack size={25} color="white" />
                    <div className="input-container flex-1 h-[40px]">
                    
                    <input type="text" className="w-full h-full bg-transparent text-black" placeholder="enter search value" />
                    
                    </div>

            </div>


        </div>
    )
}

export default SearchOverlay