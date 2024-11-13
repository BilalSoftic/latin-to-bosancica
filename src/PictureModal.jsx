import closeIcon from './assets/close.svg';
import { useGlobalContext } from './Context';
import v1 from './assets/glyphImages/Verzija1.jpg';
import v2 from './assets/glyphImages/Verzija2.jpg';
import v3 from './assets/glyphImages/Verzija3.jpg';
const PictureModal = () => {
  const { closePictureModal, isPictureModalOpen } = useGlobalContext();

  return (
    isPictureModalOpen && (
      <div className='fixed inset-0 p-8 bg-black bg-opacity-50  flex justify-center z-50  '>
        <div className=' modal bg-modalBackground  h-full p-20 rounded-custom-radius relative overflow-x-hidden overflow-y-auto '>
          <button
            onClick={closePictureModal}
            className='absolute top-2 right-2 m-8 size-8 text-black text-xl'
          >
            <img src={closeIcon} alt='close' />
          </button>
          {/* Grids */}
          <div className='container grid grid-rows-2 '>
            <img src={v1} alt='close' />
            <img src={v2} alt='close' />
            <img src={v3} alt='close' />
          </div>
        </div>
      </div>
    )
  );
};

export default PictureModal;
