import {
  TextInput,
  View,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

type StartGameScreenProps = {
  pickedUserInputHandler: (pickedNumber: number) => void;
};
const StartGameScreen: React.FC<StartGameScreenProps> = (props: StartGameScreenProps) => {
  const { pickedUserInputHandler } = props;
  const [numberInput, setNumberInput] = useState<string>('');
  const { width, height } = useWindowDimensions();
  const handleOnChange = (enteredText: string) => {
    setNumberInput(enteredText);
  };

  const resetInput = () => {
    setNumberInput('');
  };
  const errorAtEmptyInput = () => {
    Toast.show({
      type: 'error', // success, error, info 가능
      text1: 'you must enter a number!',
    });
  };
  const errorAtNegativNumber = () => {
    Toast.show({
      type: 'error', // success, error, info 가능
      text1: 'number must be bigger than 0!',
    });
  };

  const confirmInput = () => {
    if (!numberInput) {
      errorAtEmptyInput();
    } else if (parseInt(numberInput) < 0) {
      errorAtNegativNumber();
      setNumberInput('');
    } else {
      pickedUserInputHandler(parseInt(numberInput));
    }
  };

  const marginTop = height < 400 ? 30 : 100;
  const fontSize = width < 400 ? 24 : 32;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTop }]}>
          <Title> Guess My Number </Title>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.numberInput, , { fontSize: fontSize }]}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={numberInput}
              onChangeText={handleOnChange}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton pressHandler={resetInput}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton pressHandler={confirmInput}>Confirm</PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginVertical: 48,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    fontFamily: 'open-sans-bold',
    height: 50,
    width: 50,
    paddingVertical: 0,
    lineHeight: 40,
    includeFontPadding: false,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
