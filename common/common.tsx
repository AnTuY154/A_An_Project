import {StyleSheet, Image, Platform, Linking, Dimensions} from 'react-native';
import React from 'react';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';

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
          source={require('../screen/assets/word.png')}
        />
      );
    case 'xls':
      return (
        <Image
          style={styles.image}
          source={require('../screen/assets/excel.png')}
        />
      );
    case 'pdf':
      return (
        <Image
          style={styles.image}
          source={require('../screen/assets/pdf.png')}
        />
      );
    default:
      return (
        <Image
          style={styles.image}
          source={require('../screen/assets/image_placeholder.png')}
        />
      );
  }
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

export {openFile, getFileIcon};
