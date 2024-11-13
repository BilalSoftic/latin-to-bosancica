import React from 'react';
import brush from './assets/brush.svg';
import { useGlobalContext } from './Context';
const StyleText = () => {
  const { openModal } = useGlobalContext();
  return (
    <button
      type='button '
      className=' rounded-custom-radius  font-semibold bg-black w-[22rem] h-full text-white gap-5 flex items-center justify-center'
      onClick={openModal}
    >
      <img src={brush} alt='brush.svg' />
      <h4 className='text-3xl leading-none '>Stylize text</h4>
    </button>
  );
};
export default StyleText;
