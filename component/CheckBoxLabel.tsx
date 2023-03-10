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
  ViewStyle,
  StyleProp,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { NestedItemType } from '../screen/addNewDiary/AddNewDiary';


export interface ResultOption {
  label: string;
  value: string;
  isSelected?: boolean;
}

interface CheckBoxLabelType {
  label: string;
  value: string;
  isSelected?: boolean;
  customStyles?: StyleProp<ViewStyle>
  handleChecked: (checked: boolean, item: any) => void;
}

const CheckBoxLabel = ({
  isSelected = false,
  label,
  value,
  handleChecked,
  customStyles
}: CheckBoxLabelType) => {

  const handleValueChange = (checked: boolean) => {
    handleChecked(checked, {value:value,label:label});
  };

  return (
    <View style={[styles.container,customStyles]}>
      <CheckBox
        disabled={false}
        value={isSelected}
        onValueChange={newValue => handleValueChange(newValue)}
      />
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CheckBoxLabel;
