import {Text as NativeText, TextStyle} from 'react-native';
import {TextProps} from './Text.props';
import {Theme, Typography} from '../../Styles';

const Text: React.FC<TextProps> = (props) => {
  const {
    children,
    color = 'text',
    weight = 'regular',
    align = 'auto',
    fontSize = 14,
    lineHeight,
    style,
    ...restProps
  } = props;

  const textStyles: TextStyle = {
    fontSize,
    lineHeight,
    color: Theme.colors[color],
    textAlign: align,

    ...Typography[weight],
  };

  return (
    <NativeText {...restProps} style={[textStyles, style]}>
      {children}
    </NativeText>
  );
};

export default Text;
