import React, { useState } from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import images from '../../assets/images';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

const ItemList = ({item}) => {
  const itemData = item.item;

  const navigation = useNavigation();
  const [checkBoxLongPress, setCheckboxLongPress] = useState(false)

  return (
  
    <Pressable
      style={[styles.containerItem]}
      key={item}
      onLongPress={() => setCheckboxLongPress(!checkBoxLongPress)}
      onPress={() => navigation.navigate('ProblemArisingDetail' as never, {item: itemData} as never)}>
      <View
        style={[
          {
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            zIndex: 99,
          },
        ]}>
          {
            checkBoxLongPress &&<Text>sss</Text>

          }
        <View style={styles.blockTitle}>
          <Text style={[styles.titleHeaderBlock]}>{itemData.sourceProblem}</Text>

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
              Đơn vị phát sinh: {itemData.unitProblem.map((item) => <Text>{item.name} ,  </Text>)}
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
    </Pressable>
  );
};

export default ItemList;
