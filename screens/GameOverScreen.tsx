import { View, Image, StyleSheet, Text } from 'react-native';
import Title from '../components/Title';
import Colors from '../constants/color';
import PrimaryButton from '../components/PrimaryButton';
import { LogValue } from './GameScreen';

type GameOverScreenProps = {
  logValueAtGameOver: LogValue;
  goBackToStart: () => void;
};
const GameOverScreen: React.FC<GameOverScreenProps> = (props: GameOverScreenProps) => {
  const { logValueAtGameOver, goBackToStart } = props;

  return (
    <View style={styles.rootContainer}>
      <Title> GAME OVER !</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{logValueAtGameOver.count}</Text> rounds
          to guess the number
          <Text style={styles.highlight}> {logValueAtGameOver.value}</Text>.
        </Text>
        <PrimaryButton pressHandler={goBackToStart}> Start New Game </PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
