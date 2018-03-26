import { Dimensions } from 'react-native';

export default (height, width) => {
  const deviceWidth = Dimensions.get(
    'window',
  ).width;
  const imgWidth =
    width * (deviceWidth / 375);
  const imgHeight =
    imgWidth * (height / width);

  return {
    height: imgHeight,
    width: imgWidth,
  };
};
