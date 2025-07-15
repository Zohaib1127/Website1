import React from 'react'
import company from "../assets/company.jpg";
import img2 from "../assets/img2.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img7 from "../assets/img7.jpg";
import img9 from "../assets/img9.jpg";
import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import img6 from "../assets/img6.jpg";

const ImageGallery = () => {
  return (
    <div className='bg-gray-700 pt-20 ' >
      <div>
        <h2 class="text-3xl font-serif italic pt-4 text-center text-white">Image Gallery</h2>
      <hr class="w-56  mx-auto bg-white mt-3"></hr>
      </div>
      <div className='flex flex-col gap-y-7 '>
      {/* div1 */}
      <div className='grid gap-8 justify-evenly  md:grid-cols-2 lg:grid-cols-3 items-center   mt-10 px-2  hover: cursor-pointer'> 
        <img src={company} alt="" className=' w-[23rem] h-[14rem] border rounded-xl opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
        <img src={img2} alt="" className=' w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
        <img src={img4} alt="" className=' w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
         <img src={img7} alt="" className='w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
        <img src={img5} alt="" className='w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
        <img src={img9} alt="" className='w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
         <img src={img3} alt="" className='w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
        <img src={img1} alt="" className='w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
        <img src={img6} alt="" className='w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
      </div>
      {/* div2 */}
     {/* <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20 px-2 justify-evenly items-center hover: cursor-pointer'>
        <img src={img7} alt="" className='w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
        <img src={img5} alt="" className='w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
        <img src={img9} alt="" className='w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
      </div> */}
      {/* div3 */}
      {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 px-2 justify-evenly pb-12 items-center hover: cursor-pointer'>
        <img src={img3} alt="" className='w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
        <img src={img1} alt="" className='w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
        <img src={img6} alt="" className='w-[23rem] h-[14rem] border rounded-xl  opacity-40 hover:opacity-100 hover:scale-125 transition duration-700 shadow-md'/>
      </div></div> */}
      </div></div>
  )
}

export default ImageGallery;