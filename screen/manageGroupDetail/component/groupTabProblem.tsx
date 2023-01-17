import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GroupProblemDataType, ProblemDataType} from './groupProblemContent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

interface GroupTabProblemType {
  data: ProblemDataType[];
}

function GroupTabProblem({data}: GroupTabProblemType) {
  const navigation = useNavigation();

  const handleDetail = id => {
    navigation.navigate(
      'ManageGroupTabProblemDetail' as never,
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
          <View style={{flex: 1}}>
            <Text style={styles.title}>{`Nội dung: ${item.content}`}</Text>
            <Text
              style={styles.text}>{`Nguồn từ hệ thống: ${item.source}`}</Text>
            <Text style={styles.text}>{`Đơn vị phát sinh: ${item.unit}`}</Text>
            <Text style={styles.text}>{`Lĩnh vực: ${item.branch}`}</Text>
          </View>
          <View>
            {item.status === 'pending' ? (
              <FontAwesome name="circle" size={18} color={'#EC0734'} />
            ) : (
              <FontAwesome name="circle" size={18} color={'#0FA958'} />
            )}
          </View>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // height: Dimensions.get('window').height / 2,
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

export default GroupTabProblem;
