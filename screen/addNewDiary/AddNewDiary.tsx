/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

import React, {useEffect, useRef, useState} from 'react';
import moment from 'moment';
import TextWithRequired from '../../component/TextWithRequired';
import NestedSelect from '../../component/NestedSelect/NestedSelect';
import DropDownPicker from 'react-native-dropdown-picker';
import {Keyboard} from 'react-native';

const DATA: TypeErrorType[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    label: 'BU-01 - Lĩnh vực Tài chính',
    nested: [
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '1',
      },
      {
        label: 'BU03_002 - NS_công tác văn nghệ',
        value: '2',
      },
    ],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    label: 'BU-03 - Lĩnh vực Nhân sự',
    nested: [
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '3',
      },
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '4',
      },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    label: 'BU-01 - Lĩnh vực Nhân sự',
    nested: [
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '5',
      },
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '6',
      },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72x',
    label: 'BU-01 - Lĩnh vực Nhân sự',
    nested: [
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '5x',
      },
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '6x',
      },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72c',
    label: 'BU-01 - Lĩnh vực Nhân sự',
    nested: [
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '5c',
      },
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '6c',
      },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72v',
    label: 'BU-01 - Lĩnh vực Nhân sự',
    nested: [
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '5v',
      },
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '6v',
      },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72b',
    label: 'BU-01 - Lĩnh vực Nhân sự',
    nested: [
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '5b',
      },
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '6b',
      },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72n',
    label: 'BU-01 - Lĩnh vực Nhân sự',
    nested: [
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '5n',
      },
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '6n',
      },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72m',
    label: 'BU-01 - Lĩnh vực Nhân sự',
    nested: [
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '5m',
      },
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '6m',
      },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72p',
    label: 'BU-01 - Lĩnh vực Nhân sự',
    nested: [
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '5a',
      },
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '6a',
      },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72o',
    label: 'BU-01 - Lĩnh vực Nhân sự',
    nested: [
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '5b',
      },
      {
        label: 'BU03_001 - NS_công tác tuyển dụng',
        value: '6b',
      },
    ],
  },

];

export interface NestedItemType {
  value: string;
  label: string;
  isSelected?: boolean;
}

export interface TypeErrorType {
  id: string;
  label: string;
  nested: NestedItemType[];
}

const AddNewDiaryScreen = () => {
  const [date, setDate] = useState<any>(new Date());
  const [datePicker, setDatePicker] = useState<boolean>(false);
  const [typeError, setTypeError] = useState<TypeErrorType[]>([]);
  const [contentExit, setContentExit] = useState<string>('');
  const [detailExit, setDetailExit] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const nestedSelectRef = useRef(null);

  const [itemsRequest, setItemsRequest] = useState([
    {label: 'Rút kinh nghiệm', value: '1'},
    {label: 'Yêu cầu khắc phục', value: '2'},
  ]);

  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    setTypeError(DATA);
  }, []);

  const onDateSelected = (event: DateTimePickerEvent, value?: Date) => {
    setDate(value);
    setDatePicker(false);
  };

  const handleSubmit = () => {
    setIsSubmit(true);
  };

  const handleCloseTypeError = () => {
    Keyboard.dismiss();
    if (nestedSelectRef.current) {
      const currentNestedSelected: any = nestedSelectRef.current;
      currentNestedSelected.closeDropdown();
      
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleCloseTypeError}>
      <View style={styles.container}>
        <View style={styles.item_container}>
          <TextWithRequired label="Ngày" isRequired />
          <TouchableOpacity
            onPress={() => setDatePicker(true)}
            style={styles.calendar_container}>
            <TextInput
              value={moment(date).format('YYYY-MM-DD')}
              editable={false}
              style={styles.calendar_input}
            />
            <Icon style={styles.icon} name="calendar" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.item_container}>
          <TextWithRequired label="Loại yêu cầu" isRequired />
          <DropDownPicker
            placeholder='-Chọn-'
            style={{minHeight: 40, paddingLeft: 20}}
            open={open}
            value={value}
            items={itemsRequest}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItemsRequest}
          />
        </View>

        <View style={styles.item_container}>
          <TextWithRequired label="Loại lỗi" isRequired />
          <NestedSelect
            ref={nestedSelectRef}
            dataSource={typeError}
            setTypeError={setTypeError}
          />
        </View>

        <View style={styles.item_container}>
          <TextWithRequired label="Nội dung tồn tại" isRequired />
          <TextInput
            value={contentExit}
            onChangeText={setContentExit}
            multiline={true}
            numberOfLines={3}
            style={styles.text_area}

            // value={moment(date).format('YYYY-MM-DD')}
          />
        </View>

        <View style={styles.item_container}>
          <TextWithRequired label="Chi tiết tồn tại" isRequired />
          <TextInput
            value={detailExit}
            onChangeText={setDetailExit}
            multiline={true}
            numberOfLines={3}
            style={styles.text_area}
            // value={moment(date).format('YYYY-MM-DD')}
          />
        </View>

        <View style={styles.item_container}>
          <TouchableOpacity onPress={handleSubmit} style={styles.submit_button}>
            <Text style={{color: 'white'}}>Hoàn Thành</Text>
          </TouchableOpacity>
        </View>
        {isSubmit && (
          <View>
            <Text>Ngày: {moment(date).format('YYYY-MM-DD')}</Text>
            <Text>Loại yêu cầu: {value}</Text>
            <Text>Loại lỗi</Text>
            {typeError?.map(item => {
              if (item.nested) {
                return item.nested.map(
                  data =>
                    data.isSelected && (
                      <Text key={data.value}>{`- ${data.label}`}</Text>
                    ),
                );
              } else {
                return null;
              }
            })}
            <Text>Nội dung tôn tại: {contentExit}</Text>
            <Text>Chi tiết tôn tại: {detailExit}</Text>
          </View>
        )}

        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  item_container: {
    width: '100%',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  calendar_container: {
    position: 'relative',
    borderWidth: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    width: '100%',
    borderRadius: 8,
    borderColor: 'gray',
  },
  calendar_input: {
    height: '100%',
    width: '100%',
    color: 'black',
  },
  text_area: {
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    height: 100,
  },
  submit_button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default AddNewDiaryScreen;
