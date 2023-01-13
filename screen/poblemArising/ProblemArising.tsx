import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
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

const ProblemArising = () => {
  const data = [
    {
      id: '1',
      title: '1.VĐPS_305',
      unit: 'Hà Nội, Bắc Giang',
      unitPerson: 'B01 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
      content: 'Nội dung vấn đề Nội dung vấn đề Nội dung vấn đề Nội ...',
      status: 'Chưa xử lý',
      iconStatus: 'active',
    },
    {
      id: '2',
      title: '2.VĐPS_405',
      unit: 'Hà Nội, Bắc Giang',
      unitPerson: 'B02 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
      content: 'Nội dung vấn đề Nội dung vấn đề Nội dung vấn đề Nội ...',
      status: 'Chờ xem xét',
      iconStatus: 'inactive',
    },
    {
      id: '3',
      title: '3.VĐPS_505',
      unit: 'Hà Nội, Bắc Giang',
      unitPerson: 'B03 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
      content: 'Nội dung vấn đề Nội dung vấn đề Nội dung vấn đề Nội ...',
      status: 'Thực hiện kiểm tra',
      iconStatus: 'disable',
    },
    {
      id: '4',
      title: '4.VĐPS_605',
      unit: 'Hà Nội, Bắc Giang',
      unitPerson: 'B04 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
      content: 'Nội dung vấn đề Nội dung vấn đề Nội dung vấn đề Nội ...',
      status: 'Chưa xử lý',
      iconStatus: 'active',
    },
    {
      id: '5',
      title: '5.VĐPS_705',
      unit: 'Hà Nội, Bắc Giang',
      unitPerson: 'B05 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
      content: 'Nội dung vấn đề Nội dung vấn đề Nội dung vấn đề Nội ...',
      status: 'Chờ xem xét',
      iconStatus: 'inactive',
    },
  ];

  const [value, setValue] = useState('');
  const [datalist, setDataList] = useState<any>(data);
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const onChangeText = (text: string) => {
    const response = data.filter(item => {
      if (item.title.includes(text) || item.unitPerson.includes(text)) {
        return item;
      }
    });
    setValue(text);
    setDataList(response);
  };

  useEffect(() => {
    if (value == '') {
      setDataList(data);
    }
  }, [value]);


  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/app_bg.png')}
        style={styles.backgroundImage}
      />
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
                onPress={() => setModalVisible(!isModalVisible)}>
                <Text style={styles.rightColor}>Có</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.containerContent}>
        <View style={styles.containerHeader}>
          <Ionicons name="arrow-back" size={20} color={'white'} />
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
              />
            ) : (
              <View style={styles.containerSearchEmpty}>
                <Image source={images.searchempty} style={styles.emptyImage} />
                <Text style={styles.textEmpty}>
                  Không có vấn đề phát sinh nào
                </Text>
              </View>
            )}
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('ProblemArisingAdd' as never)}
          style={styles.iconClick}>
          <Ionicons name="add" color={'white'} size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProblemArising;
