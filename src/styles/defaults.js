import { Platform } from 'react-native';

import * as colors from './colors';
import * as fonts from './fonts';
import * as mixins from './mixins';
import * as variables from './variables';

export const buffer = {
    flex: 1
};

export const bigBuffer = {
    flex: 5
};

export const floatingActionButton = {
    ...mixins.createShadow(1),
    borderRadius: 1000
};

export const headerLabel = {
    ...fonts.bookLarge,
    color: colors.white,
    backgroundColor: colors.transparent
};

export const textInputField = {
    ...fonts.bookSmall,
    color: colors.darkGray,
    flex: 1,
    paddingTop: 3,
    paddingHorizontal: 15
};

export const textLabel = {
    ...fonts.bookSmall,
    color: colors.white,
    backgroundColor: colors.transparent
};

export const page = {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: variables.HEADER_HEIGHT,
    marginBottom: variables.HEADER_HEIGHT,
    position: 'relative'
};

export const tabIcon = {
    paddingBottom: 5,
    color: colors.primaryDark
};

export const deselectedTabIcon = {
    paddingBottom: 5,
    color: colors.primaryLight
};

export const overlay = {
    height: variables.SCREEN_HEIGHT,
    width: variables.SCREEN_WIDTH,
    position: 'absolute',
    top: 0,
    left: 0,
    ...Platform.select({
        ios: {
            backgroundColor: colors.lightGrayTransparent,
        },
        android: {
            backgroundColor: colors.darkGrayTransparent,
        }
    })
};

export const navBar = {
    ...mixins.row,
    position: 'absolute',
    top: 0,
    left: 0,
    height: variables.HEADER_HEIGHT,
    width: variables.SCREEN_WIDTH,
    alignItems: 'center',
    color: colors.primary,
    backgroundColor: colors.secondary,
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryLight,
};

export const navNoIcon = {
    opacity: 0,
    flex: 1
};

export const navBarIcon = {
    ...mixins.centerSelf,
    flex: 1,
    color: colors.primary
};

export const navBarTitle = {
    ...fonts.bookSmall,
    flex: 11,
    textAlign: 'center',
    alignSelf: 'flex-end',
    color: colors.primary,
    backgroundColor: colors.transparent,
    paddingBottom: 6
};

export const navBarIconContainer = {
    ...mixins.row,
    flex: 2,
    alignSelf: 'flex-end',
    paddingBottom: 10
};