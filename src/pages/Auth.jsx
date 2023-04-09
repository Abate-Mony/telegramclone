import { MdArrowBack, MdOutlineChevronRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Animate from '../Constants/animate'
import { useState, useEffect } from 'react'
import { cloud } from '../Constants/assest'
import "./auth.css"
const Auth = () => {

const navigate=useNavigate()
  const obj = new Animate(0, 0, 400, 400, { x: 0, y: 0 })
  const obj1 = new Animate(0, 0, 400, 400, { x: 400, y: 200 })
  const obj2 = new Animate(0, 0, 400, 400, { x: 400, y: 0 })
  const [pos, setPos] = useState({ x: obj.x, y: obj.y })
  const navigateToPreviousPage=()=>navigate(-1)

  useEffect(() => {
    const timer = setInterval((
    ) => {
      setPos({
        x:obj.update().x,
        y:obj.update().y,
        x1:obj1.update().x,
        y1:obj1.update().y,
        x2:obj2.update().x,
        y2:obj2.update().y,
      
        })
    }, 50)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className='max-w-md mx-auto relative dark:bg-slate-800 pt-4 min-h-screen'>
    <MdArrowBack size={25} className='text-slate-400 ml-4  dark:text-white' onClick={navigateToPreviousPage} />
      
      <div className="w-[40px] h-[40px]"></div>

      <div className="h-[3rem]"></div>
      <img src={cloud} alt="cloud" style={{left:pos.x,top:pos.y}}
      className='absolute  w-[50px] h-[50px] scale-image' />
      <img src={cloud} alt="cloud" style={{left:pos.x1,top:pos.y1}}
      className='absolute  w-[50px] h-[50px] scale-image' />
      <img src={cloud} alt="cloud" style={{left:pos.x2,top:pos.y2}}
      className='absolute  w-[50px] h-[50px] scale-image' />

      <h1 className="text-center  text-black
      dark:text-slate-300 my-4 capitalize text-2xl">Login</h1>
      {/* <p className="text-lg text-black text-center
dark:text-slate-300">please confirm your country 
<br /> and enter your email address</p> */}


      {/* <div className="h-[50px] border-2 flex mx-auto justify-between rounded-lg px-2 items-center" style={{
        width: "400px", maxWidth: "calc(100vw - 40px)"
      }}>
        <h2 className="text-lg">Country</h2>
        <MdOutlineChevronRight size={30} className='flex-none text-slate-300 
    h-full w-[30px]  flex items-center justify-center'/>
      </div> */}

      <div className="h-[50px] mt-8 relative 
    flex mx-auto justify-between rounded-lg  items-center " style={{
          width: "400px", maxWidth: "calc(100vw - 40px)"
        }}>
        <label htmlFor='email'
          className="absolute
    top-[-15px] bg-white px-2 dark:bg-slate-800  text-blue-500 left-4 h-[30px]">Email address</label>

        <input type="email" required
          placeholder='example@gmail.com' className='pl-4 
        flex-1 h-full border-2 rounded-xl 
    border-slate-600
    w-full transition-all duration-700 outline-none  focus:outline-none 
    valid:border-blue-500
    focus:border-blue-500' id='email' />
      </div>
      <div className="h-[50px] mt-8 relative 
    flex mx-auto justify-between rounded-lg  items-center " style={{
          width: "400px", maxWidth: "calc(100vw - 40px)"
        }}>
        <label htmlFor='password'
          className="absolute
    top-[-15px] bg-white px-2 dark:bg-slate-800 
    text-blue-500 left-4 h-[30px]">Password </label>

        <input type="password" required placeholder='password' className='pl-4 flex-1 h-full border-2 rounded-xl
    border-slate-600 valid:border-blue-500
    w-full transition-all duration-700 outline-none  focus:outline-none focus:border-blue-500' id='email' />
      </div>
      {/* <div className="h-[50px] mt-8 relative 
    flex mx-auto justify-between rounded-lg  items-center " style={{
          width: "400px", maxWidth: "calc(100vw - 40px)"
        }}>
        <label htmlFor='cpassword'
          className="absolute
    top-[-15px] bg-white px-2 dark:bg-slate-800 
    text-blue-500 left-4 h-[30px]">Confirm Password </label>

        <input type="password" placeholder='confirm password's
        className='pl-4 flex-1 h-full border-2 rounded-xl capitalize
    border-slate-600
    w-full transition-all duration-700 outline-none
    focus:outline-none focus:border-blue-500' id='cpassword' />
      </div> */}
      <div className="error h-[40px]  relative flex items-center mx-auto my-4   rounded-lg text-center justify-center bg-red-300 shadow-lg 
text-white "style={{
          width: "400px", maxWidth: "calc(100vw - 40px)"
        }}>your email validation failed</div>

      <div className="ml-auto mt-8 h-[50px] w-[50px] 
    rounded-full bg-blue-500 mr-10 flex items-center justify-center">
    
    <MdArrowBack size={30} className='text-slate-800   rotate-[180deg] dark:text-white' onClick={navigateToPreviousPage} />
    
    </div>
    </div>



  )
}

export default Auth