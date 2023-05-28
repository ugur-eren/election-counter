import {memo} from 'react';
import {FlatList, View} from 'react-native';
import ControlButtons from './ControlButtons/ControlButtons';
import {useAppSelector, VotesSelectors} from '../../../Redux';
import {Text} from '../../../Components';
import {NumberFormatter, TimeFormatter} from '../../../Utils/Helpers';
import styles from './Controls.styles';

const Controls: React.FC = () => {
  const rteVotes = useAppSelector(VotesSelectors.selectRTEVotes);
  const kkVotes = useAppSelector(VotesSelectors.selectKKVotes);
  const winner = useAppSelector(VotesSelectors.selectWinner);
  const logs = useAppSelector(VotesSelectors.selectLogsReverse);

  return (
    <View style={styles.container}>
      <View>
        <Text>
          RTE : <Text color="textStrong"> {NumberFormatter.format(rteVotes)}</Text>
        </Text>

        <Text>
          K.K : <Text color="textStrong"> {NumberFormatter.format(kkVotes)}</Text>
        </Text>

        <Text>
          Fark :{' '}
          <Text color="textStrong">
            {winner.winner === 'kk' ? 'K.K' : 'RTE'} +{NumberFormatter.format(winner.diff)}
          </Text>
        </Text>
      </View>

      <View style={styles.logs}>
        <FlatList
          data={logs}
          keyExtractor={(log) => log.time.toString()}
          inverted
          windowSize={20}
          maxToRenderPerBatch={20}
          renderItem={({item}) => (
            <Text>
              {TimeFormatter.format(item.time)} {item.to === 'kk' ? 'K.K' : 'RTE'}{' '}
              {item.vote === 'up' ? '+' : '-'}
            </Text>
          )}
        />
      </View>

      <ControlButtons />
    </View>
  );
};

export default memo(Controls);
