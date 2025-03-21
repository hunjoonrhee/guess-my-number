import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [pickedUserInput, setPickedUserInput] = useState<number | undefined>(undefined);

  const pickedUserInputHandler = (pickedNumber: number) => {
    setPickedUserInput(pickedNumber);
  };

  let screen = <StartGameScreen pickedUserInputHandler={pickedUserInputHandler} />;
  if (pickedUserInput) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <Toast />
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
