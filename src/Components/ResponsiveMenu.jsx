import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { Navlinks } from "../Components/NavBar";
import { ReactDOM } from 'react-dom/client';

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "right-0" : "-right-[100%]" 
      } overflow-x-hidden fixed bottom-50  top-50 z-20 flex h-screen w-[20%] flex-col justify-between bg-white/80 dark:bg-black/80 dark:text-white px-2 pb-9 pt-8 text-black transition-all duration-200 md:hidden  shadow-md`}
    >
      <div className="card">
        
        <nav className="text-sm">
          <ul className="text-sm ">
            {Navlinks.map((data) => (
              <li>
                <a href={data.link} className="mb-1 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
     
          by❤<a href="https://dilshad-ahmed.github.io/">NFD</a>{" "}
   
      </div>
    </div>
  );
};

export default ResponsiveMenu;
