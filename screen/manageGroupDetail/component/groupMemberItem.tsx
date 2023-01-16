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

export interface GroupMemberItemType {
  index?: number;
  isBorder?: boolean;
  name: string;
  position: string;
  mail: string;
  office: string;
  part: string;
}

const ICON_COLOR = '#2FAF98';

const GroupMemberItem = ({
  index,
  mail,
  name,
  office,
  part,
  position,
  isBorder,
}: GroupMemberItemType) => {
  return (
    <View style={[styles.container, isBorder && styles.border_bottom]}>
      <Text style={styles.name}>{`${index}. ${name}`}</Text>

      <View style={styles.item_container}>
        <FontAwesome name="user-circle" color={ICON_COLOR} size={14} />
        <Text style={styles.content}>{position}</Text>
      </View>

      <View style={styles.item_container}>
        <Icon name="mail" color={ICON_COLOR} size={14} />
        <Text style={styles.content}>{mail}</Text>
      </View>

      <View style={styles.item_container}>
        <Icon name="idcard" color={ICON_COLOR} size={14} />
        <Text style={styles.content}>{office}</Text>
      </View>

      <View style={styles.item_container}>
        <MaterialCommunityIcons
          name="sitemap-outline"
          color={ICON_COLOR}
          size={14}
        />
        <Text style={styles.content}>{part}</Text>
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
    paddingLeft: 10,
  },
  item_container: {
    paddingTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },
});

export default GroupMemberItem;
