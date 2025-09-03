import React from 'react'
import Video from '../Components/Home/Video'
import Herotext from '../Components/Home/Herotext'
import Bottomtext from '../Components/Home/Bottomtext'

const Home = () => {
  return (
    <div className='text-white'>
        <div className='VIDEO h-screen w-screen fixed '>
        <Video/>
    </div>
    <div className='TEXTS h-screen w-screen relative flex flex-col justify-between'>
        <Herotext />
        <Bottomtext />
    </div>
    </div>
  )
}

export default Home