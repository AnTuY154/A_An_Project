import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import images from '../assets/images';
import styles from './styles';
import Modal from 'react-native-modal';
import ListProblem from './list-problem/ListProblem';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import Entypo from 'react-native-vector-icons/Entypo';
import _ from 'lodash';
import {v4 as uuid} from 'uuid';

const ProblemArising = () => {
  const dataProblemArising = [
    {
      id: uuid(),
      key: '0',
      sourceProblem: '1.VĐPS_303',
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
      title: 'don khieu nai CSKH',
      job: 'Về việc tiếp nhận các khiếu nại đến CSKH',
      field: 'B01 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
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
    },
    {
      id: uuid(),
      key: '1',

      sourceProblem: '2.VĐPS_303',
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
      title: 'vss tra cong',
      job: 'Về việc tiếp nhận các khiếu nại đến CSKH',
      field: 'B02 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
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
      status: 'Chưa xử lý',
      iconStatus: 'inactive',
      isChecked: false,
    },
    {
      id: uuid(),
      key: '2',

      sourceProblem: '3.VĐPS_303',
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
      title: 'don khieu nai dep trai',
      job: 'Về việc tiếp nhận các khiếu nại đến CSKH',
      field: 'B03 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
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
      status: 'Thực hiện kiểm tra',
      iconStatus: 'inactive',
      isChecked: false,
    },
    {
      id: uuid(),
      key: '3',

      sourceProblem: '4.VĐPS_303',
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
      status: 'Thực hiện khắc phục',
      iconStatus: 'inactive',
      isChecked: false,
    },
    {
      id: uuid(),
      key: '4',

      sourceProblem: '5.VĐPS_303',
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
    },
    {
      id: uuid(),
      key: '5',

      sourceProblem: '6.VĐPS_303',
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
    },
  ];

  const [value, setValue] = useState('');
  const [datalist, setDataList] = useState<any>(dataProblemArising);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [indexData, setIndexData] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const navigation = useNavigation();
  const [checkBoxLongPress, setCheckboxLongPress] = useState<boolean>(false);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [optionClickAll, setOptionClickAll] = useState<boolean>(false);

  const onChangeText = (text: string) => {
    const response = dataProblemArising.filter(item => {
      if (item.title.includes(text) || item.sourceProblem.includes(text)) {
        return item;
      }
    });
    setValue(text);
    setDataList(response);
  };

  useEffect(() => {
    if (value == '') {
      setDataList(dataProblemArising);
    }
  }, [value]);

  const handleDelete = () => {
    const response = datalist.filter((item, index) => item.id !== indexData);
    setDataList(response);
    setModalVisible(false);
  };

  const handleCheckAll = () => {
    const response = datalist.map(item => {
      if (item.status === 'Chờ xem xét') {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      } else {
        return item;
      }
    });
    setCheckAll(!checkAll);
    setDataList(response);
  };

  const handleCheckedItem = id => {
    const response = datalist.map(item => {
      if (item.id == id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      } else {
        return item;
      }
    });
    setDataList(response);
  };

  const handleDeleteAll = () => {
    const response = datalist.filter(item => item.isChecked);
    var dif = _.differenceWith(datalist, response, _.isEqual);
    setDataList(dif);
    setCheckboxLongPress(false);
    setModalVisible(false);
  };

  useEffect(() => {
    if (!checkBoxLongPress) {
      setCheckAll(false);
      setOptionClickAll(false);
    }
  }, [checkBoxLongPress]);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/app_bg.png')}
        style={styles.backgroundImage}
      />

      <SafeAreaView style={styles.container}>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalBlock}>
              <Text style={styles.black}>
                Bạn có chắc chắn muốn xóa vấn đề phát sinh không?
              </Text>
              <View style={styles.containerClick}>
                <TouchableOpacity
                  style={styles.clickLeft}
                  onPress={() => setModalVisible(!isModalVisible)}>
                  <Text style={styles.leftColor}>Không</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.clickRight}
                  onPress={() => {
                    if (checkBoxLongPress) {
                      handleDeleteAll();
                    } else {
                      handleDelete();
                    }
                  }}>
                  <Text style={styles.rightColor}>Có</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.containerContent}>
          <View style={styles.containerHeader}>
            <Ionicons
              name="arrow-back"
              size={20}
              color={'white'}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.titleHeader}>Vấn đề phát sinh</Text>
            <Text />
          </View>

          <View style={styles.containerList}>
            <View style={styles.containerSearch}>
              <View style={styles.blockSearch}>
                <TextInput
                  multiline={false}
                  style={styles.inputSearch}
                  placeholder="Mã vấn đề, Đơn vị phát sinh, Lĩnh vực, Loại vấn đề, Từ khóa"
                  numberOfLines={1}
                  value={value}
                  onChangeText={(text: string) => onChangeText(text)}
                />
                <AntDesign name="search1" size={20} style={styles.iconSearch} />
              </View>
            </View>

            <View style={styles.containerListData}>
              {datalist.length > 0 ? (
                <ListProblem
                  setModalVisible={setModalVisible}
                  isModalVisible={isModalVisible}
                  dataList={datalist}
                  setIndexData={setIndexData}
                  setDistance={setDistance}
                  distance={distance}
                  setCheckboxLongPress={setCheckboxLongPress}
                  checkBoxLongPress={checkBoxLongPress}
                  handleCheckedItem={handleCheckedItem}
                  setDataList={setDataList}
                />
              ) : (
                <View style={styles.containerSearchEmpty}>
                  <Image
                    source={images.searchempty}
                    style={styles.emptyImage}
                  />
                  <Text style={styles.textEmpty}>
                    Không có vấn đề phát sinh nào
                  </Text>
                </View>
              )}
            </View>
          </View>

          {checkBoxLongPress && (
            <View style={styles.clickAllContainer}>
              <CheckBox
                value={checkAll}
                onValueChange={() => handleCheckAll()}
              />
              <Text style={styles.colorBlack}>Chọn tất cả</Text>
            </View>
          )}
          {!checkBoxLongPress ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProblemArisingAdd' as never)}
              style={styles.iconClick}>
              <Ionicons name="add" color={'white'} size={35} />
            </TouchableOpacity>
          ) : (
            <View style={styles.dottedView}>
              <TouchableOpacity
                onPress={() => setOptionClickAll(true)}
                style={[styles.iconClick, {zIndex: 99}]}>
                <Entypo
                  name="dots-three-horizontal"
                  color={'white'}
                  size={35}
                />
              </TouchableOpacity>
              {optionClickAll && (
                <View style={styles.popupClickAll}>
                  <TouchableOpacity style={styles.popupOptionAll}>
                    <Image
                      source={images.gitDiff}
                      style={styles.imageOptionAll}
                    />
                    <Text style={styles.titleOptionAll}>Chuyển phân tích</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.popupOptionAll}
                    onPress={() => setModalVisible(true)}>
                    <Ionicons name="trash" size={17} color={'black'} />
                    <Text style={styles.titleOptionAll}>Xoá bản ghi</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProblemArising;
