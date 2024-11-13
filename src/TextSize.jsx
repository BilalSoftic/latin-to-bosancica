import React from 'react';
import { useGlobalContext } from './Context';

const TextSize = () => {
  const { text, setText } = useGlobalContext();
  const { fontSize } = text;

  const handleChange = (e) => {
    setText((prevSize) => {
      return { ...prevSize, fontSize: e.target.value };
    });
  };

  return (
    <div className=' h-fit flex flex-col  items-center '>
      <h4 className='text-[30px] font-semibold w-fit place-self-start'>
        Text size
      </h4>
      <input
        className='range-slider my-4 '
        type='range'
        min={20}
        max={100}
        value={fontSize}
        onChange={handleChange}
      />
    </div>
  );
};
export default TextSize;
