import {StyleSheet} from 'react-native';
import fonts from '../../assets/theme/fonts';

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  commentIcon: {
    marginLeft: 15,
  },
});

export default styles;
