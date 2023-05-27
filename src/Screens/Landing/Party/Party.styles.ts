import {StyleSheet} from 'react-native';
import {Theme} from '../../../Styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rte: {
    backgroundColor: Theme.colors.akp,
  },
  kk: {
    backgroundColor: Theme.colors.chp,
  },

  decrement: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Theme.colors.accent,
    width: 30,
    height: 30,
  },
  decrementTouchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
