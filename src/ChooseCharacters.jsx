import { charactersData } from './characters';
import CharacterCard from './CharacterCard';
const ChooseCharacters = () => {
  return (
    <div className='col-span-2 border-4 border-black rounded-[2.5rem] bg-background p-10 '>
      <h4 className='text-[2.5rem] capitalize font-bold pb-10'>
        choose characters
      </h4>
      <div className='characters grid grid-cols-3 px-10 gap-x-28 gap-y-10'>
        {charactersData.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              id={character.id}
              letter={character.letter}
              letterIcons={character.letterIcons}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChooseCharacters;
