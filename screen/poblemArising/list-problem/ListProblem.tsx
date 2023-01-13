import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import SwipeableFlatList from 'react-native-swipeable-list';
import images from '../../assets/images';
import styles from '../styles';
import ItemList from './ItemList';

interface TypeListProblem {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  dataList: any;
  isModalVisible: boolean;
}

const ListProblem: React.FC<TypeListProblem> = ({
  dataList,
  setModalVisible,
  isModalVisible,
}) => {
  const extractItemKey = item => {
    return item.id.toString();
  };

  const QuickActions = (index, item) => {
    console.log('item', item);
    return (
      <View style={styles.qaContainer}>
        {item.status == 'Chờ xem xét' && (
          <View style={styles.qaContainer}>
            <TouchableOpacity style={[styles.blockSwipe, styles.borderSwipe]}>
              <Image source={images.gitDiff} style={styles.imageIcon} />
              <Text style={styles.colorGit}>Chuyển phân tích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.blockSwipe, styles.backgroundDoc]}>
              <Image source={images.doc} style={styles.imageIcon} />
              <Text style={styles.titleIcon}>Sao chép</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.blockSwipe, styles.backgroundTrash]}
              onPress={() => setModalVisible(!isModalVisible)}>
              <Image source={images.trash} style={styles.imageIcon} />
              <Text style={styles.titleIcon}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}

        {item.status == 'Chưa xử lý' && (
          <TouchableOpacity
            style={[styles.blockSwipe, styles.backgroundCancelProblem]}>
            <Image source={images.gitDiff} style={styles.imageIcon} />
            <Text style={styles.white}>Hủy chuyển phân tích</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <SwipeableFlatList
      keyExtractor={extractItemKey}
      data={dataList}
      renderItem={item => <ItemList item={item} />}
      maxSwipeDistance={({item}) => {
        if (item.status == 'Chờ xem xét') {
          return 240;
        } else {
          return 90;
        }
      }}
      renderQuickActions={({index, item}) => QuickActions(index, item)}
      contentContainerStyle={styles.contentContainerStyle}
      shouldBounceOnMount={true}
      onEndReached={() => console.log('item')}
      onEndReachedThreshold={0.2}
    />
  );
};

export default ListProblem;
