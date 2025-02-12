import { useEffect, useRef } from 'react';
import { useGlobalContext } from './Context';

const TextOutput = () => {
  const { outputText, fontFamily, isLigatures } = useGlobalContext();
  const { value, fontSize } = outputText;

  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
    }
  }, [value]);

  return (
    <textarea
      ref={textAreaRef}
      style={{ fontSize: `${fontSize}px` }}
      value={value}
      readOnly
      className={`font-${fontFamily} ${
        isLigatures ? 'dlig' : ''
      } uppercase output md:h-[13.844rem]  md:row-start-3 md:col-start-1 border-4 rounded-custom-radius resize-none   border-black p-7 mb-5 md:mb-4 md:mt-6   bg-transparent leading-tight  `}
    >
      {console.log(fontFamily)}
    </textarea>
  );
};
export default TextOutput;
