/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface HeaderType {
  label: string;
  backAction: () => void;
}

const Header = ({label, backAction}: HeaderType) => {
  return (
    <View style={styles.container}>
      <Icon onPress={backAction} name="arrow-left" size={30} color="white"></Icon>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  label: {
    paddingLeft: 20,
    fontSize: 18,
    color: 'white',
  },
});

export default Header;
