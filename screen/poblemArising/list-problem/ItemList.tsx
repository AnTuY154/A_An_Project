import React, {useState} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const ItemList = ({item, setClick, setCheckboxLongPress, checkBoxLongPress, handleCheckedItem}) => {
  const itemData = item.item;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.containerItem, {backgroundColor: itemData.isChecked ? '#FFDFDF' : 'white'}]}
      key={itemData.key}
      onLongPress={() => (setClick(false), setCheckboxLongPress(!checkBoxLongPress))}
      onPress={() =>
        (setClick(false),navigation.navigate(
          'ProblemArisingDetail' as never,
          {item: itemData} as never,
        ))
      }>
      <View
        style={styles.blockList}>
      <View style={styles.listLeft}>
       {
        checkBoxLongPress &&  <CheckBox value={itemData.isChecked} onValueChange={() =>handleCheckedItem(itemData.id) } />
       }
      </View>
      <View style={styles.listRight}>
      <View style={styles.blockTitle}>
          <Text style={[styles.titleHeaderBlock]}>
            {itemData.sourceProblem}
          </Text>

          <Text
            style={[
              styles.statusBlock,
              itemData.iconStatus == 'inactive'
                ? styles.colorInactive
                : itemData.iconStatus == 'active'
                ? styles.colorActive
                : styles.colorDisable,
            ]}>
            {itemData.status}
          </Text>
        </View>
        <View style={styles.blockItem}>
          <View style={styles.blockLeft}>
            <Text style={styles.unitBlock}>
              Đơn vị phát sinh:{' '}
              {itemData.unitProblem.map(item => (
                <Text>{item.name} , </Text>
              ))}
            </Text>
            <Text style={styles.fieldBlock} numberOfLines={1}>
              Lĩnh vực: {itemData.field}
            </Text>
            <Text style={styles.contentBlock} numberOfLines={1}>
              Nội dung: {itemData.content}
            </Text>
          </View>
          <View style={styles.blockRight}>
            <Text />
            <Image
              source={
                itemData.iconStatus == 'active'
                  ? images.active
                  : itemData.iconStatus == 'inactive'
                  ? images.inactive
                  : images.disable
              }
              style={styles.imageStatus}
            />
          </View>
        </View>
      </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;
