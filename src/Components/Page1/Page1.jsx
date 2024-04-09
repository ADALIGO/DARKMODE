import React from 'react'
import './Page1.css'
import NavBar from '../NavBar'

const Page1 = ({ theme, setTheme }) => {
   
  return (
    <div >
<NavBar theme={theme} setTheme={setTheme}/>
<span ></span>
    <div data-aos="zoom-in" className=" rounded-3xl duration-500 dark:bg-black dark:text-white">
      <div  id="carlist">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6  duration-500 dark:bg-black dark:text-white  bg-white  px-6">
          <div  className="col-span-2  space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-700">
              Let's collaborate on your upcoming car rental venture
            </h1>
            <p  className="text-pink-900 text-4xl duration-1000 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem necessitatibus quasi et vel,{" "}
            </p>
          </div>
          <div  className="sm:grid sm:place-items-center">
            <a
              href="#https://www.peugeot.ma/"
              className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase "
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page1
