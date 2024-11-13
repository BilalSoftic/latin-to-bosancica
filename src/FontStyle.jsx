import FontStyleButton from './FontStyleButton';
import { fontStyleButtonsData } from './data';
import { useGlobalContext } from './Context';
const FontStyle = () => {
  const { selectedFontId, setSelectedFontId } = useGlobalContext();

  return (
    <div className='fontWrapper  flex flex-col p-10 text-center font-bold gap-3 bg-background  border-black border-4 rounded-[22px]'>
      <h4 className='text-4xl capitalize mb-4  '>font style</h4>
      <div className='buttonWrapper h-full  flex flex-row justify-between '>
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
