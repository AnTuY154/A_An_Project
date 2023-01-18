/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native';
import React, { useCallback } from 'react';
import Header from './component/header';
import Icon from 'react-native-vector-icons/AntDesign';
import GroupItem, { GroupItemType } from './component/groupItem';
import { debounce } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';

const defaultList: GroupItemType[] = [
  {
    id: '1',
    groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
    host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
    name: 'TTKT-123',
    status: 'InProgress',
    timeEnd: '04/12/2022',
    timeStart: '04/11/2022',
  },
  {
    id: '2',
    groupName: 'Giám sát chi nhánh',
    host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
    name: 'TTKT-123',
    status: 'Completed',
    timeEnd: '04/12/2022',
    timeStart: '04/11/2022',
  },
  {
    id: '3',
    groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
    host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
    name: 'TTKT-123',
    status: 'Completed',
    timeEnd: '04/12/2022',
    timeStart: '04/11/2022',
  },
  {
    id: '4',
    groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
    host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
    name: 'TTKT-123',
    status: 'Completed',
    timeEnd: '04/12/2022',
    timeStart: '04/11/2022',
  },
  {
    id: '5',
    groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
    host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
    name: 'TTKT-123',
    status: 'Completed',
    timeEnd: '04/12/2022',
    timeStart: '04/11/2022',
  },
  {
    id: '6',
    groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
    host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
    name: 'TTKT-123',
    status: 'Completed',
    timeEnd: '04/12/2022',
    timeStart: '04/11/2022',
  },
  {
    id: '7',
    groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
    host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
    name: 'TTKT-123',
    status: 'Completed',
    timeEnd: '04/12/2022',
    timeStart: '04/11/2022',
  },
  {
    id: '8',
    groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
    host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
    name: 'TTKT-123',
    status: 'Completed',
    timeEnd: '04/12/2022',
    timeStart: '04/11/2022',
  },
  {
    id: '9',
    groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
    host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
    name: 'TTKT-123',
    status: 'Completed',
    timeEnd: '04/12/2022',
    timeStart: '04/11/2022',
  },
];

const ManageGroup = () => {
  const navigation = useNavigation();

  const [listGroup, setListGroup] = useState<GroupItemType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    // call api here
    setListGroup(defaultList);
  }, []);

  const handleRenderItem = ({ item, index }: any) => {
    const renderGroup: GroupItemType = item;
    return <GroupItem {...renderGroup} index={index + 1} />;
  };

  const fakeCallApi = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          dataSource: [
            {
              id: uuidv4(),
              groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
              host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
              name: 'TTKT-123',
              status: 'Completed',
              timeEnd: '04/12/2022',
              timeStart: '04/11/2022',
            },
            {
              id: uuidv4(),
              groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
              host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
              name: 'TTKT-123',
              status: 'Completed',
              timeEnd: '04/12/2022',
              timeStart: '04/11/2022',
            },
            {
              id: uuidv4(),
              groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
              host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
              name: 'TTKT-123',
              status: 'Completed',
              timeEnd: '04/12/2022',
              timeStart: '04/11/2022',
            },
            {
              id: uuidv4(),
              groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
              host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
              name: 'TTKT-123',
              status: 'Completed',
              timeEnd: '04/12/2022',
              timeStart: '04/11/2022',
            },
          ],
        });
      }, 1000);
    });
  };

  const handleLoadMore = async () => {
    setRefreshing(true);
    setPage(current => current + 1);
    const loadMoreSource: any = await fakeCallApi();
    const newData = loadMoreSource.dataSource;
    setListGroup((current: any) => [...current, ...newData]);
    setRefreshing(false);
  };

  const handleSearchApi = (value: string) => {
    // call api search here
    if (value === 'test') {
      setListGroup([
        {
          id: '1',
          groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
          host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
          name: 'TTKT-123',
          status: 'InProgress',
          timeEnd: '04/12/2022',
          timeStart: '04/11/2022',
        },
        {
          id: '2',
          groupName: 'Giám sát chi nhánh',
          host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
          name: 'TTKT-123',
          status: 'Completed',
          timeEnd: '04/12/2022',
          timeStart: '04/11/2022',
        },
        {
          id: '3',
          groupName: 'Đoàn kiểm tra Hà Nội, Bắc Giang',
          host: 'Phòng pháp chế | Thành viên. 1. Nguyễn Văn Anh Tuấn',
          name: 'TTKT-123',
          status: 'Completed',
          timeEnd: '04/12/2022',
          timeStart: '04/11/2022',
        },
      ]);
    } else {
      setListGroup(defaultList);
    }
  };

  const handlerDebounce = useCallback(debounce(handleSearchApi, 300), []);

  const handleInputChange = (value: string) => {
    setSearchValue(value);
    handlerDebounce(value);
  };

  return (
    <View style={styles.container}>
      <Header
        label="Quản lý đoàn"
        backAction={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.body}>
        <View style={styles.search_container}>
          <Icon name="search1" size={20} />
          <TextInput
            value={searchValue}
            onChangeText={handleInputChange}
            // editable={false}
            placeholder="Tìm kiếm từ khoá"
            style={styles.search_input}
          />
        </View>

        <View style={styles.result_container}>
          {listGroup.length <= 0 ? (
            <>
              <Image
                style={styles.image}
                source={require('../assets/meeting.jpg')}
              />
              <Text style={styles.text_no_data}>Không dữ liệu Đoàn</Text>
            </>
          ) : (
            <FlatList
              style={{ width: '100%', height: '85%' }}
              data={listGroup}
              renderItem={handleRenderItem}
              keyExtractor={item => item.id}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0}
              refreshing={refreshing}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: '100%',
  },
  body: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  search_container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#EAE0DA',
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  search_input: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  result_container: {
    width: '100%',
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '35%',
    height: '35%',
  },
  text_no_data: {
    fontWeight: 'bold',
  },
});

export default ManageGroup;
