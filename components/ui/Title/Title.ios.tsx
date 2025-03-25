import { ReactNode } from 'react';
import { View, Text, StyleSheet, Dimensions, useWindowDimensions, Platform } from 'react-native';
import Colors from '../../../constants/colors';

type TitleProps = {
  children: ReactNode;
};
const Title: React.FC<TitleProps> = (props: TitleProps) => {
  const { children } = props;
  const { width, height } = useWindowDimensions();

  let marginTop = width < 450 || height < 450 ? 24 : 40;
  return (
    <View style={[styles.titleContainer, { marginTop: marginTop }]}>
      <Text style={styles.title}> {children} </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    borderColor: 'white',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 0,
    paddingHorizontal: 4,
    paddingVertical: 16,
    maxWidth: '80%',
    width: 300,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});
