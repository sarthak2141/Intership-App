// TypingAnimation.js
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TypingAnimation = ({ texts, speed = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        if (prev.length < texts[currentIndex].length) {
          return texts[currentIndex].substring(0, prev.length + 1);
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex, speed, texts]);

  useEffect(() => {
    if (currentText === texts[currentIndex]) {
      const timeout = setTimeout(() => {
        const backspaceInterval = setInterval(() => {
          setCurrentText((prev) => {
            if (prev.length > 0) {
              return prev.substring(0, prev.length - 1);
            } else {
              clearInterval(backspaceInterval);
              setCurrentIndex((prev) => (prev + 1) % texts.length);
              return '';
            }
          });
        }, speed);

        return () => clearInterval(backspaceInterval);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [currentText, currentIndex, texts, speed]);

  return (
    <View style={styles.container}>
      {currentText.split(' ').map((word, index) => (
        <Text key={index} style={styles.typingText}>{word}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  typingText: {
    fontSize: 29,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default TypingAnimation;
