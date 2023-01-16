import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

export interface GroupInfoItemType {
  title: string;
  content: string;
  style?: any;
}

const GroupInfoItem = ({title, content, style}: GroupInfoItemType) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
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
