import React from 'react';
import { useGlobalContext } from './Context';

const TextSize = () => {
  const { outputText, setOutputText } = useGlobalContext();
  const { fontSize } = outputText;

  const handleChange = (e) => {
    setOutputText((prevSize) => {
      return { ...prevSize, fontSize: e.target.value };
    });
  };

  return (
    <div className='  flex gap-2 md:gap-0 md:flex-col  items-center '>
      <h4 className='flex flex-row text-[20px] md:text-[30px] font-semibold w-fit place-self-start capitalize md:lowercase'>
        <span className='capitalize hidden md:block mr-2 '>Text</span> size
      </h4>
      <input
        className='mobile-range-slider md:range-slider my-3.5 md:my-4 '
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
