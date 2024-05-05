import React, {ReactNode} from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import colors from '@/assets/theme/colors';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

interface IDoubleTapAnimation {
  children: ReactNode;
  iconSize?: number;
  setLike?: (value: boolean) => void;
}

const AnimatedMasked = Animated.createAnimatedComponent(MaskedView);

const DoubleTapAnimation = ({
  children,
  iconSize = 100,
  setLike = () => {},
}: IDoubleTapAnimation) => {
  const {width: witdhScreen} = useWindowDimensions();
  const x = useSharedValue<number>(0);
  const y = useSharedValue<number>(0);
  const rotateAnimation = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  const translateX = useSharedValue<number>(0);
  const scale = useSharedValue<number>(0);
  const rotate = useDerivedValue(() => {
    return interpolate(rotateAnimation.value, [0, 1], [0, 30]);
  });

  const doubleTapGestureHandler = Gesture.Tap()
    .numberOfTaps(2)
    .onBegin(() => {
      x.value = 0;
      y.value = 0;
      scale.value = 0;
      translateY.value = 0;
      translateX.value = 0;
      rotateAnimation.value = 0;
    })
    .onStart(Event => {
      x.value = Event.x - iconSize / 2;
      y.value = Event.y - iconSize / 2;
      scale.value = withDelay(200, withSpring(1));
      const randomDeg = Math.random() * 2 - 1;
      rotateAnimation.value = withSequence(
        withTiming(randomDeg, {duration: 400}),
        withTiming(-randomDeg, {duration: 400}),
      );
    })
    .onEnd(Event => {
      runOnJS(setLike)(true);
      translateY.value = withDelay(950, withTiming(-1000));
      const halfScreenWidh = witdhScreen / 2;
      translateX.value = withDelay(
        895,
        withTiming(
          interpolate(
            Event.x,
            [0, halfScreenWidh, witdhScreen],
            [halfScreenWidh, 0, -halfScreenWidh],
          ),
        ),
      );
    });

  const animatedStyleTranslatePosition = useAnimatedStyle(() => {
    return {
      left: x.value,
      top: y.value,
      width: iconSize,
      height: iconSize,
      position: 'absolute',
      transform: [
        {scale: scale.value},
        {rotate: `${rotate.value} deg`},
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <GestureDetector gesture={doubleTapGestureHandler}>
      <View>
        {children}
        <AnimatedMasked
          style={[animatedStyleTranslatePosition]}
          maskElement={
            <AntDesign name={'heart'} size={iconSize} color={colors.accent} />
          }>
          <LinearGradient
            locations={[0, 0.33, 0.9, 1]}
            colors={['#962FBF', '#D62976', '#FA7E1E', '#FEDA75']}
            style={[StyleSheet.absoluteFill]}
            useAngle
            angle={45}
          />
        </AnimatedMasked>
      </View>
    </GestureDetector>
  );
};

export default DoubleTapAnimation;
