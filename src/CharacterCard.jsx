import CharacterIconButton from './CharacterIconButton';
import { useState } from 'react';
import { useGlobalContext } from './Context';

const CharacterCard = ({ id, letter, letterIcons }) => {
  const { selectedIcons, updateSelectedIcon } = useGlobalContext();
  const selectedIcon = selectedIcons[id] || {};

  const handleIconClick = (iconId, text) => {
    updateSelectedIcon(id, iconId, text);
  };
  return (
    <div className='flex  align-middle  justify-start bg-background'>
      <div className='h-16 p-5 md:p-4 flex align-middle '>
        <img src={letter} alt={`Character ${id}`} className='size-6 md:w-10' />
      </div>
      <div className='flex width-[13rem]   '>
        {Object.entries(letterIcons).map(
          ([key, { icon, text, id: iconId }]) => {
            return (
              <CharacterIconButton
                key={key}
                id={id}
                icon={icon}
                text={text}
                isSelected={selectedIcon.iconId === iconId}
                onClick={() => handleIconClick(iconId, text)}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
