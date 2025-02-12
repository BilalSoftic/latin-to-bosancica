import Modal from './Modal';
import StyleText from './StyleText';
import TextSize from './TextSize';
import TextOutput from './TextOutput';
import TextInput from './TextInput';
import GlyphMap from './GlyphMap';
import PictureModal from './PictureModal';
import DownloadPdf from './DownloadPdf';

export default function App() {
  return (
    <div className='font-satoshiBold flex items-center justify-center md:min-h-screen w-full bg-background overflow-y-auto'>
      {/* main grid container */}
      <div className='container grid h-screen md:h-auto max-w-[90rem] mx-[2rem] grid-cols-1 grid-rows-[auto,auto,1fr] lg:grid-rows-[auto,20rem,auto] md:gap-3'>
        {/* main header row */}
        <div className='mainHeader font-semibold my-[1.9rem] md:mt-[4rem] md:mb-[2rem] row-start-1 col-start-1 flex items-center justify-start'>
          <h1 className='text-black text-[2.25rem] md:text-[5rem] leading-none tracking-tight md:pb-4'>
            Latin to{' '}
            <span className='underline-animation text-black font-bold'>
              Bosančica
            </span>
          </h1>
        </div>

        {/* text input, style, and size row */}
        <div className='grid grid-cols-1 md:grid-cols-[1fr,auto] grid-rows-[1fr,1fr] md:grid-rows-1 gap-[1.25rem] md:gap-x-[2.5rem]'>
          <TextInput />
          <div className='grid grid-rows-[5rem,2.9rem] md:grid-rows-[7rem,7rem] lg:grid-rows-2 grid-cols-[1fr,10rem,1fr] md:grid-cols-[6.875rem,11.25,6.563rem] lg:grid-cols-[13.125rem,18.125rem,10rem] md:col-start-2   h-full gap-[1.25rem]'>
            <div className='lg:col-start-1 lg:row-start-1 flex items-center justify-start'>
              <GlyphMap />
            </div>
            <div className='md:col-start-2 md:max-w-[21.5rem] flex items-center justify-start'>
              <StyleText />
            </div>
            <div className='col-start-3 row-start-1 lg:row-span-2 w-full bg-black lg:bg-transparent border-black border-4 rounded-custom-radius'>
              <DownloadPdf />
            </div>
            <div className='md:col-start-1 col-span-3 lg:col-span-2 border-4 rounded-custom-radius h-full border-black py-[0.15rem] px-6 md:px-10 md:gap-4 bg-transparent text-black flex flex-col justify-around'>
              <TextSize />
            </div>
          </div>
        </div>

        {/* text output row */}
        <TextOutput />

        {/* Modal */}
        <Modal />

        {/* Picture Modal */}
        <PictureModal />
      </div>
    </div>
  );
}
