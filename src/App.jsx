import Modal from './Modal';
import StyleText from './StyleText';
import TextSize from './TextSize';
import TextOutput from './TextOutput';
import TextInput from './TextInput';
import GlyphMap from './GlyphMap';
import PictureModal from './PictureModal';

export default function App() {
  return (
    <div className='font-satoshiBold  flex items-center justify-center h-screen w-full bg-background '>
      {/* main grid container */}
      <div className='container grid h-full w-full  grid-cols-1 grid-rows-[auto,20rem,1fr] gap-3  '>
        {/* main header row */}
        <div className='mainHeader font-semibold mt-[4rem]  row-start-1 col-start-1  flex items-center justify-start'>
          {/* main header */}
          <h1 className='text-blue  text-[5rem] leading-none tracking-tight pb-4'>
            Latin to <span className='text-black font-bold'>Bosančica</span>
          </h1>
        </div>

        {/* text input,style and size row */}
        <div className='item3 grid grid-cols-2 grid-rows-2  mr-[50px] gap-x-[7.5rem]  gap-y-[3.5rem]  '>
          {/* text input */}
          <TextInput />

          {/* style text */}
          <div className='styleText col-start-2 row-start-1 gap-16  flex items-center justify-start'>
            <GlyphMap />
            <StyleText />
          </div>

          {/* text size */}
          <div className=' col-start-2 row-start-2 border-4 rounded-custom-radius   border-black   px-10  gap-4 h-full    rangeWrapper    bg-blue text-white flex flex-col justify-around '>
            <TextSize />
          </div>
        </div>

        {/* text output */}

        <TextOutput />

        {/* Modal */}
        {<Modal />}

        {/* Picture Modal */}
        <PictureModal />
      </div>
    </div>
  );
}
