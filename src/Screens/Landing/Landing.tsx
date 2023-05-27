import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from '../../Components';
import styles from './Landing.styles';
import {NumberFormatter} from '../../Utils/Helpers';

const Landing: React.FC = () => {
  return (
    <SafeAreaView edges={['top', 'bottom', 'left']} style={styles.container}>
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
          <Text>
            :&#40; : <Text color="textStrong"> {NumberFormatter.format(1234567)}</Text>
          </Text>
          <Text>
            K.K : <Text color="textStrong"> {NumberFormatter.format(1234567)}</Text>
          </Text>
        </View>

        <Text>
          Diff : <Text color="textStrong"> K.K +{NumberFormatter.format(1234)}</Text>
        </Text>

        <View style={styles.buttons}>
          <Button>Save to Store</Button>
          <Button backgroundColor="accent">View logs</Button>
          <Button backgroundColor="backgroundSecondary">Clear</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Landing;
