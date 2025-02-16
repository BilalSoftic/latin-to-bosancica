const FontStyleButton = ({ icon, text, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-full py-7 md:py-0 flex flex-col text-center capitalize  justify-center items-center   rounded-[8px]  transition border-4 border-black ${
        isSelected ? 'bg-grayest  text-white' : 'bg-background text-black'
      }`}
    >
      <img
        src={icon}
        alt={text}
        className={` size-[2.5rem] md:size-[5.25rem] lg:size-[7rem] ${
          isSelected ? 'filter-white' : ''
        } mb-5 md:mb-10`}
      />
      <h4 className=' w-12 md:w-24 text-sm md:text-xl lg:text-2xl   '>
        {text}
      </h4>
    </button>
  );
};
export default FontStyleButton;
