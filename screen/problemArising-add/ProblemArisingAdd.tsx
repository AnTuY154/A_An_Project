import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import {formValidationSchema} from '../utils/Utils';

interface TypeData {
  image: string;
  value: string;
}

interface TypeIndexList {
  indexValue: number;
  value: string;
  image: string;
}

interface TypeDataCheckbox {
  id: string;
  name: string;
  checked: boolean;
}

const ProblemArisingAdd = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const [openField, setOpenField] = useState(false);
  const [valueField, setValueField] = useState(null);
  const [itemsField, setItemsField] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const dataCheckbox = [
    {
      id: '1',
      name: 'Khoi cơ quan Tap đoan',
      checked: false,
    },
    {
      id: '2',
      name: 'Khoi cơ quan Thach That',
      checked: true,
    },
    {
      id: '3',
      name: 'Khoi co quan viettiel',
      checked: false,
    },
    {
      id: '4',
      name: 'Khoi co quan dien luc',
      checked: false,
    },
    {
      id: '5',
      name: 'Khoi co quan support',
      checked: true,
    },
    {
      id: '6',
      name: 'Khoi co quan dep trai',
      checked: false,
    },
    {
      id: '7',
      name: 'Khoi co quan hot boy',
      checked: false,
    },
    {
      id: '8',
      name: 'Tất cả',
      checked: false,
    },
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [response, setResponse] = React.useState<any>(null);
  const [data, setData] = useState<TypeData[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalInput, setModalInput] = useState<boolean>(false);
  const [valueOnchange, setValueOnchange] = useState<TypeData[]>([]);
  const [indexList, setIndexList] = useState<TypeIndexList>();
  const [openList, setOpenList] = useState<boolean>(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [dataListCheckbox, setDataListCheckbox] =
    useState<TypeDataCheckbox[]>(dataCheckbox);
  const [openSearch, setOpenSearch] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const [submitForm, setSubitmirForm] = useState(false);

  const onButtonPress = async (type, options) => {
    if (type === 'capture') {
      const responseValue: any = await ImagePicker.launchCamera(
        options,
        setResponse,
      );
      setModalVisible(false);
      if (responseValue.errors) {
        console.log('error', responseValue.errors);
      } else {
        console.log('response', responseValue.assets[0].uri);

        setData([
          ...data,
          {
            image: responseValue.assets[0].uri,
            value: 'value1',
          },
        ]);
      }
    } else {
      ImagePicker.launchImageLibrary(options, (response: any) => {
        if (response) {
          setData([
            ...data,
            {
              image: response.assets[0].uri,
              value: 'value1',
            },
          ]);
          setModalVisible(false);
        }
      });
    }
  };

  const onChangeValue = (text: string) => {
    const cloneData = [...data];
    const response: any = cloneData.map((item, index) => {
      if (index == indexList?.indexValue) {
        return {
          ...item,
          value: text,
        };
      } else {
        return item;
      }
    });
    setValueOnchange(response);
    if (indexList) {
      setIndexList({
        ...indexList,
        value: text,
      });
    }
  };

  const handleCheckbox = indexData => {
    console.log('innnn', dataCheckbox.length, indexData + 1);
    const response = dataListCheckbox.map((item, index) => {
      if (index == indexData) {
        return {...item, checked: !item.checked};
      }
      if (dataCheckbox.length == indexData + 1) {
        return {...item, checked: true};
      } else {
        return item;
      }
    });
    setDataListCheckbox(response);
  };

  const onChangeValueInput = text => {
    const response = dataListCheckbox.filter(item => {
      if (String(item.name).includes(text)) {
        return item;
      }
    });
    const value = response.filter(item => item !== undefined);
    setValueInput(text);
    if (value) {
      setDataListCheckbox(value);
    }
    if (text === '') {
      setDataListCheckbox(dataCheckbox);
    }
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View
          style={{
            width: '100%',
            height: '100%',
            zIndex: 99,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={20} color={'green'} />
        </View>
      )}
      <View style={styles.containerHeader}>
        <Ionicons
          name="chevron-back-outline"
          size={23}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 15, color: 'black'}}>
          Thêm mới vấn đề phát sinh
        </Text>
        <Text> </Text>
      </View>
      <Modal
        onDismiss={() => setModalVisible(false)}
        animationIn="fadeIn"
        isVisible={isModalVisible}
        style={{
          margin: 0,
          alignItems: undefined,
          justifyContent: undefined,
        }}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(!isModalVisible)}
            style={styles.fullWidth}
          />
          <View style={styles.blockCamera}>
            <TouchableOpacity
              style={styles.camearaItem}
              onPress={() =>
                onButtonPress('capture', {
                  saveToPhotos: true,
                  mediaType: 'photo',
                  includeBase64: false,
                })
              }>
              <Text style={styles.black}>Chụp ảnh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.camearaItem}
              onPress={() =>
                onButtonPress('library', {
                  saveToPhotos: true,
                  mediaType: 'photo',
                  includeBase64: false,
                })
              }>
              <Text style={styles.black}>Chọn từ thư viện</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationIn="fadeIn"
        isVisible={modalInput}
        style={{
          margin: 0, // This is the important style you need to set
          alignItems: undefined,
          justifyContent: undefined,
        }}>
        <View style={styles.modalContainerInput}>
          <TouchableOpacity
            style={styles.closeIconClick}
            onPress={() => setModalInput(false)}>
            <AntDesign name="close" color={'white'} size={22} />
          </TouchableOpacity>
          <View style={styles.modalInputTop}>
            <Image source={{uri: indexList?.image}} style={styles.imageModal} />
          </View>
          <View style={styles.modalInputBottom}>
            <Text style={styles.textModalInput}>Nhập Ghi chú</Text>
            <View style={styles.inputBlock}>
              <TextInput
                onChangeText={text => onChangeValue(text)}
                style={styles.input}
                multiline
                value={indexList?.value}
              />
              <TouchableOpacity
                style={styles.clickSave}
                onPress={() => (setData(valueOnchange), setModalInput(false))}>
                <Text style={styles.white}>Luu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView>
        <View style={styles.fullWidth}>
          <Formik
            initialValues={{sourceProblem: '', title: '', job: '', content: ''}}
            validationSchema={formValidationSchema}
            onSubmit={(values, {setSubmitting}) => {
              console.log('valkuesss', values);
              //loại vấn đề: value
              //lĩnh vực: valueField
              //ảnh: data
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <View style={styles.blockWidth}>
                <View>
                  <Text style={styles.sourceProblemTitle}>Nguồn vấn đề</Text>
                  <TextInput
                    onChangeText={handleChange('sourceProblem')}
                    onBlur={handleBlur('sourceProblem')}
                    value={values.sourceProblem}
                    style={styles.inputSource}
                    placeholder="Vấn đề phát sinh"
                    placeholderTextColor={'black'}
                  />
                </View>
                {errors.sourceProblem &&
                  touched.sourceProblem &&
                  errors.sourceProblem && (
                    <Text style={styles.error}>{errors.sourceProblem}</Text>
                  )}
                <View>
                  <Text style={styles.sourceProblemTitle}>
                    Loại vấn đề <Text style={{color: 'red'}}>*</Text>
                  </Text>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={{minHeight: 45, borderColor: '#E1E1E1'}}
                    dropDownContainerStyle={{borderColor: '#E1E1E1'}}
                    placeholder={'-Chọn-'}
                    placeholderStyle={{color: 'black'}}
                  />
                </View>
                {value === null && submitForm && (
                  <Text style={styles.error}>Loại vấn đề đang rỗng</Text>
                )}
                {!openSearch ? (
                  <View style={styles.containerCheckbox}>
                    <TouchableOpacity
                      style={styles.checkboxTop}
                      onPress={() => setOpenList(!openList)}>
                      {openList ? (
                        <AntDesign name="up" />
                      ) : (
                        <AntDesign name="down" />
                      )}

                      <Text style={styles.titleCheckbox}>
                        Đơn vị phát sinh vấn đề
                      </Text>
                    </TouchableOpacity>
                    <View style={styles.checkboxBottom}>
                      <TouchableOpacity
                        style={styles.blockSearch}
                        onPress={() => setOpenSearch(!openSearch)}>
                        <AntDesign name="search1" color={'red'} size={15} />
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <View style={styles.inputSearchContainer}>
                    <TouchableOpacity
                      style={styles.iconInput}
                      onPress={() => setOpenSearch(!openSearch)}>
                      <AntDesign name="left" color={'black'} size={15} />
                    </TouchableOpacity>
                    <View style={styles.inputRightContainer}>
                      <TextInput
                        style={styles.inputRightBlock}
                        placeholder="Tìm kiếm đơn vị phát sinh vấn đề"
                        placeholderTextColor={'red'}
                        value={valueInput}
                        onChangeText={text => onChangeValueInput(text)}
                      />
                    </View>
                  </View>
                )}
                <View style={styles.containerList}>
                  <FlatList
                    data={dataListCheckbox}
                    nestedScrollEnabled
                    renderItem={({item, index}) => {
                      return (
                        <View style={styles.blockCheckbox}>
                          <CheckBox
                            disabled={false}
                            value={item.checked}
                            onChange={data => handleCheckbox(index)}
                          />
                          <Text style={{color: '#2F2F2F'}}>{item.name}</Text>
                        </View>
                      );
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.sourceProblemTitle}>Tiêu đề</Text>
                  <TextInput
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    value={values.title}
                    style={styles.inputSource}
                  />
                </View>
                {errors.title && touched.title && errors.title && (
                  <Text style={styles.error}>{errors.title}</Text>
                )}
                <View>
                  <Text style={styles.sourceProblemTitle}>Về việc</Text>
                  <TextInput
                    onChangeText={handleChange('job')}
                    onBlur={handleBlur('job')}
                    value={values.job}
                    style={styles.inputSource}
                  />
                </View>
                {errors.job && touched.job && errors.job && (
                  <Text style={styles.error}>{errors.job}</Text>
                )}
                <View>
                  <Text style={styles.sourceProblemTitle}>
                    Lĩnh vực <Text style={{color: 'red'}}>*</Text>
                  </Text>
                  <DropDownPicker
                    open={openField}
                    value={valueField}
                    items={itemsField}
                    setOpen={setOpenField}
                    setValue={setValueField}
                    setItems={setItemsField}
                    style={{minHeight: 45, borderColor: '#E1E1E1'}}
                    dropDownContainerStyle={{borderColor: '#E1E1E1'}}
                  />
                </View>
                {valueField === null && submitForm && (
                  <Text style={styles.error}>Loại vấn đề đang rỗng</Text>
                )}

                <View>
                  <Text style={styles.sourceProblemTitle}>Nội dung</Text>
                  <TextInput
                    onChangeText={handleChange('content')}
                    onBlur={handleBlur('content')}
                    value={values.content}
                    style={[styles.inputSource, {height: 100}]}
                    multiline={true}
                    numberOfLines={9}
                  />
                </View>
                {errors.content && touched.content && errors.content && (
                  <Text style={styles.error}>{errors.content}</Text>
                )}
                <View>
                  <Text style={styles.sourceProblemTitle}>Thêm ảnh</Text>
                  <TouchableOpacity
                    style={styles.clickImage}
                    onPress={() => setModalVisible(!isModalVisible)}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={data}
                  style={styles.fullWidth}
                  renderItem={({item, index}) => {
                    return (
                      <View style={styles.containerImage}>
                        <View style={styles.blockImage}>
                          <View style={styles.imageLeft}>
                            <Image
                              style={styles.imageClick}
                              source={{
                                uri: item?.image,
                              }}
                            />
                            <TouchableOpacity style={styles.closeIcon}>
                              <AntDesign
                                name="closecircle"
                                size={20}
                                color={'black'}
                              />
                            </TouchableOpacity>
                          </View>
                          <View style={styles.imageRightContainer}>
                            <View style={styles.imageRight_left}>
                              <TextInput
                                style={styles.inputRight}
                                value={item?.value}
                                editable={false}
                                numberOfLines={1}
                                onChangeText={text => setData({...data})}
                              />
                            </View>
                            <TouchableOpacity
                              style={styles.imagRight_right}
                              onPress={() => (
                                setModalInput(!modalInput),
                                setIndexList({
                                  indexValue: index,
                                  value: item.value,
                                  image: item.image,
                                })
                              )}>
                              <Feather
                                name="edit"
                                color={'#80828A'}
                                size={20}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    );
                  }}
                />
                <View style={styles.clickContainer}>
                  <TouchableOpacity
                    style={styles.blockClick}
                    onPress={() => {
                      handleSubmit();
                      setSubitmirForm(true);
                    }}>
                    <Text>Hoàn thành</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProblemArisingAdd;
