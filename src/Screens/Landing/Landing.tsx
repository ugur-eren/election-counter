import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Party from './Party/Party';
import Controls from './Controls/Controls';
import styles from './Landing.styles';

const Landing: React.FC = () => {
  return (
    <SafeAreaView edges={['top', 'bottom', 'left']} style={styles.container}>
      <View style={styles.parties}>
        <Party party="rte" />

        <Party party="kk" />
      </View>

      <Controls />
    </SafeAreaView>
  );
};

export default Landing;
