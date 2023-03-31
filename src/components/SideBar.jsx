import { BsMoonStars, BsFillSunFill, BsChevronDown } from 'react-icons/bs'
import { AiOutlineUsergroupAdd, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useRef } from 'react'
import Icons from '../Constants/listIcons'
const SideBar = () => {
  const theme = useSelector(state => state.bool)
  const [_logout, _setLogout] = useState(false)
  const dispatch = useDispatch()
  const _ref = useRef(null)
  const handleClassToggle = () => {
    _setLogout(!_logout)
  }
  const stopPropagation = e => e.stopPropagation()
  const togglesidebarfunc = () => dispatch({ type: "side-bar" })
  const sidebar = useSelector(state => state.sidebar)
  const handleThemeChange = () => {
    dispatch({ type: "theme-toggle" })
    if (!theme) {
      _ref.current.classList.add("scale-up")
      _ref.current.classList.remove("scale-down")
      return

    }
    _ref.current.classList.remove("scale-up")
      _ref.current.classList.add("scale-down")
  }
  return (
    <div className={`fixed h-screen sidenavmaincontainer
    z-40 top-0 w-full ${sidebar ? "active" : ""}`} onClick={togglesidebarfunc} > 
      <div className={`absolute z-40  w-1 h-1 rounded-full top-7 `} style={{
        left: "var(--m-scale)", background: theme ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.6)",
      }}  ref={_ref}></div>
      <div className={`sidebarcontainer z-10  bg-white 
      dark:bg-slate-800 h-full pb-4 active ${sidebar ? "active shadow-md" : ""}
    `} onClick={stopPropagation}>
        <div className="m-0 py-0 bg-blue-400 dark:bg-slate-600 px-4 pt-5 pb-2">

          <div className="flex  mx-auto  justify-between ">
            <div className="image-container" style={{ "--size": "60px" }}>
              <img
                src="https://th.bing.com/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?w=158&h=180&c=7&r=0&o=5&pid=1.7"
                alt="user" />
            </div>
            <div className="" onClick={handleThemeChange}>

              {theme ? <BsMoonStars size={25} className="rotate-[270deg]" color='white' /> : <BsFillSunFill size={25} color="white" />}
            </div>
          </div>
          <div onClick={handleClassToggle}>
            <div className="flex items-center justify-between leading-6 mt-4">
              <h4 className="text-lg text-white ">Abate Mony</h4>
              <BsChevronDown size={20} color="white" className={`${_logout && "rotate-180"}`} />
            </div>
            <p className="text-slate-500 text-sm " >+237672301714</p>
          </div>
        </div>
        <div className="border-b-[1px] border-white">
          <div className={`pb-2 _logout ${_logout ? "active" : ""}`}>
            <div className="px-4 flex gap-4 py-2 my-1 transition-all
            duration-500 items-end
          hover:bg-slate-700" >
              <div className="image-container z-10 overflow-visible h-fit w-fit
            relative" >
                <div className="absolute bg-blue-500 rounded-full z-20 
            flex items-center justify-center bottom-[-2px] right-[-2px]   text-sm w-[15px] h-[15px]"> </div>
                <img className='rounded-full'
                  style={{ width: "35px", height: "35px" }}
                  src="https://th.bing.com/th/id/OIP.w-f-qDRUjGt9e_SuPTcfcgHaHw?w=158&h=180&c=7&r=0&o=5&pid=1.7"
                  alt="user" />
              </div>
              <h3 className="text-lg text-white">Abate Mony </h3>
            </div>



            <div className="px-4 flex gap-4 py-2 my-1 transition-all  duration-500
          hover:bg-slate-700" >
              <AiOutlinePlus size={25} className="text-slate-500" />
              <h3 className="text-lg text-white">Add Account </h3>
            </div>
          </div>
          {Icons.map((_, idx) => {
            return (
              <div className="px-4 flex gap-4 py-2 my-1 transition-all  duration-500
          hover:bg-slate-700" key={idx}>
          {_.icon}
                <h3 className="text-lg text-dark dark:text-white">{_.name} </h3>
              </div>

            )

          })}</div>

      </div>


    </div>
  )
}

export default SideBar