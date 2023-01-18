import React, {useState} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {v4 as uuid} from 'uuid';

const ItemList = ({
  item,
  setClick,
  setCheckboxLongPress,
  checkBoxLongPress,
  handleCheckedItem,
}) => {
  const itemData = item.item;

  const navigation = useNavigation();

  const checkStatus = () => {
    if (String(itemData.iconStatus) === 'Chưa xử lý') {
      return '#E7B401';
    } else if (String(itemData.iconStatus) === 'Chờ xem xét') {
      return '#858585';
    } else if (String(itemData.iconStatus) === 'Thực hiện kiểm tra') {
      return '#078CF3';
    } else if (String(itemData.iconStatus) === 'Thực hiện khắc phục') {
      return '#25A90F';
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.containerItem,
        {backgroundColor: itemData.isChecked ? '#FFDFDF' : 'white'},
      ]}
      key={uuid()}
      onLongPress={() => (
        setClick(false), setCheckboxLongPress(!checkBoxLongPress)
      )}
      onPress={() => (
        setClick(false),
        navigation.navigate(
          'ProblemArisingDetail' as never,
          {item: itemData} as never,
        )
      )}>
      <View style={styles.blockList}>
        <View style={styles.listLeft}>
          {checkBoxLongPress && (
            <CheckBox
              value={itemData.isChecked}
              onValueChange={() => handleCheckedItem(itemData.id)}
            />
          )}
        </View>
        <View style={styles.listRight}>
          <View style={styles.blockTitle}>
            <Text style={[styles.titleHeaderBlock]}>
              {itemData.sourceProblem}
            </Text>

            <Text
              style={[
                styles.statusBlock,
                {
                  color:
                    itemData.status == 'Chưa xử lý'
                      ? '#E7B401'
                      : itemData.status == 'Chờ xem xét'
                      ? '#858585'
                      : itemData.status == 'Thực hiện kiểm tra'
                      ? '#078CF3'
                      : '#25A90F',
                },
              ]}>
              {itemData.status}
            </Text>
          </View>
          <View style={styles.blockItem}>
            <View style={styles.blockLeft}>
              <Text style={styles.unitBlock}>
                Đơn vị phát sinh:{' '}
                {/* {itemData.unitProblem.map(item => (
                <Text>{item.name} , </Text>
              ))} */}
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
                  itemData.status == 'Chờ xem xét'
                    ? images.inactive
                    : itemData.status == 'Chưa xử lý'
                    ? images.process
                    : images.implement
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
