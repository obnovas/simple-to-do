import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const GradientButton = ({ onPress, title, colors }) => (
  <TouchableOpacity onPress={onPress}>
    <LinearGradient
      colors={colors}
      style={styles.button}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
      <Text style={styles.text}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 25,
    elevation: 3,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
