import { createContext, useContext, useState, useEffect } from 'react';
import { fontStyleButtonsData } from './data';
import { charactersData } from './characters';
const AppContext = createContext();

export function AppProvider({ children }) {
  const [text, setText] = useState({
    value: '',
    fontSize: 30,
  });

  const [fontFamily, setFontFamily] = useState(
    fontStyleButtonsData[0]?.fontFamily
  );
  const [selectedFontId, setSelectedFontId] = useState(
    fontStyleButtonsData[0]?.id
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isLigatures, setIsLigatures] = useState(false);

  const [selectedIcons, setSelectedIcons] = useState({});

  // Initialize with the first icon for each character
  useEffect(() => {
    const defaultSelections = {};
    charactersData.forEach(({ id, letterIcons }) => {
      const firstIcon = Object.values(letterIcons)[0];
      defaultSelections[id] = {
        iconId: firstIcon.id,
        text: firstIcon.text || '',
      };
    });
    setSelectedIcons(defaultSelections);
  }, []);

  // Function to update selection for a character
  const updateSelectedIcon = (characterId, iconId, text) => {
    setSelectedIcons((prev) => ({
      ...prev,
      [characterId]: { iconId, text },
    }));
  };

  useEffect(() => {
    if (selectedFontId) {
      const selectedFont = fontStyleButtonsData.find(
        (item) => item.id === selectedFontId
      );
      if (selectedFont) {
        setFontFamily(selectedFont.fontFamily);
      }
    }
  }, [selectedFontId, setFontFamily]);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        text,
        setText,
        isModalOpen,
        openModal,
        closeModal,
        fontFamily,
        setFontFamily,
        selectedFontId,
        setSelectedFontId,
        isLigatures,
        setIsLigatures,
        selectedIcons,
        updateSelectedIcon,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
