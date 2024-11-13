import React from 'react';
import { useGlobalContext } from './Context';

const TextOutput = () => {
  const { outputText, fontFamily, isLigatures } = useGlobalContext();
  const { value, fontSize } = outputText;
  return (
    <textarea
      style={{ fontSize: `${fontSize}px` }}
      value={value}
      readOnly
      className={`font-${fontFamily} ${
        isLigatures ? 'dlig' : ''
      } uppercase output row-start-3 col-start-1 border-4 rounded-custom-radius resize-none   border-black p-7  mb-4 mt-6  bg-transparent leading-tight  `}
    >
      {console.log(fontFamily)}
    </textarea>
  );
};
export default TextOutput;
