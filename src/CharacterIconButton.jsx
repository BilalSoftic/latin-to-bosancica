const CharacterIconButton = ({ icon, text, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` rounded-[0.6rem] mx-1 ${
        isSelected ? 'bg-blue' : ''
      } border-4 border-black p-3`}
    >
      <img
        src={icon}
        alt={`Icon ${text ? text : ''}`}
        className={`  ${isSelected ? 'filter-white' : ''} size-8`}
      />
    </button>
  );
};
export default CharacterIconButton;
