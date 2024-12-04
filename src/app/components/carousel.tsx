'use client'
import React, { useState } from 'react';

type CarouselProps = {
  approach: string[];
};

const Carousel: React.FC<CarouselProps> = ({ approach }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % approach.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? approach.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidde place-content-center">
        <div className='text-white h-52 w-[100%] border-2  rounded-3xl border-white mb-80 text-center'>
            <p className='text-[25px]'>{approach[currentIndex]}</p>
        </div>
      </div>
      <button
        onClick={goToNext}
        className="absolute top-1/2 font-extrabold text-[25px] left-1/2 transform -translate-y-1/2 text-white p-2 hover:scale-110"
      >
        &gt;
      </button>
      <button
        onClick={goToPrev}
        className="absolute top-1/2 font-extrabold text-[25px] right-1/2 transform -translate-y-1/2 text-white p-2 hover:scale-110"
      >
        &lt;
      </button>
    </div>
    );
};

export default Carousel;
