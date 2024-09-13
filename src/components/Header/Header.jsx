import React from 'react'
import icon from '../../assets/bs-icon.png'

const Header = () => {
  return (
    <header className='flex px-4 sm:px-16 sm:mx-auto my-12 justify-between items-center max-w-7xl gap-8'>
      <div className='flex items-center gap-4'>
        <div>
          <img src={icon} alt="icon" className='w-20 hidden sm:block'/>
        </div>
        <h2 className='text-2xl sm:text-4xl font-bold font-lilita'>Brawl Stars Connections</h2>
      </div>
      <div>
        <button className='bg-black text-white rounded-sm px-8 py-1 sm:py-2 leading-5'>New Game</button>
      </div>
    </header>
  )
}

export default Header