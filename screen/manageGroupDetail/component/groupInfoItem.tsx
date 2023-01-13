import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {SectionsType} from '../manageGroupDetail';

export interface GroupInfoItemType {
  title: string;
  content: string;
  style?: any;
}

const GroupInfoItem = ({title, content,style}: GroupInfoItemType) => {
  return (
    <View style={[styles.conatiner,style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  conatiner: {
    paddingVertical: 5,
  },
  title: {
    fontSize: 12,
  },
  content: {
    fontSize: 16,
    color: '#000000',
  },
});

export default GroupInfoItem;
