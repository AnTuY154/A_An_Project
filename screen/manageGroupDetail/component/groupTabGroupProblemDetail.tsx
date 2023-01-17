import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Linking,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../../component/header/header';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import GroupInfoItem from './groupInfoItem';
import {styles as itemStyles} from './groupInfoItem';

interface fileType {
  secretId: string;
  fileName: string;
}

interface GroupProblemDataDetail {
  id: string;
  name: string;
  branch: string;
  note: string;
  file: fileType[];
}

function GroupProblemDetail(props) {
  const {id} = props['0'].route.params;
  const [data, setData] = useState<GroupProblemDataDetail>();

  useEffect(() => {
    setData({
      id: 'TT-0001',
      name: 'Vấn đề về quy định hành chính',
      branch: 'BO01',
      note: `TB _0200984079____Nội dung chi tiết phản ánh ánh__kh yc nhập khiếu nại nhân viên đã thu hồi vbhxh bản web. kh k hề nhận được thông báo và cũng như yêu cầu về việc thu hồi tài khoản. kh yc hỗ trợ kiểm tra mở lại trong ngày hôm nay _Đã hẹn KH: Viettel sẽ phản hồi kết quả sớm nhất.`,
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
  }, []);

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
      <Header label="Chi tiết vấn đề" />
      <View style={[styles.body_container]}>
        {data && (
          <View style={[styles.content_container]}>
            <GroupInfoItem title="Mã nhóm vấn đề" content={data.id} />
            <GroupInfoItem title="Tên nhóm vấn đề" content={data.name} />
            <GroupInfoItem title="Lĩnh vực" content={data.branch} />
            <GroupInfoItem title="Ghi chú" content={data.note} />

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
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F5FB',
  },
  body_container: {
    padding: 20,
  },
  content_container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 20,
    height: 20,
  },
  file_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default GroupProblemDetail;
