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

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeItem from './component/homeItem';
import Header from '../../component/header/header';

const Home = () => {
  const navigation = useNavigation();
  const handleChangeScreen = (screen: string) => {
    navigation.navigate(screen as never);
  };

  return (
    <View style={styles.container}>
      <Header label="Danh sách tính năng" />

      <View style={styles.body_container}>
        <HomeItem
          onPress={() => handleChangeScreen('ManageGroup')}
          name="notification"
          notifications="32"
          label="Thông báo"
        />

        <HomeItem
          onPress={() => handleChangeScreen('Dashboard')}
          name="dashboard"
          label="Dashboard"
        />

        <HomeItem
          onPress={() => handleChangeScreen('MyStack')}
          name="problem"
          label="Vấn đề phát sinh"
        />

        <HomeItem
          onPress={() => handleChangeScreen('ManageGroup')}
          name="manage_group"
          label="Quản lý Đoàn"
        />

        <HomeItem
          onPress={() => handleChangeScreen('ManageGroup')}
          name="manage_work"
          label="Quản lý công việc"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  body_container: {
    width: '100%',
    flexDirection: 'row',
    paddingRight: 40,
    flexWrap: 'wrap',
  },
});

export default Home;
