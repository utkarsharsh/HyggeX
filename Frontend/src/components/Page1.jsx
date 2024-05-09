import React from 'react'
import { useState } from 'react'
import home from '../assets/home.svg'
import logo from '../assets/logo.svg'
import reload from '../assets/reload.svg'
import large from '../assets/Large.svg'
import inlogo from '../assets/inlogo.svg'
import hyg from '../assets/hyg.svg'
import Study from './Study'
import Games from './Games'
import Quiz from './Quiz'
import Others from './Others'
import Test from './Test'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Page1 = () => {
    
const [height,setheight]=useState({h1:"70px",h2:"76px",h3:"70px"})
const [up,setup]=useState({u1:"hidden",u2:"hidden",u3:"hidden",d1:"block",d2:"block",d3:"block"})
  return (
    <div className=' flex justify-center p-3 '>

     <div className='w-5/6'>

     <div className=' sm:flex flex-row justify-center items-center  sm:items-center sm:justify-between mt-9'>
        <div className=' sm:mb:0'>
     <img src={logo} alt="" srcset="" />
        

        </div>
       
        <div>
        <li className='flex gap-6 items-center mt-8 sm:mt-0'>
            <ul>
                Home
            </ul>
            <ul>
               Flashcard
            </ul>
            <ul>
               Contact
            </ul>
            <ul>
               FAQ
            </ul>
            <button className='rounded-2xl  bg-gradient-to-b from-blue-900 to-blue-500 text-white 
             w-24 p-2
'>
                Login
            </button>
        </li>
       </div>

     </div>




   



     <div className='flex mt-10 text-[#696671] font-[Inter]'>
      <span>
        <img src={home} className='w-5 h-5'/> 
      </span>

      <span >
        <p className='ml-1'> &gt;  Flashcard &gt; Mathematics <span className=' text-blue-900'>&gt; Relation and functions</span></p>
      </span>

     </div>

     <div className='mt-14'>
     <h1 className='text-blue-900 text-[32px] font-[Montserrat] font-bold'>
     Relations and Functions ( Mathematics )
     </h1>

     </div>

     {
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Study/>} />
          <Route path='/Quiz' element={<Quiz />}/>
          <Route path='/Games' element={<Games/>} />
          <Route path='/Text' element={<Test/>} />
          <Route path='/Others' element={<Others/>} />
            </Routes>
          </BrowserRouter>
     }

<div className='w-[100%] p-2 sm:justify-between  sm:flex mt-14 items-center'>
<div className='flex sm:w-[40%]'>
    <div className='rounded-full w-[80px]  h-[80px] flex justify-center items-center shadow-xl shadow-blue-200'>
    <img src={inlogo} alt="" className='w-[45px] h-[45px]'/>
    </div>
     <div className='ml-4 h-[90%]'> 
        <p className='text-[#696671] '>
            published by
        </p>
        <img src={hyg} className='w-[80px] h-[80px] m-0 p-[0px]'/>

     </div>


</div > 

<div className='flex  items-center gap-3 sm:w-[60%] justify-end'>
    <button className='rounded-full w-[40px] h-[40px] bg-gradient-to-b from-blue-900 to-blue-500 text-xl text-white'>
   + 
    </button>
    <h1 className='text-blue-900 text-3xl font-[Inter] '>Create Flashcard</h1>

</div>


</div>


<div>

<h1 className='text-blue-900 text-4xl mt-8 font-bold mb-5 '>FAQ</h1>


</div>

<div>
    <div className={`mt-4 p-2 border-blue-600 border-2 rounded-lg sm:w-4/6 overflow-hidden `} style={{
height:height.h1

    }}>
    <div className=' flex justify-between items-center  '>
        <h1>Can education flashcards be used for all age groups?</h1>
        <p className={` font-extrabold text-[30px] ${up.u1}`} onClick={()=>{
            setup({...up,d1:"block",u1:"hidden"})
            setheight({...height,h1:"70px"});
        }}>&uarr;</p>
        <p className={`font-bold text-[30px] ${up.d1}` }   
         onClick={()=>{
            setup({...up,d1:"hidden",u1:"block"})
            setheight({...height,h1:"200px"});
        }}
        >&darr;</p>
        
    </div>
    <div className='mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ipsam libero amet a deserunt odio modi exercitationem dolores aliquam ab tenetur accusamus minus distinctio voluptatibus, dolorum reprehenderit autem, tempora necessitatibus!
        </div>
        </div>


        <div className={`mt-4 p-2 border-blue-600 border-2 rounded-lg sm:w-4/6 overflow-hidden transition ease-out duration-7000 `}
        style={{
            height:height.h2
            
                }}>
    <div className=' flex justify-between items-center transition ease-out duration-7000 '>
        <h1>Can education flashcards be used for all age groups?</h1>
        <p className={` font-extrabold text-[30px] ${up.u2}`} onClick={()=>{
            setup({...up,d2:"block",u2:"hidden"})
            setheight({...height,h2:"76px"});
        }}>&uarr;</p>
        <p className={`font-bold text-[30px] ${up.d2}` }   
         onClick={()=>{
            setup({...up,d2:"hidden",u2:"block"})
            setheight({...height,h2:"200px"});
        }}
        >&darr;</p>
        
    </div>
    <div className='mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ipsam libero amet a deserunt odio modi exercitationem dolores aliquam ab tenetur accusamus minus distinctio voluptatibus, dolorum reprehenderit autem, tempora necessitatibus!
        </div>
        </div>
        <div className={`mt-4 p-2 border-blue-600 border-2 rounded-lg sm:w-4/6 overflow-hidden transition ease-out duration-7000 `}
        style={{
            height:height.h3
            
                }}>
    <div className=' flex justify-between items-center transition ease-out duration-7000 '>
        <h1>Can education flashcards be used for all age groups?</h1>
        <p className={` font-extrabold text-[30px] ${up.u3}`} onClick={()=>{
            setup({...up,d3:"block",u3:"hidden"})
            setheight({...height,h3:"76px"});
        }}>&uarr;</p>
        <p className={`font-bold text-[30px] ${up.d3}` }   
         onClick={()=>{
            setup({...up,d3:"hidden",u3:"block"})
            setheight({...height,h3:"200px"});
        }}
        >&darr;</p>
        
    </div>
    <div className='mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ipsam libero amet a deserunt odio modi exercitationem dolores aliquam ab tenetur accusamus minus distinctio voluptatibus, dolorum reprehenderit autem, tempora necessitatibus!
        </div>
        </div>
     
       
        




</div>










     </div>



    </div>
  )
}

export default Page1