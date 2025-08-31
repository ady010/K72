import React from 'react'
import { Link } from 'react-router-dom'    
import Projects from '../../Pages/Projects'
import Agency from '../../Pages/Agency'

const Bottomtext = () => {
  return (
    <div className='  font-[font2] uppercase flex justify-center items-center gap-6 mb-2'>
        <Link to="/projects" className=' hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6.6vw] border-4 rounded-full px-10 leading-[4.5vw] pt-5'>Projets</Link>
        <Link to="/agency" className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6.6vw] border-4 rounded-full px-10 leading-[4.5vw] pt-5'>Agence</Link>
    </div>
  )
}

export default Bottomtext