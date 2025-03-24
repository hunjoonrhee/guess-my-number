import { LogValue } from '../screens/GameScreen';

export function randomNumberGenerator(hint?: string, prevLog?: LogValue[]) {
  if (!hint && !prevLog) {
    return Math.floor(Math.random() * 99) + 1;
  } else if (hint && prevLog) {
    let fromValue;
    let toValue;
    const reversed = [...prevLog].reverse();
    if (hint === 'minus') {
      fromValue = reversed.find((log) => log.hint === 'plus')?.value! + 1 || 1;
      toValue = prevLog[prevLog.length - 1].value;
      console.log('minus: ', fromValue, toValue);
    } else {
      fromValue = prevLog[prevLog.length - 1].value + 1;
      toValue = reversed.find((log) => log.hint === 'minus')?.value || 100;
      console.log('plus: ', fromValue, toValue);
    }
    return Math.floor(Math.random() * (toValue - fromValue)) + fromValue;
  } else {
    return -1;
  }
}
