import {Typography, Theme} from '../Styles';

export type ColorNames = keyof (typeof Theme)['colors'];

export type TypographyNames = keyof typeof Typography;
