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
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import GroupInfoItem from './groupInfoItem';
import {styles as itemStyles} from './groupInfoItem';

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

  const openFile = (file: any) => {
    const url = `http://10.60.133.35:8688/file/download/${file.secretId}`;

    const extension = file.fileName.split('.')[1];

    // Feel free to change main path according to your requirements.
    const localFile = `${RNFS.DocumentDirectoryPath}/${file.fileName}`;

    const options = {
      fromUrl: url,
      toFile: localFile,
      progress: (res: any) => {
        console.log('res down', res);
      },
    };

    RNFS.downloadFile(options)
      .promise.then(() => {
        FileViewer.open(localFile)
          .then(data => console.log('data view', data))
          .catch(error => {
            if (error) {
              setTimeout(() => {
                if (Platform.OS === 'android') {
                  if (extension === 'pdf') {
                    Linking.openURL(
                      'https://play.google.com/store/apps/details?id=com.pdf.reader.pdfviewer.pdfeditor.forandroid',
                    );
                  } else if (extension === 'docx') {
                    Linking.openURL(
                      'https://play.google.com/store/apps/details?id=com.microsoft.office.word',
                    );
                  } else if (extension === 'xls') {
                    Linking.openURL(
                      'https://play.google.com/store/apps/details?id=com.microsoft.office.excel',
                    );
                  }
                }
                if (Platform.OS === 'ios') {
                  if (extension === 'pdf') {
                    Linking.openURL(
                      'https://apps.apple.com/vn/app/pdf/id1532638515?l=vi',
                    );
                  } else if (extension === 'docx') {
                    Linking.openURL(
                      'https://apps.apple.com/vn/app/microsoft-word/id586447913?l=vi',
                    );
                  } else if (extension === 'xls') {
                    Linking.openURL(
                      'https://apps.apple.com/vn/app/microsoft-excel/id586683407?l=vi',
                    );
                  }
                }
              }, 1000);
            }
          });
      })
      .then(data => {
        console.log('data new', data);
      })
      .catch(error => {
        console.log('error newe', error);
      });
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName?.split('.')[1];
    switch (extension) {
      case 'doc':
        return (
          <Image
            style={styles.image}
            source={require('../../assets/word.png')}
          />
        );
      case 'xls':
        return (
          <Image
            style={styles.image}
            source={require('../../assets/excel.png')}
          />
        );
      case 'pdf':
        return (
          <Image
            style={styles.image}
            source={require('../../assets/pdf.png')}
          />
        );
      default:
        return (
          <Image
            style={styles.image}
            source={require('../../assets/image_placeholder.png')}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
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
              style={styles.flex_50}
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
                style={styles.file_container}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderTopWidth: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
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

export default GroupInfoContent;
