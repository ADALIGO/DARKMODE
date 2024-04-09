import React from 'react'
import './Page2.css'
import NavBar from '../NavBar'
const Page2 = ({ theme, setTheme }) => {
  return (
    <div>
    <NavBar  theme={theme} setTheme={setTheme}/>
     <h1 className='COLOR-TEXT2'>PAGE 2 GOOD</h1> 
    </div>
  )
}

export default Page2
