import React from 'react'
import Image from "../assets/react.svg"

const Card = (props) => {
  return (
    <div className='border-2 rounded-2xl shadow-2xl w-full md:w-[50%] m-10 p-10 text-center flex-col items-center justify-center gap-x-10  '>
        <div className='flex flex-col'>
         <img src={Image} alt="image" className=" items-center flex-col justify-center" />    
      <h1 className='text-[10px] md:text-4xl font-bold'>{props.name}</h1>
     
      <h3 className='text-[10px] md:text-2xl'>{props.rollNo}</h3>
      <p className='text-[10px] md:text-2xl '>{props.pass ? "Pass" : "Fail"}</p>
      </div>
    </div>
  )
}

export default Card
