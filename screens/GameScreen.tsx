import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import LogValue from '../components/LogValue';
import { randomNumberGenerator } from '../utils/randomNumberGenerator';
import { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import Title from '../components/Title';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/color';
type GameScreenProps = {
  pickedNumber: number;
  gameOverHandler: (isGameOver: boolean, logValue: LogValue) => void;
};
export interface LogValue {
  hint: string | undefined;
  value: number;
  count: number;
}
const GameScreen: React.FC<GameScreenProps> = (props: GameScreenProps) => {
  const [hint, setHint] = useState<string | undefined>(undefined);
  const [lastLogValue, setLastLogValue] = useState<LogValue | undefined>(undefined);
  const [logValues, setLogValues] = useState<LogValue[]>([
    { hint: undefined, value: randomNumberGenerator()!, count: 1 },
  ]);
  const [count, setCount] = useState<number>(0);
  const { pickedNumber, gameOverHandler } = props;

  const pressHint = (tip: string) => {
    setHint(tip);

    setLogValues((prev) => {
      return prev.map((p) => {
        if (!p.hint) {
          return { hint: tip, value: p.value, count: p.count };
        }
        return p;
      });
    });
  };
  console.log(logValues);
  useEffect(() => {
    if (hint) {
      setLogValues((prev) => {
        const lastLogValue = prev[prev.length - 1];
        return [
          ...prev,
          {
            hint: undefined,
            value: randomNumberGenerator(lastLogValue.hint, prev),
            count: lastLogValue.count + 1,
          },
        ];
      });
      setHint(undefined);
    }
  }, [hint]);

  useEffect(() => {
    const lastLogValue = logValues[logValues.length - 1];
    if (lastLogValue.value === pickedNumber) {
      gameOverHandler(true, lastLogValue);
    }
  }, [logValues]);

  return (
    <View style={styles.screenContainer}>
      <Title> Opponents's Guess</Title>
      <View style={styles.randomNumberContainer}>
        <Text style={styles.randomNumber}> {logValues[logValues.length - 1].value} </Text>
      </View>
      <View style={styles.hintContainer}>
        <Text style={styles.hintText}> Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={() => pressHint('minus')}>
              <Ionicons name="remove-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={() => pressHint('plus')}>
              <Ionicons name="add-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.logsContainer}>
        {/* {logValues.map((log) => (
          <View key={log.count}>
            <LogValue guessedValue={log.value} count={log.count} />
          </View>
        ))} */}
        <FlatList
          data={logValues}
          renderItem={(itemData) => (
            <LogValue guessedValue={itemData.item.value} count={itemData.item.count} />
          )}
          keyExtractor={(item) => JSON.stringify(item)}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  randomNumberContainer: {
    borderColor: Colors.accent500,
    borderRadius: 6,
    borderWidth: 4,
    paddingHorizontal: 4,
    marginHorizontal: 48,
    marginVertical: 40,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  randomNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
  },
  hintText: {
    fontFamily: 'open-sans',
    fontSize: 32,
    color: Colors.accent600,
    textAlign: 'center',
    marginVertical: 8,
  },
  hintContainer: {
    marginHorizontal: 48,
    marginVertical: 20,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
  },
  logsContainer: {
    flex: 4,
  },
});
