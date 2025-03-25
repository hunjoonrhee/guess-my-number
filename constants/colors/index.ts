import { Platform } from 'react-native';

const Colors = Platform.select({
  ios: require('./colors.ios').default,
  android: require('./colors.android').default,
});

export default Colors;
