import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {SectionsType} from '../manageGroupDetail';

export interface HeaderType {
  isActive?: boolean;
  content: SectionsType;
}

const AccordionHeader = ({isActive, content}: HeaderType) => {
  const icon = useMemo(() => {
    switch (content.icon) {
      case 'group_info':
        return <MaterialCommunityIcons name='account-group-outline' color='red' size={25}/>
      case 'group_member':
        return <MaterialCommunityIcons name='account-circle-outline' color='red' size={25}/>
      case 'group_object':
        return <MaterialIcons name='subject' color='red' size={25}/>
      case 'group_problem':
        return <Feather name='target'  color='red' size={25}/>
      default:
        return <MaterialIcons name='subject' color='red' size={25}/>
    }
  }, [content]);

  return (
    <View style={[styles.container, isActive && styles.active_background]}>
      {icon}
      <Text style={styles.content}>{content.label}</Text>
      <Entypo name={isActive ? 'chevron-up' : 'chevron-down'} size={20} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  active_background: {
    backgroundColor: '#F3F3F3'
  },
  imge_icon: {
      width: 20,
      height: 20
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 16
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
    color: 'red',
  },
  search_input_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccordionHeader;
