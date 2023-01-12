import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export interface HeaderType {
  isActive?: boolean;
  content: string;
}

const Header = ({isActive, content}: HeaderType) => {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const handleSearch = (value: boolean) => {
    setIsSearch(value);
  };
  return (
    <View style={styles.container}>
      {isSearch ? (
        <Icon onPress={() => handleSearch(false)} name="left" size={20} />
      ) : (
        <Icon name={isActive ? 'up' : 'down'} size={20} />
      )}

      {isSearch ? (
        <View style={styles.search_input_container}>
          <View style={styles.search_container}>
            <Icon name="search1" size={20} color="red" />
            <TextInput
              // value={moment(date).format('YYYY-MM-DD')}
              // editable={false}
              placeholder="Tìm kiếm đơn vị phát sinh vấn đề"
              style={styles.search_input}
            />
          </View>
        </View>
      ) : (
        <>
          <Text style={styles.content}>{content}</Text>
          <Icon
            onPress={() => handleSearch(true)}
            style={styles.search_icon}
            name="search1"
            size={20}
            color="red"
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  search_icon: {
    padding: 3,
    borderRadius: 50,
    backgroundColor: '#EAE0DA',
  },
  search_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#EAE0DA',
  },
  search_input: {
    width: '80%',
    paddingVertical: 0,
    paddingHorizontal: 10,
    color: 'red'
  },
  search_input_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
