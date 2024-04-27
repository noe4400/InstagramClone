import React, {useState} from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';
import styles from './styles';
interface IVideoPlayer {
  uri: string | undefined;
  pause: boolean;
}

const VideoPlayer = ({uri, pause}: IVideoPlayer) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const handleMute = () => setIsMuted(!isMuted);

  return (
    <View>
      <Video
        source={{uri}}
        style={styles.videoPlayer}
        resizeMode="cover"
        repeat
        muted={isMuted}
        paused={pause}
      />
      <Pressable onPress={handleMute} style={styles.mute}>
        <Ionicons
          name={isMuted ? 'volume-mute' : 'volume-medium'}
          size={15}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;
