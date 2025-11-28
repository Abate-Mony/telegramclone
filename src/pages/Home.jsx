import { useState } from "react"
import { Navbar, Chat, SideBar, Button } from "../components"

import Users from '../Constants/User'
import { useDispatch, useSelector } from "react-redux"
const Home = () => {
    const [start, setStart] = useState(null)

    const [isPressedDown, setIsPressedDown] = useState(false)
const dispatch=useDispatch()
  const stopPropagation = e => e.stopPropagation()
  const sidebaron = () => dispatch({ type: "side-on" })
  const sidebaroff = () => dispatch({ type: "side-off" })
  const sidebar = useSelector(state => state.sidebar)
//   const [left,setLeft]=useState(-100)
    const reset = () => {

        setIsPressedDown(false)
        setStart(0)
    }
    const handleTouchStart = e => {
        setIsPressedDown(true)
        const x = e.touches[0].clientX
        setStart(x)

    }
    const handleTouchEnd = () => reset()


    const handleTouchMove = (e) => {
    if(!isPressedDown) return
        const xmove = 100
        const x = e.touches[0].clientX
        const offset = start - x
        if(offset<0){
        
        
        
        
        }
        if (Math.abs(offset) > xmove) {
            // the user slides we should open the side bar 
            if (offset > 0) {
                // the user slide left
sidebaroff()

            }
            else {
sidebaron()
            

                // the user slide right

            }
return reset()
        }
        // if()


    }
    const active = useSelector(state => state.isArchive)

    return (

        <div className="home-height
         overflow-auto select-none bg-white
          dark:bg-slate-800 pt-4" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}>
            <Button />
            <SideBar />
            {
                Users?.map((user, idx) => <Chat user={user} key={idx} />)}
            <Navbar />
            {

                active ?
                    <div className="fixed bottom-[30px] bg-black left-[50%] translate-x-[-50%] rounded-[2rem]
            text-white z-50 w-[300px] min-h-[70px]">hello</div> : ""
            }

        </div>
    )
}

export default Home