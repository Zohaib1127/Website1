import React from 'react'
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
const OurServices = () => {
  return (
        <div>
            <div className='bg-gray-700 pt-20 '>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif pt-4 italic text-white">Our Services</h2>
                  <hr className="w-52  mx-auto bg-white mt-2"></hr>
                </div>
                
                <div className='grid px-10 gap-5 items-center md:grid-cols-2 lg:grid-cols-3 pb-12'>
              {/* div1 */}
            <div className="max-w-[50vw] p-6 flex flex-col bg-black border border-white shadow-md shadow-white hover:cursor-pointer hover:scale-110 transition duration-700">
                    <h2 className="bg-sky-100 text-black text-center font-serif text-2xl mb-4  italic">FREE</h2>
                    <h3 className="  text-center py-4 font-serif text-white italic text-5xl font">Price</h3>
                    <h3 className=" text-center pb-10 font-serif text-white italic text-2xl">$ 0.00 / Month</h3>
                    <hr className='' />
                   <p className='font-serif text-center px-3 mt-4 ml-5 text-white py-4 text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptatum iusto a facilis minus ex dicta eaque nesciunt reprehenderit eligendi corrupti, qui culpa quas quo consectetur dolores id? Ipsum, incidunt.
                   </p>
                  
            <div className='flex  gap-[8rem] mt-14 pl-9'>
                 <p className='text-white font-serif'> Get Information</p>
                   <TiTick className='text-white text-2xl'/>
                    </div>
                    <div className='flex  gap-x-40 mt-4 pl-9'> <p className='text-white font-serif'>
                    Services
                   </p><RxCross2 className='text-white text-2xl'/>
                    </div>
                   <div className='flex  gap-x-36 mt-4 pl-9'> <p className='text-white font-serif'>
                    Pacakages
                   </p><RxCross2 className='text-white  text-2xl'/>
                    </div>
                   
                </div>
                {/* div2 */}
                <div className="max-w-[50vw] p-6 flex flex-col bg-black border border-white shadow-md shadow-white hover:cursor-pointer hover:scale-110 transition duration-700">
                    <h2 className="bg-sky-100 text-black text-center font-serif text-2xl mb-4  italic">PROFESSIONAL</h2>
                    <h3 className="  text-center py-4 font-serif text-white italic text-5xl font">Price</h3>
                    <h3 className=" text-center pb-10 font-serif text-white italic text-2xl">$5.00/Month</h3>
                    <hr/>
                   <p className='font-serif text-center px-3 mt-4 ml-5 text-white py-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptatum iusto a facilis minus ex dicta eaque nesciunt reprehenderit eligendi corrupti, qui culpa quas quo consectetur dolores id? Ipsum, incidunt.
                   </p>
                  
            <div className='flex  gap-[8rem] mt-14 pl-9'>
                 <p className='text-white font-serif'> Get Information</p>
                   <TiTick className='text-white text-2xl'/>
                    </div>
                    <div className='flex  gap-x-40 mt-4 pl-9'> <p className='text-white font-serif'>
                    Services
                   </p><TiTick className='text-white text-2xl'/>
            
                    </div>
                   <div className='flex  gap-x-36 mt-4 pl-9'> <p className='text-white font-serif'>
                    Pacakages
                   </p><TiTick className='text-white text-2xl'/>
                    </div>
                   
                </div>
                {/* div3 */}
                <div className="max-w-[50vw] p-6 flex flex-col bg-black border border-white shadow-md shadow-white hover:cursor-pointer hover:scale-110 transition duration-700">
                    <h2 className="bg-sky-100 text-black text-center font-serif text-2xl mb-4  italic">ENTERPRICE</h2>
                    <h3 className="  text-center py-4 font-serif text-white italic text-5xl font">Price</h3>
                    <h3 className=" text-center pb-10 font-serif text-white italic text-2xl">$1.00/Month</h3>
                    <hr/>
                   <p className='font-serif text-center px-3 mt-4 ml-5 text-white py-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptatum iusto a facilis minus ex dicta eaque nesciunt reprehenderit eligendi corrupti, qui culpa quas quo consectetur dolores id? Ipsum, incidunt.
                   </p>
                  
            <div className='flex  gap-[8rem] mt-14 pl-9'>
                 <p className='text-white font-serif'> Get Information</p>
                   <TiTick className='text-white text-2xl'/>
                    </div>
                    <div className='flex  gap-x-40 mt-4 pl-9'> <p className='text-white font-serif'>
                    Services
                   </p><TiTick className='text-white text-2xl'/>
            
                    </div>
                   <div className='flex  gap-x-36 mt-4 pl-9'> <p className='text-white font-serif'>
                    Pacakages
                   </p><RxCross2 className='text-white text-2xl'/>
                    </div>
                </div>
            
                    </div>
                </div> 
        </div>
  )
}

export default OurServices