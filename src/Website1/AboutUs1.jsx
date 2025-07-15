import React from 'react'
import company from "../assets/company.jpg"
const AboutUs1 = () => {
  return (
    <div className='bg-gray-700 pt-20 pb-8'>
    <div class="text-center mb-12 pt-5">
      <h2 class="text-3xl font-semibold italic text-white">About Us</h2>
      <hr className="w-40  mx-auto bg-white mt-2"></hr>
    </div>
    <div className='sm:flex justify-around items-center pb-24'>
<img src={company} alt="" className='max-w-[26rem] mx-auto h-72 border border-dotted  border-white'/>
        <p className="max-w-[32rem] pt-5  mx-auto text-base  text-justify font-semibold text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, animi, 
          voluptas alias mollitia consequuntur ut, dolor excepturi minus doloribus 
          iste explicabo doloremque! Corporis sequi sit fugiat optio est maxime neque.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Recusandae accusantium voluptatibus magnam facilis quaerat repellat corporis saepe 
          quam laboriosam voluptate iusto, perferendis possimus. Est accusantium laborum 
          vitae reprehenderit cum. Voluptas?
        </p>
      
      </div>
    
    </div>
    
  )
}

export default AboutUs1