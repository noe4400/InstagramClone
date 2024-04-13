import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {IComment} from '@/types/CommentTypes';
import colors from '@/theme/colors';

interface ICommentProps {
  comment: IComment;
}

export default function Comment({comment}: ICommentProps) {
  const {user, comment: userComment} = comment;
  const {username} = user;
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{username} </Text>
        {userComment}
      </Text>

      <AntDesign
        name="hearto"
        size={14}
        style={styles.commentIcon}
        color={colors.black}
      />
    </View>
  );
}
