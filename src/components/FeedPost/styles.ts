import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import fonts from '../../assets/theme/fonts';

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  userAvatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  footerContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },

  bold: {
    fontWeight: fonts.weight.bold,
  },
  text: {
    color: colors.black,
    lineHeight: 19,
  },
});

export default styles;
