import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';
import { LogValue } from '../../screens/GameScreen';

type NumberContainerProps = {
  logValues: LogValue[];
};
const NumberContainer: React.FC<NumberContainerProps> = (props: NumberContainerProps) => {
  const { logValues } = props;

  return (
    <View style={styles.randomNumberContainer}>
      <Text style={styles.randomNumber}> {logValues[logValues.length - 1].value} </Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  randomNumberContainer: {
    borderColor: Colors.accent500,
    borderRadius: 8,
    borderWidth: 4,
    padding: deviceWidth < 400 ? 12 : 24,
    margin: deviceWidth < 400 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  randomNumber: {
    fontSize: deviceWidth < 400 ? 28 : 36,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
  },
});
