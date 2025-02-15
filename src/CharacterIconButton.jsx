const CharacterIconButton = ({ icon, text, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` rounded-[10px] mx-1 ${
        isSelected ? 'bg-grayest' : ''
      } border-4 border-black p-3`}
    >
      <img
        src={icon}
        alt={`Icon ${text ? text : ''}`}
        className={`  ${isSelected ? 'filter-white' : ''} size-7`}
      />
    </button>
  );
};
export default CharacterIconButton;
