import React from 'react'

const Hero = () => {
  return (
    <div>

   
    <div className=' md:flex items-center justify-center'>
      <div className=' p-10 '>

        <h1 className=' text-1xl md:text-7xl'>Empowering your success with digital expertise</h1>
        <p className='p-10 text-[10px] md:text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda illo tenetur eligendi praesentium enim velit laudantium ex delectus accusamus dolor.</p>
        <div className='gap-x-10 flex items-center justify-center'>
              <button className='bg-[#20451d] p-4 text-white border rounded-lg text-[5px] md:text-2xl hover:cursor-pointer hover:bg-green-400 '>Explore new  </button>
    <button className='bg-[#f2f8f1] p-4 text-black border rounded-lg text-[5px] md:text-2xl hover:bg-green-400 '>Explore new  </button> </div>
       
      </div>

      <div className='border rounded-lg border-amber-50 items-center justify-center  '>
        <img className='h-50 w-50 md:h-screen md:w-full object-cover rounded-2xl' src='https://thumbs.dreamstime.com/b/portrait-successful-business-people-working-together-corporate-office-portrait-successful-business-people-working-258098524.jpg '></img>
      </div>
       
    </div>

     </div>
    
  )
}

export default Hero
