import React from 'react';

const ContactUs1 = () => {
  return (
    <div className="bg-gray-700 text-white pt-20 px-4">
      {/* Heading */}
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-4xl font-semibold italic border-b-2 inline-block px-4">Contact Us</h1>
      </div>

      {/* Container */}
      <div className="flex flex-col lg:flex-row pb-20 gap-6">
        
        {/* Left Side Text */}
        <div className="bg-black text-white w-full lg:w-1/2 p-6">
          <h2 className="text-yellow-400 text-xl md:text-2xl italic font-serif mb-4">
            <b>CONTACT US FORM</b>
          </h2>
          <p className="text-sm md:text-base italic text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda voluptates corporis quos praesentium ipsum quod itaque, dolores labore facilis soluta modi, perferendis doloremque saepe dolorem laudantium velit amet eius.
            Officiis sunt, delecti quae, mollitia harum fuga aut repellendus veritatis unde quis nam fugit quam nihil dignissimos eligendi, ipsum error quod quasi? Sequi autem facilis pariatur error quia.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="bg-white text-black w-full lg:w-1/2 p-6 rounded-md shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-800 font-semibold italic mb-1">YOUR NAME :</label>
              <input
                type="text"
                className="w-full border border-black p-2 rounded-md"
                placeholder="ENTER YOUR NAME......"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold italic mb-1">EMAIL ADDRESS :</label>
              <input
                type="email"
                className="w-full border border-black p-2 rounded-md"
                placeholder="ENTER YOUR EMAIL......"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold italic mb-1">MESSAGE :</label>
              <textarea
                rows="6"
                className="w-full border border-black p-2 rounded-md"
                placeholder="ENTER YOUR MSG....."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-500 hover:bg-green-500 text-white italic font-semibold py-2 px-10 rounded-2xl border border-black hover:scale-105 transition duration-700"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs1;
