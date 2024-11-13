import glyphMapIcon from './assets/glyphMapIcon.svg';
import { useGlobalContext } from './Context';
const GlyphMap = () => {
  const { openPictureModal } = useGlobalContext();
  return (
    <button
      type='button '
      className=' rounded-custom-radius  font-semibold bg-blue  w-[16rem] h-full text-white  flex items-center justify-center gap-4'
      onClick={openPictureModal}
    >
      <img src={glyphMapIcon} alt='brush.svg' className='size-12' />
      <h4 className='text-[25px]  w-[4.6rem] text-left leading-tight'>
        Glyph map
      </h4>
    </button>
  );
};
export default GlyphMap;
