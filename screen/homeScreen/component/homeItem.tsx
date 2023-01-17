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

import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface HomeItemType {
  name:
    | 'notification'
    | 'dashboard'
    | 'problem'
    | 'manage_group'
    | 'manage_work';
  label: string;
  onPress: () => void;
  notifications?: string;
}

const HomeItem = ({name, label, notifications, onPress}: HomeItemType) => {
  const getIcon = () => {
    switch (name) {
      case 'notification':
        return (
          <Image
            style={styles.image}
            source={require('../../assets/notification.png')}
          />
        );
      case 'dashboard':
        return (
          <Image
            style={styles.image}
            source={require('../../assets/dashboard.png')}
          />
        );
      case 'problem':
        return (
          <Image
            style={styles.image}
            source={require('../../assets/problem.png')}
          />
        );
      case 'manage_group':
        return (
          <Image
            style={styles.image}
            source={require('../../assets/group.png')}
          />
        );
      default:
        return (
          <Image
            style={styles.image}
            source={require('../../assets/manage_work.png')}
          />
        );
    }
  };

  return (
    <View style={styles.box_container}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        {getIcon()}
        <Text style={styles.label}>{label}</Text>
        {notifications && (
          <View style={styles.notification}>
            <Text style={{color: 'red'}}>{notifications}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 16,
  },
  image: {
    width: 26,
    height: 26,
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 5,
  },
  box_container: {
    flexBasis: '50%',
    paddingLeft: 40,
    paddingTop: 30,
  },
  notification: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: -15,
    right: -15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeItem;
