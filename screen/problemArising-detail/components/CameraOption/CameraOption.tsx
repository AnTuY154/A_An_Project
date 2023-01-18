import React, {Dispatch, SetStateAction, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import styles from '../../../problemArising-add/styles';

interface TypeCameraOption {
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  isModalVisible: boolean;
  setData: any;
  data: any;
  imageListView: any;
  setImageListView: any;
}

const CameraOption: React.FC<TypeCameraOption> = ({
  setModalVisible,
  isModalVisible,
  setData,
  data,
  setImageListView,
  imageListView,
}) => {
  const [response, setResponse] = React.useState<any>(null);

  const onButtonPress = async (type, options) => {
    if (type === 'capture') {
      const responseValue: any = await ImagePicker.launchCamera(
        options,
        setResponse,
      );
      setModalVisible(false);
      if (responseValue.errors) {
        console.log('error', responseValue.errors);
      } else {
        console.log('response', responseValue.assets[0].uri);

        setData([
          ...data,
          {
            image: responseValue.assets[0].uri,
            value: 'value1',
          },
        ]);

        setImageListView([
          ...imageListView,
          {
            image: responseValue.assets[0].uri,
            value: 'value1',
            id: imageListView.length + 1,
          },
        ]);
      }
    } else {
      ImagePicker.launchImageLibrary(options, (response: any) => {
        if (response) {
          setData([
            ...data,
            {
              image: response.assets[0].uri,
              value: 'value1',
            },
          ]);
          setImageListView([
            ...imageListView,
            {
              image: response.assets[0].uri,
              value: 'value1',
              id: imageListView.length + 1,
            },
          ]);

          setModalVisible(false);
        }
      });
    }
  };

  return (
    <Modal
      onDismiss={() => setModalVisible(false)}
      animationIn="fadeIn"
      isVisible={isModalVisible}
      style={{
        margin: 0,
        alignItems: undefined,
        justifyContent: undefined,
      }}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(!isModalVisible)}
          style={styles.fullWidth}
        />
        <View style={styles.blockCamera}>
          <TouchableOpacity
            style={styles.camearaItem}
            onPress={() =>
              onButtonPress('capture', {
                saveToPhotos: true,
                mediaType: 'photo',
                includeBase64: false,
              })
            }>
            <Text style={styles.black}>Chụp ảnh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.camearaItem}
            onPress={() =>
              onButtonPress('library', {
                saveToPhotos: true,
                mediaType: 'photo',
                includeBase64: false,
              })
            }>
            <Text style={styles.black}>Chọn từ thư viện</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CameraOption;
