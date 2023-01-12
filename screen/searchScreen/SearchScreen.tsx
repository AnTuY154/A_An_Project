/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import CheckBoxLabel, {ResultOption} from '../../component/CheckBoxLabel';
import React, {useCallback} from 'react';
import {debounce} from 'lodash';
import {NestedItemType} from '../addNewDiary/AddNewDiary';

const defaultList = [
  {
    label: 'Nguyễn Văn A',
    value: '435352',
  },
  {
    label: 'Nguyễn Văn B',
    value: '435353',
  },
  {
    label: 'Nguyễn Văn C',
    value: '435354',
  },
  {
    label: 'Đỗ Trọng A',
    value: '435355',
  },
  {
    label: 'Đỗ Trọng Anh B',
    value: '435356',
  },
  {
    label: 'Đỗ Trọng Anh B',
    value: '335356',
  },
  {
    label: 'Đỗ Trọng Anh B',
    value: '335357',
  },
  {
    label: 'Đỗ Trọng Anh B',
    value: '335358',
  },
  {
    label: 'Đỗ Trọng Anh B',
    value: '335359',
  },
  {
    label: 'Đỗ Trọng Anh B x',
    value: '3353510',
  },
];

const listWhenSearchA = [
  {
    label: 'Nguyễn Văn A',
    value: '435352',
  },
  {
    label: 'Đỗ Trọng A',
    value: '435355',
  },
];

const listWhenSearchB = [
  {
    label: 'Nguyễn Văn B',
    value: '435352',
  },
  {
    label: 'Đỗ Trọng Anh B',
    value: '435356',
  },
];

const SearchScreen = () => {
  const [listOptions, setListOptions] = useState<ResultOption[]>([]);
  const [isSelectedAll, setIsSelectedAll] = useState<boolean>(false);
  const [listResult, setListResult] = useState<ResultOption[]>([]);

  useEffect(() => {
    // call api here
    setListOptions(defaultList);
  }, []);

  const handleCheckedItem = (checked: boolean, item: ResultOption) => {
    console.log(checked);
    console.log(isSelectedAll);
    if (checked === false && isSelectedAll) {
      console.log('123');
      setIsSelectedAll(false);
    }

    if (checked) {
      setListResult(current => [...current, item]);
    } else {
      setListResult(current => {
        return current.filter(data => data.value !== item.value);
      });
    }

    setListOptions((current: ResultOption[]) => {
      const cloneList: ResultOption[] = [...current];
      let count = 0;
      const checkeData = cloneList.map(data => {
        if (data.value === item.value) {
          if (checked) {
            count++;
          }
          return {
            ...data,
            isSelected: checked,
          };
        } else {
          if (data.isSelected) {
            count++;
          }
          return {
            ...data,
          };
        }
      });

      if (count === cloneList.length) {
        console.log('456');
        setIsSelectedAll(true);
      }

      return checkeData;
    });
  };

  const renderItem = ({item}: any) => {
    return (
      <CheckBoxLabel
        handleChecked={handleCheckedItem}
        label={item.label}
        value={item.value}
        isSelected={item.isSelected}
        customStyles={styles.customCheckboxLabel}
      />
    );
  };

  const handleSearchApi = (value: string) => {
    // call api search here
    if (value.includes('A')) {
      setListOptions(listWhenSearchA);
    } else if (value.includes('B')) {
      setListOptions(listWhenSearchB);
    } else {
      setListOptions(defaultList);
    }
  };

  const handler = useCallback(debounce(handleSearchApi, 300), []);

  const handleInputChange = (value: string) => {
    setListResult([]);
    setIsSelectedAll(false);
    handler(value);
  };

  const handleSelectedAll = () => {
    setIsSelectedAll(current => !current);

    setListOptions((current: any) => {
      if (!isSelectedAll) {
        setListResult(current);
      } else {
        setListResult([]);
      }

      const cloneList = [...current];
      return cloneList.map(item => {
        return {
          ...item,
          isSelected: !isSelectedAll,
        };
      });
    });
  };

  return (
    <View style={styles.box_container}>
      <View style={styles.search_box_container}>
        <TextInput
          onChangeText={handleInputChange}
          style={styles.search_box}
          placeholder="Search"
        />
      </View>

      <View style={styles.options_container}>
        <FlatList
          style={{width: '100%', height: '60%'}}
          data={listOptions}
          renderItem={renderItem}
          keyExtractor={item => item.value}
        />

        <TouchableOpacity
          onPress={handleSelectedAll}
          style={styles.button_select_all}>
          <Text>{`${isSelectedAll}-a`}</Text>
          <Text>{isSelectedAll ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.result_container}>
        {listResult.map((item: ResultOption, index: number) => (
          <Text key={item.value}>{`${index > 0 ? ',' : ''} ${
            item.label
          }`}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box_container: {
    borderWidth: 1,
    width: '80%',
    // height: '80%',
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 10,
  },
  search_box_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  search_box: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  customCheckboxLabel: {
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
  },
  options_container: {
    borderWidth: 1,
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_select_all: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 20,
  },
  result_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderTopWidth: 0,
    padding: 20,
  },
});

export default SearchScreen;
