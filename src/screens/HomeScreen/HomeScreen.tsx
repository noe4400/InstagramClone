import {FlatList} from 'react-native';
import React from 'react';
import posts from '@/assets/data/posts.json';
import FeedPost from '@/components/FeedPost';
export default function HomeScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({item: post}) => <FeedPost post={post} />}
      keyExtractor={item => `post-${item.id}`}
      showsVerticalScrollIndicator={false}
    />
  );
}
