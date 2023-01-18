import React, {Dispatch, SetStateAction, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import images from '../../assets/images';
import styles from '../styles';
import ItemList from './ItemList';
import _ from 'lodash';
import {v4 as uuid} from 'uuid';

interface TypeListProblem {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  dataList: any;
  isModalVisible: boolean;
  setIndexData: Dispatch<SetStateAction<number>>;
  setDistance: Dispatch<SetStateAction<number>>;
  distance: number;
  checkBoxLongPress: boolean;
  setCheckboxLongPress: Dispatch<SetStateAction<boolean>>;
  handleCheckedItem:(id: any) => void
  setDataList: any;
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
  handleCheckedItem,
  setDataList,
}) => {
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const renderHiddenItem = (itemData, index) => {
    const item = itemData.item;

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
              onPress={() => (
                setModalVisible(!isModalVisible), setIndexData(item.id)
              )}>
              <Image source={images.trash} style={styles.imageIcon} />
              <Text style={styles.titleIcon}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}

        {item.status == 'Chưa xử lý' && click && (
          <TouchableOpacity
            style={[styles.blockSwipe, styles.backgroundCancelProblem]}>
            <Image source={images.gitDiff} style={styles.imageIcon} />
            <Text style={styles.white}>Hủy chuyển phân tích</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };


  const data = {
    id: uuid(),
    key: uuid(),

    sourceProblem: '10.VĐPS_303',
    typeProblem: 'Khiếu nại',
    unitProblem: [
      {
        id: '1',
        name: 'khoi co quan Thach That',
      },
      {
        id: '2',
        name: 'khoi co quan Thach That',
      },
    ],
    title: 'quan doi nhan dan viet nam',
    job: 'Về việc tiếp nhận các khiếu nại đến CSKH',
    field: 'B04 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
    content: 'Nội dung vấn đề Nội dung vấn đề Nội dung vấn đề Nội dung',
    imageList: [
      {
        id: '1',
        image:
          'https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?b=1&s=170667a&w=0&k=20&c=9Ug32UnodYNOr9DGuLwVRk1WExt3D10xZjMe4ujgwp8=',
        value: '12345',
      },
      {
        id: '2',
        image:
          'https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?b=1&s=170667a&w=0&k=20&c=9Ug32UnodYNOr9DGuLwVRk1WExt3D10xZjMe4ujgwp8=',
        value: '12345',
      },
    ],
    status: 'Chờ xem xét',
    iconStatus: 'inactive',
    isChecked: false,
  };

  const handleLoadMore = () => {
    setLoading(true);

    setDataList(current => [...current, data]);
    setLoading(false);
  };

  return (
    <View style={styles.fullWidth}>
      <SwipeListView
        data={dataList}
        renderItem={item => (
          <ItemList
            item={item}
            setClick={setClick}
            checkBoxLongPress={checkBoxLongPress}
            setCheckboxLongPress={setCheckboxLongPress}
            handleCheckedItem={handleCheckedItem}
          />
        )}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={distance}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        disableRightSwipe={true}
        swipeToClosePercent={90}
        onRowClose={() => setClick(false)}
        onRowOpen={() => setClick(true)}
        onRowDidOpen={() => setClick(true)}
        style={styles.fullWidth}
        swipeGestureBegan={itemView => {
          setClick(true);
          const response = dataList.map((itemData, index) => {
            if (Number(index) == Number(itemView)) {
              return itemData;
            }
          });
          const responseFormat = response.filter(itemFormat => itemFormat);
          if (responseFormat[0].status == 'Chờ xem xét') {
            setDistance(-240);
          } else if (responseFormat[0].status == 'Chưa xử lý') {
            setDistance(-90);
          }
        }}
        onEndReached={() => handleLoadMore()}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default ListProblem;
