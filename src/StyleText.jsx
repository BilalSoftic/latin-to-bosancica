import React from 'react';
import brush from './assets/brush.svg';
import { useGlobalContext } from './Context';
const StyleText = () => {
  const { openModal } = useGlobalContext();
  return (
    <button
      type='button '
      className=' rounded-custom-radius  font-semibold bg-black w-full h-full text-white gap-1 lg:gap-5 flex items-center justify-center'
      onClick={openModal}
    >
      <img src={brush} alt='brush.svg' className='size-[34px] md:size-[49px]' />
      <h4 className='hidden md:block text-[20px] lg:text-[26px] leading-[1.1] text-start w-[3.7rem] lg:w-[6rem]'>
        Stylize text
      </h4>
      <h4 className='  md:hidden text-[26px] leading-[1.1] text-start lg:w-[6rem]'>
        Style
      </h4>
    </button>
  );
};
export default StyleText;
