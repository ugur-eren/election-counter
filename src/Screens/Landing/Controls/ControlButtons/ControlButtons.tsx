import {memo} from 'react';
import {View} from 'react-native';
import {VotesActions, persistor, useAppDispatch} from '../../../../Redux';
import {Button} from '../../../../Components';
import styles from './ControlButtons.styles';

const ControlButtons: React.FC = () => {
  const dispath = useAppDispatch();

  const onSavePress = () => {
    persistor.flush();
  };

  const onResetPress = () => {
    dispath(VotesActions.clear());
    persistor.purge();
  };

  return (
    <View style={styles.container}>
      <Button onPress={onSavePress}>Cihaza Kaydet</Button>

      <Button onPress={onResetPress} backgroundColor="backgroundSecondary">
        Sıfırla
      </Button>
    </View>
  );
};

export default memo(ControlButtons);
