import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  Linking,
  ActivityIndicator,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import GroupInfoItem from './groupInfoItem';
import {styles as itemStyles} from './groupInfoItem';
import GroupMemberItem, {GroupMemberItemType} from './groupMemberItem';

interface GroupMemberContentType {
  isActive: boolean;
}

const GroupMemberContent = ({isActive}: GroupMemberContentType) => {
  const [data, setData] = useState<GroupMemberItemType[] | null>(null);

  useEffect(() => {
    if (isActive && !data) {
      setData([
        {
          name: 'Đỗ Trọng Anh Tuấn 1',
          position: 'Trưởng Đoàn',
          mail: 'tuandta2@viettel.com',
          office: 'Giám đốc thanh tra',
          part: 'TTKT',
        },
        {
          name: 'Đỗ Trọng Anh Tuấn 2',
          position: 'Trưởng Đoàn',
          mail: 'tuandta3@viettel.com',
          office: 'Giám đốc thanh tra',
          part: 'TTKT',
        },
        {
          name: 'Đỗ Trọng Anh Tuấn 3',
          position: 'Trưởng Đoàn',
          mail: 'tuandta4@viettel.com',
          office: 'Giám đốc thanh tra',
          part: 'TTKT',
        },
        {
          name: 'Đỗ Trọng Anh Tuấn 4',
          position: 'Trưởng Đoàn',
          mail: 'tuandta5@viettel.com',
          office: 'Giám đốc thanh tra',
          part: 'TTKT',
        },
      ]);
    }
  }, [isActive, data]);

  return (
    <ScrollView style={styles.container}>
      {data ? (
        data.map((item, index: number) => (
          <GroupMemberItem
            isBorder={index < data.length - 1}
            key={item.mail}
            {...item}
            index={index + 1}
          />
        ))
      ) : (
        <ActivityIndicator size="small" color="#0000ff" />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderTopWidth: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    maxHeight: Dimensions.get('window').height / 2,
  },
  flex_50: {
    flexBasis: '50%',
  },
  file_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default GroupMemberContent;
