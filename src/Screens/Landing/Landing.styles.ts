import {StyleSheet} from 'react-native';
import {Spacing, Theme} from '../../Styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.pagePadding,
    flexDirection: 'row',
  },

  parties: {
    flex: 1,
    flexDirection: 'row',
    gap: Spacing.small,
  },
  party: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  partyAKP: {
    backgroundColor: Theme.colors.akp,
  },
  partyCHP: {
    backgroundColor: Theme.colors.chp,
  },

  controls: {},
});
