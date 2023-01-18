import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import DropdownItem from './DropdownItem/DropdownItem';
import {
  NestedItemType,
  TypeErrorType,
} from '../../screen/addNewDiary/AddNewDiary';
import {forwardRef, useImperativeHandle} from 'react';

export interface NestedSelectType {
  dataSource: TypeErrorType[];
  setTypeError: any;
}

const NestedSelect = (
  {dataSource, setTypeError}: NestedSelectType,
  ref: any,
) => {
  const [open, setOpen] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [numberSelectedItem, setNumberSelectedItem] = useState<number>(0);

  useImperativeHandle(
    ref,
    () => {
      return {
        closeDropdown() {
          if (open) {
            setOpen(false);
          }
        },
      };
    },
    [open],
  );

  const renderItem = ({item}: any) => {
    const handleOnSelectItem = (
      checked: boolean,
      nestedItem: NestedItemType,
      item: TypeErrorType,
    ) => {
      const handleChecked = [...dataSource].map(data => {
        if (data.id === item.id) {
          const checkedNestedItem = [...data.nested].map(
            (nested: NestedItemType) => {
              if (nested.value === nestedItem.value) {
                // setShowValue()
                if (checked) {
                  setNumberSelectedItem(current => current + 1);
                } else {
                  setNumberSelectedItem(current => current - 1);
                }
                return {
                  ...nested,
                  isSelected: checked,
                };
              }
              return {
                ...nested,
              };
            },
          );
          return {
            ...data,
            nested: checkedNestedItem,
          };
        }
        return {...data};
      });

      setTypeError(handleChecked);
    };

    return <DropdownItem onSelected={handleOnSelectItem} item={item} />;
  };

  const fakeCallApi = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(page);
        resolve({
          dataSource: [
            {
              id: `58694a0f-3da1-471f-bd96-145571e29d790${page}`,
              label: `BU-09 - Lĩnh vực Nhân sự Load More ${page}`,
              nested: [
                {
                  label: 'BU03_09 - NS_công tác tuyển dụng Load More',
                  value: '7',
                },
                {
                  label: 'BU03_09 - NS_công tác tuyển dụng Load More',
                  value: '8',
                },
              ],
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
    setTypeError((current: any) => [...current, ...newData]);
    setRefreshing(false);
  };

  return (
    <View style={{width: '100%', position: 'relative'}}>
      <TouchableOpacity
        onPress={() => setOpen(current => !current)}
        style={styles.container}>
        <TextInput
          value={`${
            numberSelectedItem === 0
              ? '-Chọn-'
              : `${numberSelectedItem} item is Selected`
          }`}
          style={styles.input}
          placeholder="-Chọn-"
          placeholderTextColor="black"
          editable={false}
        />
        <Icon style={styles.icon} name={open ? 'up' : 'down'} size={20} />
      </TouchableOpacity>

      {open && (
        <FlatList
          style={styles.options}
          data={dataSource}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
          refreshing={refreshing}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    color: 'red',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  input: {
    height: '100%',
    width: '100%',
    color: 'black',
    paddingRight: 20,
  },

  options: {
    borderWidth: 1,
    position: 'absolute',
    top: 40,
    width: '100%',
    paddingHorizontal: 15,
    zIndex: 1,
    backgroundColor: 'white',
    height: 200,
  },
});

export default forwardRef(NestedSelect);
