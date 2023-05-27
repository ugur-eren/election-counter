import {StyleSheet} from 'react-native';
import {Spacing} from '../../Styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.pagePadding,
    flexDirection: 'row',
    gap: Spacing.normal,
  },

  parties: {
    flex: 1,
    flexDirection: 'row',
    gap: Spacing.medium,
  },
});
