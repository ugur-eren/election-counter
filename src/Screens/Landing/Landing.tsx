import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '../../Components';
import styles from './Landing.styles';

const Landing: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parties}>
        <View style={[styles.party, styles.partyAKP]}>
          <Text weight="bold" color="textStrong" fontSize={32}>
            :&#40;
          </Text>
        </View>

        <View style={[styles.party, styles.partyCHP]}>
          <Text weight="bold" color="textStrong" fontSize={32}>
            Kılıçdaroğlu
          </Text>
        </View>
      </View>

      <View style={styles.controls}>
        <View style={styles.counts}>
          <Text style={styles.countText}>Party 1: 0</Text>
          <Text style={styles.countText}>Party 2: 0</Text>
        </View>

        <View style={styles.buttons}>
          <Text style={styles.button}>Save to Store</Text>
          <Text style={styles.button}>View all logs</Text>
          <Text style={styles.button}>Clear</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Landing;
