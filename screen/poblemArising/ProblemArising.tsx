import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProblemArising = () => {
  return (
    <View style={styles.container}>
      <Text>Problem Arising</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default ProblemArising;
