import ChooseCharacters from './ChooseCharacters';
import Ligatures from './Ligatures';
import ColorTheme from './ColorTheme';
import FontStyle from './FontStyle';
import closeIcon from './assets/close.svg';
import { useGlobalContext } from './Context';

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext();
  return (
    isModalOpen && (
      <div className='fixed inset-0 p-8 bg-black bg-opacity-50  flex justify-center z-50  '>
        <div className=' modal bg-modalBackground  h-full p-20 rounded-custom-radius relative overflow-x-hidden overflow-y-auto '>
          <button
            onClick={closeModal}
            className='absolute top-2 right-2 m-8 size-8 text-black text-xl'
          >
            <img src={closeIcon} alt='close' />
          </button>
          {/* Grids */}
          <div className='container grid grid-cols-2 grid-rows-[27rem,1fr] gap-12  '>
            {/* Font Style */}
            <FontStyle />
            {/* Color Theme and Ligatures Wrapper */}
            <div className='colorAndLigatures flex flex-col  justify-between  '>
              {/* Color Theme */}
              <div className='flex flex-row justify-start w-fit h-fit bg-wh  border-black bg-background border-4 rounded-[22px]'>
                <ColorTheme />
              </div>
              {/* Ligatures */}
              <Ligatures />
            </div>
            {/* Letters */}

            <ChooseCharacters />
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
