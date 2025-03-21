import { ReactNode } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type PrimaryButtonProps = {
  children: ReactNode;
  pressHandler: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = (props: PrimaryButtonProps) => {
  const { children, pressHandler } = props;
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
        style={({ pressed }) =>
          !pressed ? styles.buttonInnerContainer : [styles.buttonInnerContainer, styles.pressed]
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
