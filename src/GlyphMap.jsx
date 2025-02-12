import glyphMapIcon from './assets/glyphMapIcon.svg';
import { useGlobalContext } from './Context';
const GlyphMap = () => {
  const { openPictureModal } = useGlobalContext();
  return (
    <button
      type='button '
      className=' rounded-custom-radius  font-semibold bg-black w-full md:w-[16rem] h-full text-white  flex items-center justify-center gap-4'
      onClick={openPictureModal}
    >
      <div className='md:bg-white size-[50px] flex justify-center items-center rounded-custom-radius'>
        <img
          src={glyphMapIcon}
          alt='glyph.svg'
          className=' md-black size-[28px] md:size-[26px] '
        />
      </div>
      <h4 className=' hidden md:block text-[26px]  w-[4.6rem] text-left leading-[1.1]'>
        Glyph map
      </h4>
    </button>
  );
};
export default GlyphMap;
