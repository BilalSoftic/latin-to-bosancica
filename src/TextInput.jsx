import { useGlobalContext } from './Context';

function TextInput() {
  const { setInputText } = useGlobalContext();

  const handleText = (e) => {
    const newText = e.target.value;

    // Set the transformed text as the new value for output
    setInputText((prevText) => {
      return { ...prevText, value: newText };
    });
  };

  return (
    <textarea
      className='rounded-custom-radius bg-blue col-start-1 row-start-1 row-span-2 border  text-3xl  p-7   h-full overflow-y-auto resize-none focus:outline-none placeholder-white text-white '
      placeholder='Input text...'
      onChange={handleText}
    />
  );
}

export default TextInput;
