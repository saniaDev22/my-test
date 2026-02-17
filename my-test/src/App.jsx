import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./pages/Hero"
import Card  from './components/card'
import About from "./pages/About"

function App() {
 

  return (
    <>
       <Hero/>
       <About/>
       <div className='flex justify-center items-center gap-4'>
       <Card name="Sania" rollNo={20} pass={true} />
       <Card name="Sania" rollNo={20} pass={false} />
       <Card name="Sania" rollNo={20} pass={false} />
       <Card name="Sania" rollNo={20} pass={true} />
     
     
       </div>
      
      </>
      
  )
}

export default App
