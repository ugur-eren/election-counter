import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ColorNames} from '../../Types';

export type ButtonProps = {
  children?: React.ReactNode;

  /**
   * Whether the loading indicator should show when the button is pressed
   *
   * Default: true
   */
  showLoading?: boolean;

  /**
   * Function to execute on button press
   */
  onPress?: () => void | Promise<void>;

  /**
   * Background color of the button.
   */
  backgroundColor?: ColorNames;

  /**
   * Text color of the button.
   */
  color?: ColorNames;

  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textContainerStyle?: StyleProp<ViewStyle>;
  backgroundStyle?: StyleProp<ViewStyle>;
};
