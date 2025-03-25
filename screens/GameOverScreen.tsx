import { View, Image, StyleSheet, Text, useWindowDimensions, ScrollView } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import { LogValue } from './GameScreen';

type GameOverScreenProps = {
  logValueAtGameOver: LogValue;
  goBackToStart: () => void;
};
const GameOverScreen: React.FC<GameOverScreenProps> = (props: GameOverScreenProps) => {
  const { logValueAtGameOver, goBackToStart } = props;
  const { width, height } = useWindowDimensions();
  console.log(width, height);

  let imageSize = 300;
  if (width < 400) {
    imageSize = 200;
  }

  if (height < 450) {
    imageSize = 150;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.rootContainer}>
        <Title> GAME OVER !</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.highlight}>{logValueAtGameOver.count}</Text>{' '}
            rounds to guess the number
            <Text style={styles.highlight}> {logValueAtGameOver.value}</Text>.
          </Text>
          <PrimaryButton pressHandler={goBackToStart}> Start New Game </PrimaryButton>
        </View>
      </View>
    </ScrollView>
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
