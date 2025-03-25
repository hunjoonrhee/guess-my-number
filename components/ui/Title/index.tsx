import { Platform } from 'react-native';

const Title = Platform.select({
  ios: require('./Title.ios').default,
  android: require('./Title.android').default,
});

export default Title;
