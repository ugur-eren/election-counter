import {Platform, Dimensions, StatusBar} from 'react-native';

export const IsIOS = Platform.OS === 'ios';
export const IsAndroid = Platform.OS === 'android';

export const MajorOSVersion = IsIOS ? parseInt(Platform.Version.toString(), 10) : Platform.Version;

export const getFontScale = (): number => Dimensions.get('window').fontScale;

export const StatusBarHeight = IsIOS ? 0 : StatusBar.currentHeight || 0;

/**
 * A custom keyboardType that will only have numeric values in the keyboard
 * for both Android and IOS platforms.
 */
export const OnlyNumericPad = IsIOS ? 'number-pad' : 'numeric';
