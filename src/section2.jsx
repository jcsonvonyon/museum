import React from 'react'
import { Contact, Hero, StarsCanvas, Works } from './components'

const Section2 = () => {
  return (
    <div className='relative z-0 bg-primary'>
       <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
           <Hero />
         </div>
         <StarsCanvas />
         {/* <About />
         <Tech /> */}
         <Works />
         {/* <Feedbacks /> */}
         <div className='relative z-0'>
           <Contact />
           <StarsCanvas />
         </div>
       </div>
  )
}

export default Section2