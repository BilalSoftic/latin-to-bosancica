import { useGlobalContext } from './Context';

function TextInput() {
  const { setText, selectedIcons } = useGlobalContext();

  const handleText = (e) => {
    const inputText = e.target.value;

    // Transform the input text based on selected icons
    const transformedText = inputText
      .split('')
      .map((char) => {
        const selectedIcon = selectedIcons[char]; // Check if the char has a selected icon

        // Append the text (like "1" or "2") if it exists
        return selectedIcon && selectedIcon.text
          ? `${char}${selectedIcon.text}`
          : char;
      })
      .join('');
    console.log(transformedText);

    // Set the transformed text as the new value for output
    setText((prevText) => {
      return { ...prevText, value: transformedText };
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
