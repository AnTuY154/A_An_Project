/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import React from 'react';

const MasterLayout = (Component: any) => {
  return (
    <SafeAreaView style={styles.screen_container}>
      <View style={styles.screen_container}>{Component}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
    width: '100%',
  },
});

export default MasterLayout;
