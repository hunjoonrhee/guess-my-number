import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import LogValue from '../components/game/LogValue';
import { randomNumberGenerator } from '../utils/randomNumberGenerator';
import { useEffect, useState } from 'react';
import Title from '../components/ui/Title';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
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
  const [logValues, setLogValues] = useState<LogValue[]>([
    { hint: undefined, value: randomNumberGenerator()!, count: 1 },
  ]);
  const { pickedNumber, gameOverHandler } = props;
  const { width, height } = useWindowDimensions();

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

  let content = (
    <>
      <NumberContainer logValues={logValues} />
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
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
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={() => pressHint('minus')}>
              <Ionicons name="remove-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>

          <NumberContainer logValues={logValues} />
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={() => pressHint('plus')}>
              <Ionicons name="add-sharp" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <Title> Opponents's Guess</Title>
      {content}
      <View style={styles.logsContainer}>
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
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
  },
  logsContainer: {
    flex: 1,
    padding: 16,
  },
});
