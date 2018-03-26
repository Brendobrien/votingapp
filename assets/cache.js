import { Asset, Font } from 'expo';
// import _ from 'lodash';
// import images from './images';
import fonts from './fonts';

export default () =>
  Promise.all([
    // _.values(images).map(x => Asset.fromModule(x).downloadAsync()),
    ...fonts.map(x =>
      Font.loadAsync(x),
    ),
  ]);
