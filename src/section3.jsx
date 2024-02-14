import React from 'react'
import { Contact, Hero, StarsCanvas, Works3 } from './components'

const Section3 = () => {
  return (
    <div className='relative z-0 bg-primary'>
       <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
           <Hero />
         </div>
         <StarsCanvas />
         <Works3/>
         <div className='relative z-0'>
           <Contact />
           <StarsCanvas />
         </div>
       </div>
  )
}

export default Section3