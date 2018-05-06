import * as variables from './variables';
import * as colors from './colors';
import Dimensions from 'Dimensions';
import { Platform } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export function createShadow(level) {
    switch (level) {
        case 1:
            return {
                ...Platform.select({
                    ios: {
                        shadowColor: 'rgb(49, 53, 66)',
                        shadowOpacity: 0.32,
                        shadowRadius: 2,
                        shadowOffset: {
                            height: 1
                        }
                    },
                    android: {
                        elevation: 1,
                    }
                })
               
            };
        case 2:
            return {
                ...Platform.select({
                    ios: {
                        shadowColor: 'rgb(49, 53, 66)',
                        shadowOpacity: 0.4,
                        shadowRadius: 4,
                        shadowOffset: {
                            height: 2
                        }
                    },
                    android: {
                        elevation: 2,
                    }
                })
            };
        case 3:
            return {
                ...Platform.select({
                    ios: {
                        shadowColor: 'rgb(49, 53, 66)',
                        shadowOpacity: 0.5,
                        shadowRadius: 6,
                        shadowOffset: {
                            height: 4
                        }
                    },
                    android: {
                        elevation: 3,
                    }
                })
            };
        case 4:
            return {
                ...Platform.select({
                    ios: {
                        shadowColor: 'rgb(49, 53, 66)',
                        shadowOpacity: 0.6,
                        shadowRadius: 8,
                        shadowOffset: {
                            height: 6
                        }
                    },
                    android: {
                        elevation: 4,
                    }
                })
               
            };
        case 5:
            return {
                ...Platform.select({
                    ios: {
                        shadowColor: 'rgb(49, 53, 66)',
                        shadowOpacity: 0.70,
                        shadowRadius: 10,
                        shadowOffset: {
                            height: 9
                        }
                    },
                    android: {
                        elevation: 5,
                    }
                })
               
            };
    }
}

export const center = {
    alignItems: 'center',
    justifyContent: 'center'
};

export const centerSelf = {
    alignSelf: 'center',
    textAlign: 'center'
};

export const flexEnd = {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
};

export const flexEndSelf = {
    alignSelf: 'flex-end'
};

export const selfStretch = {
    alignSelf: 'stretch'
};

export const fullSizePage = {
    height: height - variables.HEADER_HEIGHT,
    width: width
};

export const overlay = {
    position: 'absolute',
    backgroundColor: colors.darkGrayTransparent,
    width: width,
    height: height
};

export const centerAbsolute = {
    position: 'absolute',
    left: width/2,
    top: (height - variables.HEADER_HEIGHT)/2
};

export const fullWidth = {
    width: width
};

export const fullHeight = {
    height: height - variables.HEADER_HEIGHT,
};

export function flex(direction = 'column', wrap = 'nowrap') {
    return {
        flexDirection: direction,
        flexWrap: wrap
    };
}

export const row = flex('row', 'wrap');
export const column = flex('column', 'nowrap');
export const rowReverse = flex('row-reverse', 'wrap');
export const columnReverse = flex('column-reverse', 'wrap');
export const rowNowrap = flex('row', 'nowrap');