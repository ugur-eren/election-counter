import {memo} from 'react';
import {Alert, View} from 'react-native';
import {VotesActions, persistor, useAppDispatch} from '../../../../Redux';
import {Button} from '../../../../Components';
import styles from './ControlButtons.styles';

const ControlButtons: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSavePress = () => {
    persistor.flush();
  };

  const onResetPress = () => {
    Alert.alert('Sıfırla', 'Sıfırlamak istediğinize emin misiniz?', [
      {
        text: 'HAYIR',
        style: 'cancel',
        isPreferred: true,
      },
      {
        text: 'Evet',
        style: 'destructive',
        onPress: () => {
          dispatch(VotesActions.clear());
          persistor.purge();
        },
      },
    ]);
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
