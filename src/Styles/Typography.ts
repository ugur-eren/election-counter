import {Platform, TextStyle} from 'react-native';

const defaultFontFamily = Platform.select({
  web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
  ios: 'System',
  default: 'sans-serif',
});

const Typography = {
  light: {
    fontFamily: defaultFontFamily,
    fontWeight: '300',
    includeFontPadding: false,
  },
  regular: {
    fontFamily: defaultFontFamily,
    fontWeight: '400',
    includeFontPadding: false,
  },
  medium: {
    fontFamily: defaultFontFamily,
    fontWeight: '500',
    includeFontPadding: false,
  },
  semiBold: {
    fontFamily: defaultFontFamily,
    fontWeight: '600',
    includeFontPadding: false,
  },
  bold: {
    fontFamily: defaultFontFamily,
    fontWeight: '700',
    includeFontPadding: false,
  },
} satisfies Record<string, TextStyle>;

export default Typography;
