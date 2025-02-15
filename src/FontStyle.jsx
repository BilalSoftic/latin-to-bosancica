import FontStyleButton from './FontStyleButton';
import { fontStyleButtonsData } from './data';
import { useGlobalContext } from './Context';
const FontStyle = () => {
  const { selectedFontId, setSelectedFontId } = useGlobalContext();

  return (
    <div className='fontWrapper  flex flex-col md:h-[26.313rem] row-start-2 md:row-start-1 md:row-span-2 font-bold md:bg-background  md:border-black px-3 md:p-6 md:border-4 rounded-custom-radius'>
      <div className=' flex flex-row mb-2 md:mb-6'>
        <h4 className='text-xl md:text-4xl capitalize w-[10rem] md:w-[15rem] mr-6'>
          font style
        </h4>
        <div className='h-1 bg-background md:bg-modalBackground  w-full self-center'></div>
      </div>
      <div className='buttonWrapper h-full  flex flex-row justify-between md:gap-5 gap-2 '>
        {fontStyleButtonsData.map(({ id, icon, text }) => {
          return (
            <FontStyleButton
              key={id}
              icon={icon}
              text={text}
              isSelected={selectedFontId === id}
              onClick={() => setSelectedFontId(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FontStyle;
