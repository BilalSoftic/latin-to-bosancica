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
      <div className='fixed inset-0 md:p-8 bg-black bg-opacity-50  flex justify-center z-50  '>
        <div className=' modal bg-modalBackground   h-full pl-[3rem] pr-[2rem] py-[2rem] md:px-[5rem] md:py-[3rem] md:rounded-custom-radius  overflow-x-hidden overflow-y-auto '>
          {/* Grids */}
          <div className='container grid grid-cols-1 grid-rows-[3.313rem,auto,auto,1fr] md:grid-cols-[47.188rem,1fr] md:grid-rows-[8.688rem,1fr]  max-w-[77.5rem] gap-y-[2rem] md:gap-[2.5rem] '>
            {/* Font Style */}
            <FontStyle />
            <button
              onClick={closeModal}
              className=' text-white bg-black row-start-1 md:col-start-2   rounded-custom-radius flex flex-row justify-between p-3 md:p-[33.5px]'
            >
              <h4 className='self-center text-[20px] md:text-[30px]'>
                Go back
              </h4>
              <img
                src={closeIcon}
                alt='close'
                className='size-[22px] md:size-[72px] self-center'
              />
            </button>
            {/* Color Theme and Ligatures Wrapper */}
            <div className='colorAndLigatures row-start-3 md:row-start-2 md:col-start-2  flex flex-col  justify-between gap-4 '>
              <div className='md:bg-background flex flex-col rounded-custom-radius md:border-4 h-full px-3 md:px-[25px] md:pt-[35px] gap-[2rem] md:gap-0 border-black'>
                {/* Ligatures */}
                <Ligatures />

                <div className=' hidden md:flex h-1 bg-black rounded w-full  my-[25px] self-center'></div>
                {/* Color Theme */}

                <ColorTheme />
              </div>
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
