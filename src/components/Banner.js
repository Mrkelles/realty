import React from 'react';
import Image from '../assets/img/banner.jpg';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:pr-6 lg:px-0'>
          <h1 className='text-xl lg:text-[18px] text-violet-700 font-semibold leading-none mb-2'>OELLO REALTORS</h1>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Buy</span> Your Dream Property With
            Us.
          </h1>
          <p className='max-w-[480px] mb-8'>
            Dont't be a victim of inflation. Protect your wealth for the future. Protect your family's future. Purchase Landed Assets today!!!
          </p>
        </div>
        <div className='flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
      <br/><br/>
      <Search/>
    </section>
  );
};

export default Banner;
