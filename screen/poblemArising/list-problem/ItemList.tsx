import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import images from '../../assets/images';
import styles from '../styles';

const ItemList = ({item}) => {
  console.log('item', item.item);
  const itemData = item.item;
  return (
    <Pressable
      style={[styles.containerItem]}
      onPress={() => console.log('pree')}>
      <View
        style={[
          {
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            zIndex: 99,
          },
        ]}>
        <View style={styles.blockTitle}>
          <Text style={[styles.titleHeaderBlock]}>{itemData.title}</Text>

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
              Đơn vị phát sinh: {itemData.unit}
            </Text>
            <Text style={styles.fieldBlock} numberOfLines={1}>
              Lĩnh vực: {itemData.unitPerson}
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
    </Pressable>
  );
};

export default ItemList;
