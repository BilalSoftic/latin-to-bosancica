import { useState } from 'react';
import { useGlobalContext } from './Context';
const Ligatures = () => {
  const { isLigatures, setIsLigatures } = useGlobalContext();

  const handleToggle = () => {
    setIsLigatures(!isLigatures);
  };
  return (
    <label className='inline-flex items-center cursor-pointer bg-background py-4 px-14 w-full h-[9.5rem]   justify-around border-4 border-black rounded-[22px] font-bold'>
      <input
        type='checkbox'
        value=''
        className='sr-only peer'
        checked={isLigatures}
        onChange={handleToggle}
      />
      <h4 className='text-[2.5rem]'>Ligatures</h4>
      <div
        className="relative w-[144px] h-[48.5px]  rounded-full peer peer-checked:bg-blue bg-background border-4 border-black
    after:content-[''] after:absolute     peer-checked:after:bg-white after:bg-black  after:rounded-full after:h-[40px] after:w-[40px] after:p-2 after:transition-transform after:duration-200 peer-checked:after:translate-x-24"
      ></div>
    </label>
  );
};
export default Ligatures;
