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

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

export interface GroupItemType {
  name: string;
  groupName: string;
  host: string;
  timeStart: string;
  timeEnd: string;
  status: 'Completed' | 'InProgress';
  id: string;
  index?: number;
}

const GroupItem = ({
  groupName,
  host,
  id,
  name,
  status,
  timeEnd,
  timeStart,
  index,
}: GroupItemType) => {
  const navigation = useNavigation();

  const convertStatus = (status: 'Completed' | 'InProgress') => {
    switch (status) {
      case 'Completed':
        return <Text style={styles.completed}>Đã hoàn thành</Text>;
      case 'InProgress':
        return <Text style={styles.inProgress}>Đang làm việc</Text>;
    }
  };

  return (
    <TouchableOpacity onPress={() => { navigation.navigate('ManageGroupDetail' as never, { id: id } as never) }} style={styles.container}>
      <View style={styles.flex_row}>
        <Text style={[{ flex: 1 }, styles.text_bold]}>{`${index}.${name}`}</Text>
        <Text style={styles.text_bold}>{`${timeStart} - ${timeEnd}`}</Text>
      </View>
      <View style={styles.flex_row}>
        <Text style={{ flex: 1 }}>{`Đoàn: ${groupName}`}</Text>
        {convertStatus(status)}
      </View>
      <View style={styles.flex_row}>
        <Text
          style={{ width: '80%' }}
          numberOfLines={1}
          ellipsizeMode="tail">{`Đơn vị chủ trì: ${host}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: '100%',
  },
  flex_row: {
    flexDirection: 'row',
  },
  completed: {
    color: 'green',
  },
  inProgress: {
    color: 'red',
  },
  text_bold: {
    fontWeight: 'bold',
  },
});

export default GroupItem;
