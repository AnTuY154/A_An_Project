import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import SwipeableFlatList from 'react-native-swipeable-list';
import images from '../../assets/images';
import styles from '../styles';
import ItemList from './ItemList';
import { useIsFocused } from '@react-navigation/native';
interface TypeListProblem {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  dataList: any;
  isModalVisible: boolean;
  setIndexData: Dispatch<SetStateAction<number>>;
  setDistance: any;
  distance: any;
  checkBoxLongPress: any;
  setCheckboxLongPress: any;
  handleCheckedItem: any
}

const ListProblem: React.FC<TypeListProblem> = ({
  dataList,
  setModalVisible,
  isModalVisible,
  setIndexData,
  setDistance,
  distance,
  setCheckboxLongPress,
  checkBoxLongPress,
  handleCheckedItem
}) => {
  const isFocused = useIsFocused();
  const [click, setClick] = useState(false);


  useEffect(() => {
    setClick(false)
  }, [isFocused])
  const renderHiddenItem = (itemData, index) => {
    const item = itemData.item    

    return (
      <View style={styles.qaContainer} key={item}>
        {item.status == 'Chờ xem xét' && click && (
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
              onPress={() => (setModalVisible(!isModalVisible), setIndexData(item.id))}>
              <Image source={images.trash} style={styles.imageIcon} />
              <Text style={styles.titleIcon}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}

        {item.status == 'Chờ xử lý' && click && (
          <TouchableOpacity
            style={[styles.blockSwipe, styles.backgroundCancelProblem]}>
            <Image source={images.gitDiff} style={styles.imageIcon} />
            <Text style={styles.white}>Hủy chuyển phân tích</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  useEffect(() => {
    if(distance == 0) {
      setClick(false)
    }
  },[distance])

  return (
    <SwipeListView
      data={dataList}
      renderItem={item => <ItemList item={item} setClick={setClick} checkBoxLongPress={checkBoxLongPress} setCheckboxLongPress={setCheckboxLongPress} handleCheckedItem={handleCheckedItem}  />}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75}
      rightOpenValue={distance}
      previewRowKey={'0'}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      disableRightSwipe={true}
      swipeGestureBegan={(itemView) => {
        setClick(true)
        const response = dataList.map((itemData, index) => {
          if (Number(index) == Number(itemView)) {
            return itemData;
          }
        });
        const responseFormat = response.filter((itemFormat) => itemFormat)
        if(responseFormat[0].status == 'Chờ xem xét' ){
          setDistance(-240)
        }
        else if(responseFormat[0].status == 'Chờ xử lý'){
          setDistance(-100)
        }else{
          console.log('rrr');
          
          setDistance(0)
        }
      }}
    />
  );
};

export default ListProblem;
