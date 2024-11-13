import { createContext, useContext, useState, useEffect } from 'react';
import { fontStyleButtonsData } from './data';
import { charactersData } from './characters';
const AppContext = createContext();

export function AppProvider({ children }) {
  const [inputText, setInputText] = useState({
    value: '',
  });
  const [outputText, setOutputText] = useState({
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

  const [isPictureModalOpen, setIsPictureModalOpen] = useState(false);

  const [isLigatures, setIsLigatures] = useState(false);

  const [selectedIcons, setSelectedIcons] = useState({});

  useEffect(() => {
    // Transform the input text based on selected icons
    const transformedText = inputText.value
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

    setOutputText((prevText) => {
      return { ...prevText, value: transformedText };
    });
  }, [inputText.value, selectedIcons]);

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

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const openPictureModal = () => setIsPictureModalOpen(true);

  const closePictureModal = () => setIsPictureModalOpen(false);

  return (
    <AppContext.Provider
      value={{
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
        inputText,
        setInputText,
        outputText,
        setOutputText,
        openPictureModal,
        closePictureModal,
        isPictureModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
