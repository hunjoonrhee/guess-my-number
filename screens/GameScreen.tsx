import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import LogBox from '../components/LogBox';
type GameScreenProps = {
  hintInput?: () => void;
};
const GameScreen: React.FC<GameScreenProps> = (props: GameScreenProps) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Opponents's Guess</Text>
      </View>
      <View style={styles.randomNumberContainer}>
        <Text style={styles.randomNumber}> 57 </Text>
      </View>
      <View style={styles.hintContainer}>
        <Text style={styles.hintText}> Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={() => console.log('-')}> - </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={() => console.log('+')}> + </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.logsContainer}>
        <View>
          <LogBox />
        </View>
        <View>
          <LogBox />
        </View>
        <View>
          <LogBox />
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  titleContainer: {
    borderColor: 'white',
    borderWidth: 2,
    paddingHorizontal: 4,
    paddingVertical: 16,
    marginTop: 100,
    marginBottom: 40,
    marginHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  randomNumberContainer: {
    borderColor: '#ddb52f',
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
  },
  hintText: {
    fontSize: 32,
    color: '#C8832A',
    textAlign: 'center',
    marginVertical: 8,
  },
  hintContainer: {
    marginHorizontal: 48,
    marginVertical: 20,
    padding: 16,
    backgroundColor: '#3b021f',
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
