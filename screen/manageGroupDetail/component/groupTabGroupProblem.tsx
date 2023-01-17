import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GroupProblemDataType} from './groupProblemContent';
import {useNavigation} from '@react-navigation/native';

interface GroupTabGroupProblemType {
  data: GroupProblemDataType[];
}

function GroupTabGroupProblem({data}: GroupTabGroupProblemType) {
  const navigation = useNavigation();

  const handleDetail = id => {
    navigation.navigate(
      'ManageGroupTabGroupProblemDetail' as never,
      {id: id} as never,
    );
  };

  return (
    <>
      {data.map(item => (
        <TouchableOpacity
          onPress={() => handleDetail(item.id)}
          style={styles.container}
          key={item.id}>
          <Text style={styles.title}>{`Tên nhóm: ${item.name}`}</Text>
          <Text style={styles.text}>{`Lĩnh vực: ${item.branch}`}</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.text}>{`Ghi chú: ${item.note}`}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF6F6',
    marginTop: 8,
    padding: 10,
    borderRadius: 8,
  },
  title: {
    fontWeight: '400',
    color: 'black',
    fontSize: 16,
  },
  text: {
    paddingTop: 3,
  },
});

export default GroupTabGroupProblem;
