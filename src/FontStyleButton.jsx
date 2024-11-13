const FontStyleButton = ({ icon, text, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-40 h-full flex flex-col text-center capitalize  justify-center items-center gap-10  rounded-[18px]  transition border-4 border-black ${
        isSelected ? 'bg-blue  text-white' : 'bg-background text-black'
      }`}
    >
      <img
        src={icon}
        alt={text}
        className={`size-[5rem] ${isSelected ? 'filter-white' : ''}`}
      />
      <h4 className='w-24 text-2xl  '>{text}</h4>
    </button>
  );
};
export default FontStyleButton;
