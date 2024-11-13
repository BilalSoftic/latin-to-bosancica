import { nanoid } from 'nanoid';
import FontStyleScript from './assets/fontStyleSVGs/FontStyleScript.svg';
import FontStyleDigitalRegular from './assets/fontStyleSVGs/FontStyleDigitalRegular.svg';
import FontStyleDigitalBold from './assets/fontStyleSVGs/FontStyleDigitalBold.svg';

export const fontStyleButtonsData = [
  {
    id: nanoid(),
    icon: FontStyleScript,
    text: 'lapidary script',
    fontFamily: 'font1Lig',
  },
  {
    id: nanoid(),
    icon: FontStyleDigitalRegular,
    text: 'digital regular',
    fontFamily: 'font2Lig',
  },
  {
    id: nanoid(),
    icon: FontStyleDigitalBold,
    text: 'digital bold',
    fontFamily: 'font3Lig',
  },
];
