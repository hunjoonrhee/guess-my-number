import { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/color';

type TitleProps = {
  children: ReactNode;
};
const Title: React.FC<TitleProps> = (props: TitleProps) => {
  const { children } = props;
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}> {children} </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    borderColor: 'white',
    borderWidth: 2,
    paddingHorizontal: 4,
    paddingVertical: 16,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
});
