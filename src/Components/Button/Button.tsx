import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../Text/Text';
import Spinner from '../Spinner/Spinner';
import Touchable from '../Touchable/Touchable';
import {ButtonProps} from './Button.props';
import styles from './Button.styles';
import {Theme} from '../../Styles';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    showLoading = true,
    onPress,
    backgroundColor = 'primary',
    color = 'text',

    style: styleProp,
    containerStyle: containerStyleProp,
    textStyle: textStyleProp,
    textContainerStyle: textContainerStyleProp,
    backgroundStyle: backgroundStyleProp,
  } = props;

  const [loading, setLoading] = useState(false);

  const onButtonPress = async () => {
    if (!onPress) return;

    if (showLoading) {
      if (!loading) {
        const result = onPress();

        if (result instanceof Promise) {
          setLoading(true);
          await result;
          setLoading(false);
        }
      }
    } else {
      await onPress();
    }
  };

  return (
    <View style={StyleSheet.compose(styles.container, containerStyleProp)}>
      <View
        style={StyleSheet.compose(
          [styles.background, {backgroundColor: Theme.colors[backgroundColor]}],
          backgroundStyleProp,
        )}
      >
        <Touchable
          style={StyleSheet.compose(styles.touchable, styleProp)}
          onPress={onPress ? onButtonPress : undefined}
        >
          <View style={StyleSheet.compose(styles.inner, textContainerStyleProp)}>
            <Spinner animating={loading} size="small" style={styles.spinner} color={color} />

            <Text
              weight="bold"
              color={color}
              fontSize={14}
              style={StyleSheet.compose(styles.text, textStyleProp)}
            >
              {children}
            </Text>
          </View>
        </Touchable>
      </View>
    </View>
  );
};

export default Button;
