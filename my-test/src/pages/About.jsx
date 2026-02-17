import React from 'react'
import Image from "../assets/imageone.jpeg"

const About = () => {
  return (
    <div>
      <h1 className=' text-1xl md:text-6xl m-20 text-white bg-green-950'>Empowering your success with digital expertise</h1>

      <div>
         <div className=' md:flex md:items-center justify-between'>
      <div className=' p-10 '>
        
       <div className='border rounded-lg border-amber-50  md:flex items-center justify-center  '>
        <img className='h-50 w-50 md:h-[30%] md:w-[40%] object-cover rounded-2xl' src='https://thumbs.dreamstime.com/b/portrait-successful-business-people-working-together-corporate-office-portrait-successful-business-people-working-258098524.jpg '></img>
        
        <div> <p className='p-10 text-[10px] md:text-[20px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda illo tenetur eligendi praesentium enim velit laudantium ex delectus accusamus dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sequi aliquam officiis minus rem odit voluptatem minima itaque consequatur similique dolore et nesciunt cum animi, est temporibus ipsa in ratione..</p></div>
      </div> 
      </div>
       
       
    </div>
      </div>
      <div className=' md:flex md:items-center justify-between'>
      <div className=' p-10 '>
        
       <div className='border rounded-lg border-amber-50  md:flex items-center justify-center  '>
        <img className='h-50 w-50 md:h-[30%] md:w-[40%] object-cover rounded-2xl' src='https://thumbs.dreamstime.com/b/portrait-successful-business-people-working-together-corporate-office-portrait-successful-business-people-working-258098524.jpg '></img>
        
       
        <img className='h-50 w-50 md:h-[30%] md:w-[40%] object-cover rounded-2xl' src={Image}></img>
     
      </div> 
      </div>
      </div>
      

      <div className='md:flex justify-center items-center gap-x-30 m-20'>
        <div> 
            <h1 className='md:text-5xl font-extrabold'>3k+</h1>
            <p className='text-sm text-black'>Happy Clients</p>
        </div>
         <div> 
            <h1 className='md:text-5xl font-extrabold'>3k+</h1>
            <p className='text-sm text-black'>Happy Clients</p>
        </div>
        <div> 
            <h1 className='md:text-5xl font-extrabold'>3k+</h1>
            <p className='text-sm text-black'>Happy Clients</p>
        </div><div> 
            <h1 className='md:text-5xl font-extrabold'>3k+</h1>
            <p className='text-sm text-black'>Happy Clients</p>
        </div>
      </div>
        
    </div>
    
  )
}

export default About
