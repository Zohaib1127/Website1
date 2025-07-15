import React, { useEffect, useRef, useState } from 'react';

const Bg1 = () => {
  const itemsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to the current slide
//   useEffect(() => {
//     itemsRef.current[currentIndex]?.scrollIntoView({ behavior: 'smooth' });
//   }, [currentIndex]);

  return (
    <div>
      <div className="carousel w-full">
        {[
          "https://images.pexels.com/photos/20243345/pexels-photo-20243345.jpeg",
          "https://images.pexels.com/photos/9579325/pexels-photo-9579325.jpeg",
          "https://images.pexels.com/photos/17041278/pexels-photo-17041278/free-photo-of-young-woman-in-jacket-on-pathway.jpeg",
          "https://images.pexels.com/photos/6271709/pexels-photo-6271709.jpeg",
        ].map((src, index) => (
          <div
            key={index}
            className="carousel-item w-full"
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <img src={src} className="w-full object-cover h-[90vh]" />
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`btn btn-xs ${currentIndex === index ? 'btn-primary' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Bg1;
