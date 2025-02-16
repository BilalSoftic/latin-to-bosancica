import { useState } from 'react';

const ColorTheme = () => {
  const [selectedId, setSelectedId] = useState('light');

  const handleButtonClick = (id) => {
    setSelectedId(id);
  };

  return (
    <label className='inline-flex items-center cursor-pointer  w-full   font-bold'>
      <input
        type='checkbox'
        value=''
        className='sr-only peer'
        /*  checked={isLigatures}
        onChange={handleToggle} */
      />
      <h4 className='text-[20px] lg:text-[30px]  w-10 md:w-24 mr-5 h-full capitalize  leading-none'>
        color theme
      </h4>
      <div className=' md:hidden h-1 bg-background rounded flex-1 mx-3'></div>
      <div className='flex flex-row gap-6 lg:gap-12 mr-4'>
        {/* Black and white */}
        <div className='relative flex items-center justify-center w-[38px] h-[38px] lg:w-[49px] lg:h-[49px] '>
          {/* Black Background Circle */}
          <div className='absolute w-[38px] h-[38px] lg:w-[49px] lg:h-[49px] bg-black rounded-full'></div>
          {/* White Foreground Circle (Slightly Smaller) */}
          <div className='absolute left-4 lg:left-6 w-[38px] h-[38px] lg:w-[49px] lg:h-[49px] border-4 border-black bg-white rounded-full'></div>
        </div>
        {/* Black and white */}
        <div className='relative flex items-center justify-center w-[38px] h-[38px] lg:w-[49px] lg:h-[49px] '>
          {/* Black Background Circle */}
          <div className='absolute w-[38px] h-[38px] lg:w-[49px] lg:h-[49px] bg-black rounded-full'></div>
          {/* White Foreground Circle (Slightly Smaller) */}
          <div className='absolute left-4 lg:left-6 w-[38px] h-[38px] lg:w-[49px] lg:h-[49px] border-4 border-black bg-white rounded-full'></div>
        </div>
        {/* Black and white */}
        <div className='relative flex items-center justify-center w-[38px] h-[38px] lg:w-[49px] lg:h-[49px] '>
          {/* Black Background Circle */}
          <div className='absolute w-[38px] h-[38px] lg:w-[49px] lg:h-[49px] bg-black rounded-full'></div>
          {/* White Foreground Circle (Slightly Smaller) */}
          <div className='absolute left-4 lg:left-6 w-[38px] h-[38px] lg:w-[49px] lg:h-[49px] border-4 border-black bg-white rounded-full'></div>
        </div>
      </div>
    </label>
  );
};

export default ColorTheme;
