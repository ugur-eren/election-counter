import {View} from 'react-native';
import {Text} from '../../../Components';
import {PartyProps} from './Party.props';
import styles from './Party.styles';

const Party: React.FC<PartyProps> = (props) => {
  const {party} = props;

  return (
    <View style={[styles.container, styles[party]]}>
      <Text weight="bold" color="textStrong" fontSize={32}>
        {party === 'rte' ? ':(' : 'Kılıçdaroğlu'}
      </Text>
    </View>
  );
};

export default Party;
