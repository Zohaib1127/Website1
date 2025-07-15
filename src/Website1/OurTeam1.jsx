import React from 'react'
import ElonMuskTwitterCEO from"../assets/Elon Musk Twitter CEO.jpg";
import ManagingDirector from "../assets/Managing Director.jpg";
import VCEO from "../assets/VCEO.jpg";
const OurTeam1 = () => {
  return (
    <div className='bg-gray-700 pt-24 h-screen'>
      <div className="flex flex-col items-center">
      <h2 className="text-3xl font-serif italic text-white">Our Team</h2>
      <hr className="w-40 bg-white mb-6 mt-2"></hr>
    </div >
    
    <div className='grid gap-8 md:grid-cols-2  lg:grid-cols-3 px-8 '>
    <div className="w-[30vw] bg-transparent  border-4  border-white border-double  hover:cursor-pointer  hover:border-dotted hover:scale-105 transition duration-700">
         <img src={ElonMuskTwitterCEO} alt=""className=' h-[18rem]'/>
         <h1 className='text-center font-serif text-pink-300  text-lg mt-6 font-bold italic'>Elon  Musk</h1>
         <h2 className='italic text-white text-lg text-center font-bold'>CEO & Founder</h2>
         <h3 className='italic text-red-500 text-lg text-center pb-2 font-bold'>WEB Devoloper & Programer</h3>
        </div>
        {/* div2 */}
        <div  className="w-[30vw] bg-transparent  border-4 border-white border-double  hover:cursor-pointer  hover:border-dotted hover:scale-105 transition duration-700">
         <img src={VCEO} alt=""className=' h-[18rem]'/>
         <h1 className='text-center font-serif text-pink-300  text-lg mt-6 font-bold italic'>Hira Virk</h1>
         <h2 className='italic text-white text-lg text-center font-bold'>VCEO & Planner</h2>
         <h3 className='italic text-red-500 text-lg text-center pb-2 font-bold'>IT Expert</h3>
        </div>
       {/* div3 */}
        <div  className="w-[30vw] bg-transparent  border-4  border-white border-double  hover:cursor-pointer  hover:border-dotted hover:scale-105 transition duration-700">
         <img src={ManagingDirector} alt=""className=' h-[18rem]'/>
         <h1 className='text-center font-serif text-pink-300  text-lg mt-6 font-bold italic'>Mahrukh Jutt</h1>
         <h2 className='italic text-white text-center font-bold'>Managing & Director</h2>
         <h3 className='italic text-red-500 text-lg text-center pb-2 font-bold'>WEB Designer</h3>
        </div>
    </div>
    </div>
  )
}

export default OurTeam1;