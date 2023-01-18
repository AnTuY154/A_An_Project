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
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export interface GroupObjectItemType {
  id: string;
  unit: string;
  content: string;
  startTime: string;
  endTime: string;
  isBorder?: boolean;
  index?: number;
}
const ICON_COLOR = '#2FAF98';

const GroupObjectItem = ({
  content,
  endTime,
  id,
  startTime,
  unit,
  index,
  isBorder = false,
}: GroupObjectItemType) => {
  return (
    <View style={[styles.container, isBorder && styles.border_bottom]}>
      <Text style={styles.name}>{`${index}. Đơn vị: ${unit}`}</Text>

      <View style={styles.item_container}>
        <Text style={styles.title}>Nội dung </Text>
        <Text style={styles.content}>{`: ${content}`}</Text>
      </View>
      <View style={styles.item_container}>
        <Text style={styles.title}>Từ ngày </Text>
        <Text style={styles.content}>{`: ${startTime}`}</Text>
      </View>
      <View style={styles.item_container}>
        <Text style={styles.title}>Đến ngày </Text>
        <Text style={styles.content}>{`: ${endTime}`}</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  border_bottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#D6D5D5',
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  content: {
    fontSize: 14,
    flexBasis: '80%',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    flexBasis: '20%',
  },
  item_container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 8,
  },
});

export default GroupObjectItem;
