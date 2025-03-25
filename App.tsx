import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message';
import { useCallback, useEffect, useState } from 'react';
import GameScreen, { LogValue } from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [pickedUserInput, setPickedUserInput] = useState<number | undefined>(undefined);
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);
  const [logAtGameOver, setLogAtGameOver] = useState<LogValue | undefined>(undefined);
  const pickedUserInputHandler = (pickedNumber: number) => {
    setPickedUserInput(pickedNumber);
  };

  const gameOverHandler = (isGameOver: boolean, logValue: LogValue) => {
    setGameIsOver(isGameOver);
    setLogAtGameOver(logValue);
  };

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const goBackToStart = () => {
    setLogAtGameOver(undefined);
    setGameIsOver(false);
    setPickedUserInput(undefined);
  };

  let screen = <StartGameScreen pickedUserInputHandler={pickedUserInputHandler} />;
  if (pickedUserInput) {
    screen = <GameScreen pickedNumber={pickedUserInput} gameOverHandler={gameOverHandler} />;
  }
  if (gameIsOver && logAtGameOver) {
    screen = <GameOverScreen logValueAtGameOver={logAtGameOver} goBackToStart={goBackToStart} />;
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <Toast />
          <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
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
