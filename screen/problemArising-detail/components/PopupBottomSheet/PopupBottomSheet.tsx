import React, {Dispatch, SetStateAction} from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import images from '../../../assets/images';
import Modal from 'react-native-modal';
import styles from '../../styles';
import ItemBottomSheet from '../PopupBottomSheet/ItemBottomSheet';

interface TypePopupBottomSheet {
  openBottomSheet: boolean;
  setOpenBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateDocument: Dispatch<SetStateAction<boolean>>;
}

const PopupBottomSheet: React.FC<TypePopupBottomSheet> = ({
  openBottomSheet,
  setOpenBottomSheet,
  setUpdateDocument,
}) => {
  return (
    <Modal
      isVisible={openBottomSheet}
      onModalHide={() => console.log('ppppp')}
      animationIn="fadeIn"
      style={{
        margin: 0,
        alignItems: undefined,
        justifyContent: undefined,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
      <View style={styles.containerModal}>
        <TouchableOpacity
          onPress={() => setOpenBottomSheet(false)}
          style={{
            width: '100%',
            height: Platform.OS === 'ios' ? '85%' : '80%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
        <View
          style={{
            width: '100%',
            height: Platform.OS === 'ios' ? '15%' : '20%',
            backgroundColor: 'white',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          <View style={styles.modalBlock}>
            <ItemBottomSheet
              icon={images.giftDiff}
              title="Chuyển phân tích"
              onPress={() => {}}
            />
            <ItemBottomSheet
              icon={images.sua}
              title="Sửa"
              onPress={() => (
                setUpdateDocument(true), setOpenBottomSheet(false)
              )}
            />
            <ItemBottomSheet
              icon={images.copy}
              title="Sao chép"
              onPress={() => {}}
            />
            <ItemBottomSheet
              icon={images.delete}
              title="Xóa"
              onPress={() => {}}
            />
          </View>
        </View>

        {/* <View style={styles.modalBlock}>
          <ItemBottomSheet icon={images.giftDiff} title="Chuyển phân tích" />
          <ItemBottomSheet icon={images.sua} title="Sửa" />
          <ItemBottomSheet icon={images.copy} title="Sao chép" />
          <ItemBottomSheet icon={images.delete} title="Xóa" />
        </View> */}
      </View>
    </Modal>
  );
};

export default PopupBottomSheet;
