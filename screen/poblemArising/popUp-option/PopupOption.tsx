import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal/dist/modal';
import styles from '../styles';

const PopupOption = ({onPress, isModalVisible, setModalVisible, title}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBlock}>
          <Text style={styles.black}>{title}</Text>
          <View style={styles.containerClick}>
            <TouchableOpacity
              style={styles.clickLeft}
              onPress={() => setModalVisible(!isModalVisible)}>
              <Text style={styles.leftColor}>Không</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clickRight} onPress={onPress}>
              <Text style={styles.rightColor}>Có</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopupOption;
