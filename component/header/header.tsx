import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

interface HeaderType {
  label: string;
  handleBack?: () => void;
}

function Header({label, handleBack}: HeaderType) {
  const navigation = useNavigation();

  const handleBackIcon = () => {
    if (handleBack) {
      handleBack();
    }
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <Entypo
        onPress={handleBackIcon}
        style={styles.back_icon}
        name="chevron-left"
        size={24}
        color="black"
      />
      <Text style={styles.header_text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  back_icon: {
    position: 'absolute',
    left: 15,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white',
  },
});

export default Header;
