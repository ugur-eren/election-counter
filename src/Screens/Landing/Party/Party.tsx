import {memo} from 'react';
import {View} from 'react-native';
import {VotesActions, useAppDispatch} from '../../../Redux';
import {Text, Touchable} from '../../../Components';
import {PartyProps} from './Party.props';
import styles from './Party.styles';

const Party: React.FC<PartyProps> = (props) => {
  const {party} = props;

  const dispath = useAppDispatch();

  const onPress = () => dispath(VotesActions.increment(party));

  return (
    <View style={[styles.container, styles[party]]}>
      <Touchable style={styles.touchable} onPress={onPress}>
        <Text weight="bold" color="textStrong" fontSize={32}>
          {party === 'rte' ? ':(' : 'Kılıçdaroğlu'}
        </Text>
      </Touchable>
    </View>
  );
};

export default memo(Party);
