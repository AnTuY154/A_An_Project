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

  const dataProblemArising = [
    {
      id: '1',
      sourceProblem: '1.VĐPS_303',
      typeProblem: 'Khiếu nại',
      unitProblem: [
        {
          id: '1',
          name: 'khoi co quan Thach That'
        },
          {
          id: '2',
          name: 'khoi co quan Thach That'
        }
      ],
      title: 'don khieu nai CSKH',
      job: 'Về việc tiếp nhận các khiếu nại đến CSKH',
      field: 'B05 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
      content: 'Nội dung vấn đề Nội dung vấn đề Nội dung vấn đề Nội dung',
      imageList: [
        {
          id: '1',
          image :'https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?b=1&s=170667a&w=0&k=20&c=9Ug32UnodYNOr9DGuLwVRk1WExt3D10xZjMe4ujgwp8=',
          value: '12345'
        },
        {
          id: '2',
          image :'https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?b=1&s=170667a&w=0&k=20&c=9Ug32UnodYNOr9DGuLwVRk1WExt3D10xZjMe4ujgwp8=',
          value: '12345'
        }
      ],
      status: 'Chờ xem xét',
      iconStatus: 'inactive',
    },
    {
      id: '2',
      sourceProblem: '2.VĐPS_303',
      typeProblem: 'Khiếu nại',
      unitProblem: [
        {
          id: '1',
          name: 'khoi co quan Thach That'
        },
          {
          id: '2',
          name: 'khoi co quan Thach That'
        }
      ],
      title: 'vss tra cong',
      job: 'Về việc tiếp nhận các khiếu nại đến CSKH',
      field: 'B05 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
      content: 'Nội dung vấn đề Nội dung vấn đề Nội dung vấn đề Nội dung',
      imageList: [
        {
          id: '1',
          image :'https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?b=1&s=170667a&w=0&k=20&c=9Ug32UnodYNOr9DGuLwVRk1WExt3D10xZjMe4ujgwp8=',
          value: '12345'
        },
        {
          id: '2',
          image :'https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?b=1&s=170667a&w=0&k=20&c=9Ug32UnodYNOr9DGuLwVRk1WExt3D10xZjMe4ujgwp8=',
          value: '12345'
        }
      ],
      status: 'Chờ xem xét',
      iconStatus: 'inactive',
    },
    {
      id: '3',
      sourceProblem: '3.VĐPS_303',
      typeProblem: 'Khiếu nại',
      unitProblem: [
        {
          id: '1',
          name: 'khoi co quan Thach That'
        },
          {
          id: '2',
          name: 'khoi co quan Thach That'
        }
      ],
      title: 'don khieu nai dep trai',
      job: 'Về việc tiếp nhận các khiếu nại đến CSKH',
      field: 'B05 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
      content: 'Nội dung vấn đề Nội dung vấn đề Nội dung vấn đề Nội dung',
      imageList: [
        {
          id: '1',
          image :'https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?b=1&s=170667a&w=0&k=20&c=9Ug32UnodYNOr9DGuLwVRk1WExt3D10xZjMe4ujgwp8=',
          value: '12345'
        },
        {
          id: '2',
          image :'https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?b=1&s=170667a&w=0&k=20&c=9Ug32UnodYNOr9DGuLwVRk1WExt3D10xZjMe4ujgwp8=',
          value: '12345'
        }
      ],
      status: 'Chờ xem xét',
      iconStatus: 'inactive',
    },
    {
      id: '4',
      sourceProblem: '4.VĐPS_303',
      typeProblem: 'Khiếu nại',
      unitProblem: [
        {
          id: '1',
          name: 'khoi co quan Thach That'
        },
          {
          id: '2',
          name: 'khoi co quan Thach That'
        }
      ],
      title: 'quan doi nhan dan viet nam',
      job: 'Về việc tiếp nhận các khiếu nại đến CSKH',
      field: 'B05 - Lĩnh vực Nhân sự | Loại vấn đề: Khiếu nại',
      content: 'Nội dung vấn đề Nội dung vấn đề Nội dung vấn đề Nội dung',
      imageList: [
        {
          id: '1',
          image :'https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?b=1&s=170667a&w=0&k=20&c=9Ug32UnodYNOr9DGuLwVRk1WExt3D10xZjMe4ujgwp8=',
          value: '12345'
        },
        {
          id: '2',
          image :'https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?b=1&s=170667a&w=0&k=20&c=9Ug32UnodYNOr9DGuLwVRk1WExt3D10xZjMe4ujgwp8=',
          value: '12345'
        }
      ],
      status: 'Chờ xem xét',
      iconStatus: 'inactive',
    }
  ]

  const [value, setValue] = useState('');
  const [datalist, setDataList] = useState<any>(dataProblemArising);
  const [isModalVisible, setModalVisible] = useState(false);
  const [indexData, setIndexData] = useState(0);
  const navigation = useNavigation();

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
    const response = datalist.filter((item,index) => index !== indexData)
    setDataList(response);
    setModalVisible(false)
  }

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
                onPress={() => handleDelete()}>
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
                setIndexData={setIndexData}
                
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
