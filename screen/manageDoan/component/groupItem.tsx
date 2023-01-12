/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';

export interface GroupItemType {
    name: string;
    group: string;
    host: string;
    timeStart: string;
    timeEnd: string;
    status: 'Completed' | 'InProgress';
    id: string
  }
  

const GroupItem = ({group,host,id,name,status,timeEnd,timeStart}: GroupItemType) => {
  return (
    <View style={styles.container}>
  
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

export default GroupItem;
