/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {StyleSheet, SafeAreaView, View} from 'react-native';
import React from 'react';

const MasterLayout = (Component: any) => {
  return (...props) => (
    <SafeAreaView style={styles.screen_container}>
      <View style={styles.screen_container}>
        <Component {...props} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen_container: {
    flex: 1,
    width: '100%',
  },
});

export default MasterLayout;
