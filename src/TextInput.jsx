import { useEffect, useRef } from 'react';
import { useGlobalContext } from './Context';

function TextInput() {
  const { inputText, setInputText } = useGlobalContext();
  const { value } = inputText;
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollTop = inputRef.current.scrollHeight;
    }
  }, [value]);

  const handleText = (e) => {
    const newText = e.target.value;

    // Set the transformed text as the new value for output
    setInputText((prevText) => {
      return { ...prevText, value: newText };
    });
  };

  return (
    <textarea
      ref={inputRef}
      value={value}
      className='rounded-custom-radius   min-h-[10.75rem] bg-gray md:col-start-1 md:row-start-1 border-black border-4 w-full text-[1rem] md:text-[1.5rem]  p-4 md:p-7   h-full overflow-y-auto resize-none focus:outline-none placeholder-white text-white '
      placeholder='Input text...'
      onChange={handleText}
    />
  );
}

export default TextInput;
