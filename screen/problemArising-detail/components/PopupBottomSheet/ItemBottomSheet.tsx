import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import images from '../../../assets/images';
import styles from '../../styles';

interface TypeItemBottomSheet {
  icon: any;
  title: string;
  onPress: any;
}

const ItemBottomSheet: React.FC<TypeItemBottomSheet> = ({
  icon,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.itemSheet} onPress={onPress}>
      <Image source={icon} style={styles.imageSheet} />
      <Text style={styles.titleSheet}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ItemBottomSheet;
