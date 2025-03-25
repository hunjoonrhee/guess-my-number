import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

type LogValueProps = {
  guessedValue: number;
  count: number;
};
const LogValue: React.FC<LogValueProps> = (props: LogValueProps) => {
  const { guessedValue, count } = props;
  return (
    <View style={styles.logTextContainer}>
      <Text style={styles.logText}> # {count} </Text>
      <Text style={styles.logText}> Opponent's Guess: {guessedValue}</Text>
    </View>
  );
};

export default LogValue;

const styles = StyleSheet.create({
  logTextContainer: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  logNumer: {
    padding: 8,
  },
  logText: {
    fontFamily: 'open-sans',
  },
});
