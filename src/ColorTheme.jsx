import { useState } from 'react';

const ColorTheme = () => {
  const [selectedId, setSelectedId] = useState('light');

  const handleButtonClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className=' col-span-2 flex align-middle justify-start h-fit font-bold  py-11 px-24  gap-10  '>
      <h4 className=' text-[2.5rem] w-32 h-full capitalize  leading-none py-8'>
        color theme
      </h4>

      <div className=' flex flex-col gap-4 '>
        {/* light button */}
        <button
          id='light'
          className={` w-28 border-4 border-black rounded-custom-radius  p-3 text-xl ${
            selectedId === 'light'
              ? 'bg-blue text-white'
              : 'bg-background text-black'
          }`}
          type='button'
          onClick={() => handleButtonClick('light')}
        >
          Light
        </button>
        {/* dark button */}
        <button
          id='dark'
          className={`w-28 border-4 border-black rounded-custom-radius  p-3 text-xl ${
            selectedId === 'dark'
              ? 'bg-blue text-white'
              : 'bg-background text-black'
          }`}
          type='button'
          onClick={() => handleButtonClick('dark')}
        >
          Dark
        </button>
      </div>
    </div>
  );
};

export default ColorTheme;
