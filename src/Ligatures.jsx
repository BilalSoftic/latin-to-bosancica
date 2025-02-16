import { useState } from 'react';
import { useGlobalContext } from './Context';
const Ligatures = () => {
  const { isLigatures, setIsLigatures } = useGlobalContext();

  const handleToggle = () => {
    setIsLigatures(!isLigatures);
  };
  return (
    <label className='inline-flex items-center cursor-pointer  w-full    justify-between  font-bold'>
      <input
        type='checkbox'
        value=''
        className='sr-only peer'
        checked={isLigatures}
        onChange={handleToggle}
      />
      <h4 className=' text-[20px] lg:text-[30px]'>Ligatures</h4>
      <div className=' md:hidden h-1 bg-background rounded flex-1 mx-3'></div>
      <div
        className="relative w-[84px] h-[37px] md:w-[105px] md:h-[42px] lg:w-[135px] lg:h-[54px]  rounded-full peer peer-checked:bg-black bg-background border-4 border-black
    after:content-[''] after:absolute     peer-checked:after:bg-white after:bg-black  after:rounded-full after:h-[25px] after:w-[25px] md:after:h-[30px] md:after:w-[30px]   lg:after:h-[37px] lg:after:w-[37px] after:m-0.5  lg:after:m-1 after:transition-transform after:duration-200 peer-checked:after:translate-x-12 md:peer-checked:after:translate-x-16 lg:peer-checked:after:translate-x-20"
      ></div>
    </label>
  );
};
export default Ligatures;
