import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GroupInfoItem from './groupInfoItem';
import {styles as itemStyles} from './groupInfoItem';
import {styles as commonStyles} from '../styles';

import {getFileIcon, openFile} from '../../../common/common';

interface GroupInfoContentType {
  isActive: boolean;
}

interface GroupInfoDataType {
  code: string;
  name: string;
  type: string;
  planNumber: string;
  planReleaseDate: string;
  decisionNumber: string;
  decisionReleaseDate: string;
  fromDate: string;
  toDate: string;
  detail: string;
  note: string;
  host: string;
  file: fileType[];
}

interface fileType {
  secretId: string;
  fileName: string;
}

const GroupInfoContent = ({isActive}: GroupInfoContentType) => {
  const [data, setData] = useState<GroupInfoDataType | null>(null);

  const fakeCallApi = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          code: 'TTKT-123',
          name: 'Đoàn thanh tra Hà Nội, Bắc Giang',
          type: 'Thanh tra',
          planNumber: '1423/KH-VTQD',
          planReleaseDate: '20/12/2022',
          decisionNumber: '1423/KH-VTQD',
          decisionReleaseDate: '20/12/2022',
          fromDate: '20/12/2022',
          toDate: '20/12/2022',
          detail:
            'Thanh tra quá trình đảm bảo nguồn cung Tết tại Bắc Giang, Hải Dương',
          note: 'Thanh tra đợt 1',
          host: 'Phòng thanh tra',
          file: [
            {
              fileName: 'Văn bản Quyết định.doc',
              secretId: '1234',
            },
            {
              fileName: 'Danh sách công việc.xls',
              secretId: '12345',
            },
            {
              fileName: 'Văn bản trình ký.pdf',
              secretId: '123456',
            },
            {
              fileName: 'Ảnh tham khảo.jpeg',
              secretId: '1234567',
            },
          ],
        });
      }, 5000);
    });
  };

  useEffect(() => {
    if (data === null && isActive) {
      const initScreen = async () => {
        const apiData: any = await fakeCallApi();
        setData(apiData);
      };
      initScreen();
    }
  }, [isActive, data]);

  return (
    <ScrollView style={commonStyles.container}>
      {data ? (
        <>
          <GroupInfoItem title="Mã đoàn" content={data.code} />
          <GroupInfoItem title="Đoàn" content={data.name} />
          <GroupInfoItem title="Hình thức" content={data.code} />
          <GroupInfoItem title="Số kế hoạch" content={data.planNumber} />
          <GroupInfoItem
            title="Ngày ban hành kế hoạch"
            content={data.planReleaseDate}
          />
          <GroupInfoItem title="Số quyết định" content={data.decisionNumber} />
          <GroupInfoItem
            title="Ngày ban hành quyết định"
            content={data.decisionNumber}
          />

          <View style={{flexDirection: 'row'}}>
            <GroupInfoItem
              style={commonStyles.flex_50}
              title="Từ ngày"
              content={data.fromDate}
            />
            <GroupInfoItem title="Đến ngày" content={data.toDate} />
          </View>
          <GroupInfoItem title="Về việc" content={data.detail} />
          <GroupInfoItem title="Ghi chú" content={data.note} />
          <GroupInfoItem title="Đơn vị chủ trì" content={data.host} />
          <GroupInfoItem title="Về việc" content={data.detail} />

          <View style={itemStyles.container}>
            <Text style={itemStyles.title}>File đính kèm</Text>
            {data.file?.map(item => (
              <TouchableOpacity
                onPress={() => openFile(item)}
                style={commonStyles.file_container}
                key={item.secretId}>
                {getFileIcon(item.fileName)}
                <Text style={{color: '#007AD9', paddingHorizontal: 20}}>
                  {item.fileName}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      ) : (
        <ActivityIndicator size="small" color="#0000ff" />
      )}
    </ScrollView>
  );
};

export default GroupInfoContent;
