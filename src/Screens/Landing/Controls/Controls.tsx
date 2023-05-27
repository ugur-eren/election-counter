import {memo} from 'react';
import {View} from 'react-native';
import {useAppSelector, VotesSelectors} from '../../../Redux';
import {Button, Text} from '../../../Components';
import {NumberFormatter} from '../../../Utils/Helpers';
import styles from './Controls.styles';

const Controls: React.FC = () => {
  const rteVotes = useAppSelector(VotesSelectors.selectRTEVotes);
  const kkVotes = useAppSelector(VotesSelectors.selectKKVotes);
  const winner = useAppSelector(VotesSelectors.selectWinner);

  return (
    <View style={styles.container}>
      <View style={styles.counts}>
        <Text>
          :&#40; : <Text color="textStrong"> {NumberFormatter.format(rteVotes)}</Text>
        </Text>
        <Text>
          K.K : <Text color="textStrong"> {NumberFormatter.format(kkVotes)}</Text>
        </Text>
      </View>

      <Text>
        Fark :{' '}
        <Text color="textStrong">
          {winner.winner === 'kk' ? 'K.K' : ':('} +{NumberFormatter.format(winner.diff)}
        </Text>
      </Text>

      <View style={styles.buttons}>
        <Button>Cihaza Kaydet</Button>
        <Button backgroundColor="accent">Logları Gör</Button>
        <Button backgroundColor="backgroundSecondary">Sıfırla</Button>
      </View>
    </View>
  );
};

export default memo(Controls);
