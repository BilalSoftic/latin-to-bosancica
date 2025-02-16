import { charactersData } from './characters';
import CharacterCard from './CharacterCard';
const ChooseCharacters = () => {
  return (
    <div className='col-span-2 border-4 border-black rounded-custom-radius bg-background p-5 md:p-10 md:mt-[0.6rem] '>
      <div className=' flex flex-row gap-1 mb-6'>
        <h4 className='text-[20px] md:text-2xl lg:text-4xl w-[35rem] md:w-[20rem] lg:w-[30rem]'>
          Choose characters
        </h4>
        <div className='h-1 bg-modalBackground rounded w-full self-center '></div>
      </div>
      <div className='characters grid md:grid-cols-2 lg:grid-cols-3 lg:px-10  md:gap-x-28 gap-y-4'>
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
