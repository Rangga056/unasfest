import React from 'react'
import FinalisSlider from './FinalisPosters'
import FinalisPosters from './FinalisPosters'

const FinalisSMC = () => {
  return (
    <div className='container'>
      <div className='text-center'>
      <h1 className='font-bungee text-2xl md:text-5xl'>Finalist short movie competition</h1>
      <p className='text-xs md:text-xl capitalize mt-2'>finalist with the best short movie </p>
      </div>
      <div>
        {/* Swiper finalis */}
        <FinalisPosters/>
      </div>
    </div>
  )
}

export default FinalisSMC
