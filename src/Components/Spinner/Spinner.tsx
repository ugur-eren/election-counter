import {memo} from 'react';
import {ActivityIndicator} from 'react-native';
import {SpinnerProps} from './Spinner.props';
import {Theme} from '../../Styles';

const Spinner: React.FC<SpinnerProps> = (props) => {
  const {color = 'primary', size, ...restProps} = props;

  return <ActivityIndicator size={size || 'small'} color={Theme.colors[color]} {...restProps} />;
};

export default memo(Spinner);
