import {FlatList, Image, useWindowDimensions} from 'react-native';
import React from 'react';
interface ICarousel {
  images: string[];
}

const CarouselImg = ({imgUri}: {imgUri: string}) => {
  const {width} = useWindowDimensions();
  return (
    <Image
      source={{
        uri: imgUri,
      }}
      style={{aspectRatio: 1, width}}
    />
  );
};

const Carousel = ({images}: ICarousel) => {
  return (
    <FlatList
      data={images}
      renderItem={({item}) => <CarouselImg imgUri={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
    />
  );
};

export default Carousel;
