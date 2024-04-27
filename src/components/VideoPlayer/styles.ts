import colors from '@/theme/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  videoPlayer: {
    width: '100%',
    aspectRatio: 1,
  },
  mute: {
    backgroundColor: colors.black,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 30,
  },
});

export default styles;
