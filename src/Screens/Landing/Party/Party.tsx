import {memo} from 'react';
import {View} from 'react-native';
import {VotesActions, useAppDispatch} from '../../../Redux';
import {Text, Touchable} from '../../../Components';
import {PartyProps} from './Party.props';
import styles from './Party.styles';

const Party: React.FC<PartyProps> = (props) => {
  const {party} = props;

  const dispath = useAppDispatch();

  const increment = () => dispath(VotesActions.increment(party));
  const decrement = () => dispath(VotesActions.decrement(party));

  return (
    <View style={[styles.container, styles[party]]}>
      <Touchable style={styles.touchable} onPress={increment}>
        <Text weight="bold" color="textStrong" fontSize={32}>
          {party === 'rte' ? 'RTE' : 'Kılıçdaroğlu'}
        </Text>
      </Touchable>

      <View style={styles.decrement}>
        <Touchable style={styles.decrementTouchable} onPress={decrement}>
          <Text weight="bold" color="textStrong" fontSize={32} lineHeight={32}>
            -
          </Text>
        </Touchable>
      </View>
    </View>
  );
};

export default memo(Party);
