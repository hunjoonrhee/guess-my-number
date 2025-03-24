import { Text, View, StyleSheet } from 'react-native';

type LogValueProps = {
  guessedValue: number;
  count: number;
};
const LogValue: React.FC<LogValueProps> = (props: LogValueProps) => {
  const { guessedValue, count } = props;
  return (
    <View style={styles.logContainer}>
      <View style={styles.logTextContainer}>
        <Text style={styles.logNumer}> # {count} </Text>
        <Text style={styles.logText}> Opponent's Guess: {guessedValue}</Text>
      </View>
    </View>
  );
};

export default LogValue;

const styles = StyleSheet.create({
  logContainer: {
    borderRadius: 50,
    borderColor: '#3b021f',
    backgroundColor: '#ddb52f',
    borderWidth: 2,
    marginHorizontal: 48,
    marginVertical: 8,
    padding: 8,
  },
  logTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logNumer: {
    padding: 8,
  },
  logText: {
    padding: 8,
    textAlign: 'right',
  },
});
