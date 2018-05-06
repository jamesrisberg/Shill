import Dimensions from 'Dimensions';
import { StatusBar } from 'react-native';


const height = Dimensions.get('window').height - (StatusBar.currentHeight ? StatusBar.currentHeight : 0);
const width = Dimensions.get('window').width;

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

export const HEADER_HEIGHT = height * .1;

export const PAGE_HEIGHT = height - HEADER_HEIGHT * 2;

export const ICON_SIZE = height * .035;
export const LOADER_SIZE = height * .055;

export const CARD_WIDTH = width * .95;
export const CARD_HEIGHT = height * .4;
export const AD_CARD_WIDTH = width * .93;
export const AD_CARD_HEIGHT = height * .44;
export const TILE_WIDTH = width * .45;
export const TILE_HEIGHT = height * .25;

export const MIN_TILE_HEIGHT = height * .1;

export const MARGIN_HEIGHT = height * .015;
export const MARGIN_WIDTH = width * .075;
export const SPACING_HEIGHT = height * .015;
export const SPACING_WIDTH = width * .075;

export const CHAT_INPUT_HEIGHT = height * .08;

export const FILTER_BAR_HEIGHT = height * .06;
export const FILTER_BAR_WIDTH = width * .9;