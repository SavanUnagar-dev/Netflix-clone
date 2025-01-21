import 'react'
import Language from './Language'
import { useNavigate } from 'react-router-dom'
import Carouse from './Carouse';
import Slider from './Slider';

const Navbar = () => {
    const navigate = useNavigate();
  return (
 <>
      <navbar>
    <div className='justify-between flex text-center bg-gradient-to-b from-black to-red-950 p-3'>
      <div className=''>
        <img  src="/public/imgs/netflix-logo.png"
          className="w-[10vw] h-[3.5vw] p-0 hidden mt-2 ml-5
                     md:block"
        />
        <img src="/public/imgs/netflix-icon-transparent-29.jpg"
          className='w-[6vw] h-[5vw] bg-black block 
                     md:hidden md:w-[50px] md:h-[60px]
                     xs:h-[50px] xs:w-[46px]'         
        />
      </div>
      <div className='flex justify-center text-center mt-2 gap-3'>
        <Language />
         <div className='h-[1vw] mr-4'>
           <button className='bg-slate-50 py-[3px] px-[14px] font-semibold text-black rounded-[30px] text-center justify-center flex' 
            onClick={() => navigate('/login')}>sign in</button>
         </div>
      </div>
    </div>
  </navbar>
  
  <Carouse />
  {/* <Slider /> */}
 </>
  
  )
}

export default Navbar