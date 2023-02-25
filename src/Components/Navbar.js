import React,{useState} from "react";
import Login from "./Login";
 
function Navbar() {
 
  const [showNav,setNav] =useState(false);

  const handleClick = ()=>setNav(false);
  
  return (
    <nav className="fixed w-full z-10 bg-blue-100 border-b-2 border-gray-800 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img src="" className="h-6 mr-3 sm:h-9" alt="Logo" />
          <span className="self-center text-3xl  font-extrabold whitespace-nowrap dark:text-white">
            SS
          </span>
        </a>
        <div className="flex space-x-3 md:order-2">
          <button
            onClick={() => setNav(true)}
            type="button"
            className="text-white bg-gray-800 hover:bg-green-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
          >
            Log In
          </button>
          <button
            type="button"
            className="text-white bg-rose-400 hover:bg-red-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
          >
            Sign up
          </button>
        </div>
      </div>
      {showNav && <Login closeNave ={handleClick}/>}
    </nav>
  );
}

export default Navbar;
