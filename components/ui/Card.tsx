import { View, StyleSheet } from 'react-native';

import { ReactNode } from 'react';
import Colors from '../../constants/colors';

type CardProps = {
  children: ReactNode;
};
const Card: React.FC<CardProps> = (props: CardProps) => {
  const { children } = props;
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
