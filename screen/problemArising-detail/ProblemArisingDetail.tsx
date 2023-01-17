import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import ValueInputList from './components/valueInput-list/ValueInputList';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PopupBottomSheet from './components/PopupBottomSheet/PopupBottomSheet';
import {formValidationSchema} from '../utils/Utils';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import CameraOption from './components/CameraOption/CameraOption';
import Toast from 'react-native-toast-message';

interface TypeData {
  image: string;
  value: string;
}

const ProblemArisingDetail = ({route}) => {
  const navigation = useNavigation();
  const {item} = route.params;
  const [openList, setOpenList] = useState<boolean>(false);
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const [updateDocument, setUpdateDocument] = useState<boolean>(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple', isSelected: true},
    {label: 'Banana', value: 'banana'},
  ]);

  const [openField, setOpenField] = useState(false);
  const [valueField, setValueField] = useState('');
  const [itemsField, setItemsField] = useState([
    {label: 'Apple', value: 'apple', isSelected: true},
    {label: 'Banana', value: 'banana'},
  ]);
  const [imageListView, setImageListView] = useState(item.imageList);

  const [modalImage, setModalImage] = useState<boolean>(false);
  const [valueImageShow, setValueImageShow] = useState<any>();
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<TypeData[]>([]);

  const handleDelete = id => {
    const response = imageListView.filter((item, index) => index !== id);
    console.log('response', response);
    setImageListView(response);
  };

  useEffect(() => {
    setValue('apple');
    setValueField('banana');
  }, []);

  console.log('daataaaa', data);

  return (
    <>
      <View style={{zIndex: 99}}>
        <Toast />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Ionicons
              name="chevron-back-outline"
              size={23}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.titleHeader}>Chi tiết vấn đề phát sinh</Text>
            <Text> </Text>
          </View>
          <Formik
            initialValues={{
              sourceProblem: item.sourceProblem,
              title: item.title,
              job: item.job,
              content: item.content,
            }}
            onSubmit={(values, {setSubmitting}) => {
              console.log('valkuesss', values);
              //imageListView
              //loại vấn đề: value
              //lĩnh vực: valueField
              //ảnh: data
              Toast.show({
                type: 'success',
                text1: 'Hello',
                text2: 'This is some something 👋',
              });
             

              setTimeout(() => {
                setSubmitting(false);
                navigation.goBack();
              }, 1000);
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
              <View style={styles.containerContent}>
                <View style={styles.clickContainer}>
                  <TouchableOpacity
                    style={styles.clickBlock}
                    onPress={() => setOpenBottomSheet(!openBottomSheet)}>
                    <MaterialCommunityIcons
                      name="dots-horizontal"
                      size={25}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </View>
                <ValueInputList
                  item={item.sourceProblem}
                  title="Nguồn vấn đề"
                  onChangeText={handleChange('sourceProblem')}
                  onBlur={handleBlur('sourceProblem')}
                  values={values.sourceProblem}
                  updateDocument={updateDocument}
                />
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
                    disabled={updateDocument == false ? false : true}
                  />
                </View>
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
                </View>
                {openList && (
                  <View style={styles.containerList}>
                    <FlatList
                      data={item.unitProblem}
                      nestedScrollEnabled
                      renderItem={({item, index}) => {
                        return (
                          <View style={styles.blockCheckbox}>
                            <CheckBox disabled={false} value={true} />
                            <Text style={{color: '#2F2F2F'}}>{item.name}</Text>
                          </View>
                        );
                      }}
                    />
                  </View>
                )}
                <ValueInputList
                  item={item.typeProblem}
                  title="Tiêu đề"
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  values={values.title}
                  updateDocument={updateDocument}
                />
                <ValueInputList
                  item={item.job}
                  title="Về việc"
                  onChangeText={handleChange('job')}
                  onBlur={handleBlur('job')}
                  values={values.job}
                  updateDocument={updateDocument}
                />
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
                    disabled={updateDocument ? false : true}
                  />
                </View>
                <ValueInputList
                  item={item.content}
                  title="Nội dung"
                  textArea={true}
                  onChangeText={handleChange('content')}
                  onBlur={handleBlur('content')}
                  values={values.content}
                  updateDocument={updateDocument}
                />

                <View>
                  <Text style={styles.sourceProblemTitle}>Thêm ảnh</Text>
                  {updateDocument && (
                    <TouchableOpacity
                      style={styles.clickImage}
                      onPress={() => setModalVisible(!isModalVisible)}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <View style={{width: '100%', height: 200}}>
                  <FlatList
                    data={imageListView}
                    nestedScrollEnabled
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          style={styles.containerImage}
                          onPress={() => (
                            setValueImageShow(item), setModalImage(!modalImage)
                          )}>
                          <View style={styles.blockImage}>
                            <View style={styles.imageLeft}>
                              <Image
                                style={styles.imageClick}
                                source={{
                                  uri: item?.image,
                                }}
                              />
                              {updateDocument && (
                                <TouchableOpacity
                                  style={styles.closeIcon}
                                  onPress={() => handleDelete(index)}>
                                  <AntDesign
                                    name="closecircle"
                                    size={20}
                                    color={'black'}
                                  />
                                </TouchableOpacity>
                              )}
                            </View>
                            <View style={styles.imageRightContainer}>
                              <View style={styles.imageRight_left}>
                                <TextInput
                                  style={styles.inputRight}
                                  value={item?.value}
                                  editable={false}
                                  numberOfLines={1}
                                />
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    width: '100%',
                    height: 30,
                    backgroundColor: '#D9D9D9',
                    justifyContent: 'center',
                    marginTop: 20,
                    alignItems: 'center',
                    // marginBottom: 100,
                  }}>
                  <Text style={{color: 'black'}}>Cập nhật</Text>
                </TouchableOpacity>

                <CameraOption
                  setModalVisible={setModalVisible}
                  isModalVisible={isModalVisible}
                  setData={setData}
                  data={data}
                  setImageListView={setImageListView}
                  imageListView={imageListView}
                />
              </View>
            )}
          </Formik>
        </View>

        {openBottomSheet && (
          <PopupBottomSheet
            openBottomSheet={openBottomSheet}
            setOpenBottomSheet={setOpenBottomSheet}
            setUpdateDocument={setUpdateDocument}
          />
        )}

        {valueImageShow && (
          <Modal
            isVisible={modalImage}
            animationIn="fadeIn"
            style={{
              margin: 0,
              alignItems: undefined,
              justifyContent: undefined,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
            <View style={styles.fullWidth}>
              <TouchableOpacity
                style={styles.closeContainer}
                onPress={() => setModalImage(false)}>
                <TouchableOpacity onPress={() => setModalImage(false)}>
                  <AntDesign name="close" color={'white'} size={22} />
                </TouchableOpacity>
              </TouchableOpacity>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.fullWidth}
                  source={{
                    uri: valueImageShow?.image,
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.inputContainer}
                onPress={() => setModalImage(false)}>
                <TextInput
                  style={styles.inputDetail}
                  value={valueImageShow.value}
                  numberOfLines={1}
                />
              </TouchableOpacity>
            </View>
          </Modal>
        )}
      </ScrollView>
    </>
  );
};

export default ProblemArisingDetail;
