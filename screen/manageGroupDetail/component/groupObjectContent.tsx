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
import React, {useEffect, useState} from 'react';
import GroupObjectItem, {GroupObjectItemType} from './groupObjectItem';

interface GroupObjectContentType {
  isActive: boolean;
}

const GroupObjectContent = ({isActive}: GroupObjectContentType) => {
  const [data, setData] = useState<GroupObjectItemType[] | null>(null);

  useEffect(() => {
    if (isActive && !data) {
      setData([
        {
          id: '1',
          unit: 'Bưu chính Hà Nội',
          content: 'Thanh tra, Kiểm tra, Kiểm toán: Kiểm tra kho/Bưu cục',
          startTime: '20/12/2022',
          endTime: '21/12/2022',
        },
        {
          id: '2',
          unit: 'Bưu chính Hà Nội',
          content: 'Thanh tra, Kiểm tra, Kiểm toán: Kiểm tra kho/Bưu cục',
          startTime: '20/12/2022',
          endTime: '21/12/2022',
        },
        {
          id: '3',
          unit: 'Bưu chính Hà Nội',
          content: 'Thanh tra, Kiểm tra, Kiểm toán: Kiểm tra kho/Bưu cục',
          startTime: '20/12/2022',
          endTime: '21/12/2022',
        },
        {
          id: '4',
          unit: 'Bưu chính Hà Nội',
          content:
            'Thanh tra, Kiểm tra, Kiểm toán: Kiểm tra kho/Bưu cục tren the gioi nay',
          startTime: '20/12/2022',
          endTime: '21/12/2022',
        },
      ]);
    }
  }, [isActive, data]);

  return (
    <ScrollView style={styles.container}>
      {data ? (
        data.map((item, index: number) => (
          <GroupObjectItem
            key={item.id}
            isBorder={index < data.length - 1}
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
});

export default GroupObjectContent;
