import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
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

const ProblemArisingAdd = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [response, setResponse] = React.useState<any>(null);

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, responseData => {
        console.log('responseData.assets[0]', responseData);
        const datas = new FormData();

        datas.append('upload', {
          //   uri: responseData[0].uri,
          // name: responseData.assets[0].fileName,
          type: 'image/jpeg',
        });

        fetch('http://10.0.2.2:8080/uploadImageCloud', {
          method: 'POST',
          body: datas,
        })
          .then((response: any) => {
            return response.json();
          })
          .then(data => {})
          .catch(error => console.log('error', error));
      });
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  return (
    <View style={styles.container}>
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
          margin: 0, // This is the important style you need to set
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
              <Text style={styles.black}>Chọn từ thư viện</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.camearaItem}>
              <Text style={styles.black}>Chụp ảnh</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View style={styles.fullWidth}>
          <Formik
            initialValues={{sourceProblem: '', title: '', job: '', content: ''}}
            onSubmit={(values, {setSubmitting}) => {
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
                  errors.sourceProblem && <Text>{errors.sourceProblem}</Text>}
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
                  <Text>{errors.title}</Text>
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
                  <Text>{errors.job}</Text>
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
                  />
                </View>
                <View>
                  <Text style={styles.sourceProblemTitle}>Thêm ảnh</Text>
                  <TouchableOpacity
                    style={styles.clickImage}
                    onPress={() => setModalVisible(!isModalVisible)}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>

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
                  <Text>{errors.content}</Text>
                )}
                <View style={styles.clickContainer}>
                  <TouchableOpacity style={styles.blockClick}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerHeader: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: 'black',
  },
  fullWidth: {width: '100%', height: '100%'},
  blockWidth: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 12,
  },
  sourceProblemTitle: {
    color: '#000000',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: '500',
  },
  inputSource: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
  },
  clickContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 12,
    marginBottom: 10,
  },
  blockClick: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickImage: {
    width: 40,
    height: 40,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // backgroundColor: 'green',
  },
  blockCamera: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  camearaItem: {
    width: '100%',
    height: '50%',
    borderBottomWidth: 0.6,
    borderBottomColor: '#000000',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 11,
  },
  black: {
    color: '#000000',
  },
});
export default ProblemArisingAdd;
