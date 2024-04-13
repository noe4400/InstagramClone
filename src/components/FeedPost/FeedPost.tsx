import {View, Text, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import colors from '../../assets/theme/colors';
import Comment from '../Comment';
import {IPost} from '../../types/PostTypes';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
  const {
    image: postImage,
    user,
    description: postDescription,
    nofComments,
    nofLikes,
    comments,
  } = post;
  const {username, image: avatar} = user;
  return (
    <View>
      <View style={styles.postHeader}>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      <Image
        source={{
          uri: postImage,
        }}
        style={styles.postImage}
      />
      <View style={styles.footerContainer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Liked by
          <Text style={styles.bold}>Andy</Text> and
          <Text style={styles.bold}> {nofLikes - 1} Others</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>{username} </Text>
          {postDescription}
        </Text>
        <Text>View all {nofComments} comments</Text>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </View>
    </View>
  );
};

export default FeedPost;
