import { Text, StyleSheet } from 'react-native';

import { ReactNode } from 'react';
import Colors from '../../constants/colors';

type InstructionTextProps = {
  children: ReactNode;
  style: any;
};
const InstructionText: React.FC<InstructionTextProps> = (props: InstructionTextProps) => {
  const { children, style } = props;

  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
