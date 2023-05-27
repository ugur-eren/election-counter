import {StyleSheet} from 'react-native';
import {Spacing, Theme} from '../../../Styles';

export default StyleSheet.create({
  container: {
    gap: Spacing.small,
  },

  logs: {
    flex: 1,
    backgroundColor: Theme.colors.backgroundSecondary,
    padding: Spacing.xxxsmall,
  },
});
