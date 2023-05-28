import {memo} from 'react';
import {View} from 'react-native';
import {VotesActions, useAppDispatch} from '../../../Redux';
import {Text, Touchable} from '../../../Components';
import {PartyProps} from './Party.props';
import styles from './Party.styles';

const Party: React.FC<PartyProps> = (props) => {
  const {party} = props;

  const dispatch = useAppDispatch();

  const increment = () => dispatch(VotesActions.increment(party));
  const decrement = () => dispatch(VotesActions.decrement(party));

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
