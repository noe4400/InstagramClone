import React, {ReactNode} from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

interface IScaleAnimation {
  cb?: () => void;
  children: ReactNode;
}

export default function ScaleAnimation({
  cb = () => {},
  children,
}: IScaleAnimation) {
  const scaleDownAnimation = useSharedValue(1);

  const scaleHandler = Gesture.Tap()
    .maxDuration(250)
    .onBegin(() => {
      runOnJS(cb)();
      ('worklet');
      scaleDownAnimation.value = withSpring(0.6);
    })

    .onFinalize(() => {
      'worklet';
      scaleDownAnimation.value = withSpring(1);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scaleDownAnimation.value}],
  }));
  return (
    <Animated.View style={animatedStyle}>
      <GestureDetector gesture={scaleHandler}>{children}</GestureDetector>
    </Animated.View>
  );
}
