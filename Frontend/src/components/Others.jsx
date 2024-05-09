import React from 'react'
import sound from '../assets/sound.svg'
import { useState } from 'react'
import home from '../assets/home.svg'
import logo from '../assets/logo.svg'
import reload from '../assets/reload.svg'
import large from '../assets/Large.svg'
import inlogo from '../assets/inlogo.svg'
import hyg from '../assets/hyg.svg'
import { useNavigate } from 'react-router-dom'
import light from '../assets/light.svg'

const Others = () => {
    const navigate =useNavigate();
    const [counter,setcounter]=useState(0);
    let value=["Others","Value 2","Value 3","Value 4","Value 5","Value 6","Value 7","Value 8","Value 9","Value 10"]
  return (
    <div>

<div className='flex justify-center items-center mt-14 '>
       
       <li className='flex gap-6 items-center font-[30px] text-[#696671] font-[Inter] '>
           <ul  onClick={()=>{navigate('/')}}>
               Study
           </ul>
           <ul onClick={()=>{navigate('/Quiz')}}>
              Quiz
           </ul>
           <ul onClick={()=>{navigate('/Text')}}>
              Text
           </ul>
           <ul onClick={()=>{navigate('/Games')}}>
              Games
           </ul>
           <ul onClick={()=>{navigate('/Others')}} className=' border-b-2 border-blue-950 text-blue-900 text-[Inter]'>
              Others
           </ul>
</li>
    </div>
    <div className='flex items-center justify-center flex-col mt-6 w-[100%]'>
  <div className='relative bg-gradient-to-b from-blue-900 to-blue-500 w-[97%] sm:w-[70%] md:w-[50%] h-[450px] rounded-2xl flex justify-center items-center'>
    <img src={sound} className='absolute right-6 top-6'/>
    <img src={light} className='absolute left-6 top-6'/>
{
    <h1 className='text-white'>{value[counter]}</h1>
}
  </div>


  <div className='flex w-[100%] justify-center items-center mt-6'>
    <div className='flex  justify-evenly w-[90%] sm:w-[70%] items-center'>
<div>
    <img src={reload} alt="" srcset="" onClick={()=>{ setcounter(0)}} />
</div>
<div  className='flex gap-3 justify-center items-center'>
    <button className='w-[60px] h-[60px] bg-gradient-to-b from-blue-900 to-blue-500 text-white text-center
     rounded-full text-2xl
    ' onClick={()=>{if (counter>0) setcounter(counter-1)}}>
&lt;
    </button>

    <p className=' font-semibold text-[19px]'>
        {counter+1}/10
    </p>

    <button className='w-[60px] h-[60px] bg-gradient-to-b from-blue-900 to-blue-500 text-white text-center
     rounded-full text-2xl
    '         onClick={()=>{if (counter<9) setcounter(counter+1)}}>
&gt;
    </button>

 
  </div>
<div>
<img src={large} alt="" srcset="" />
</div>

  </div>
  
  </div>
  </div>

    </div>
  )
}

export default Others