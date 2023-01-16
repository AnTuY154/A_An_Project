import {StyleSheet, View, Text, ScrollView, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GroupProblemDataType} from './groupProblemContent';

interface GroupTabGroupProblemType {
  data: GroupProblemDataType[];
}

function GroupTabGroupProblem({data}: GroupTabGroupProblemType) {
  return (
    <>
      {data.map(item => (
        <View style={styles.container} key={item.id}>
          <Text style={styles.title}>{`Tên nhóm: ${item.name}`}</Text>
          <Text style={styles.text}>{`Lĩnh vực: ${item.branch}`}</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.text}>{`Ghi chú: ${item.note}`}</Text>
        </View>
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
