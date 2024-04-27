import {FlatList, ViewToken, ViewabilityConfig} from 'react-native';
import React, {useRef, useState} from 'react';
import posts from '@/assets/data/posts.json';
import FeedPost from '@/components/FeedPost';
export default function HomeScreen() {
  const [currentPostId, setCurrentPostId] = useState<null | string>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setCurrentPostId(viewableItems[0].item.id);
      }
    },
  );

  return (
    <FlatList
      data={posts}
      renderItem={({item: post}) => (
        <FeedPost post={post} isVisible={currentPostId === post.id} />
      )}
      keyExtractor={item => `post-${item.id}`}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
}
