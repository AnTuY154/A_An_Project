import {ActivityIndicator, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import GroupMemberItem, {GroupMemberItemType} from './groupMemberItem';
import {styles as commonStyles} from '../styles';

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
    <ScrollView style={commonStyles.container}>
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

export default GroupMemberContent;
