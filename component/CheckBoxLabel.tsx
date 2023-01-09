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
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';


export interface ResultOption {
  label: string;
  value: string;
  isSelected?: boolean
}

interface CheckBoxLabelType {
  label: string;
  value: string;
  isSelected?: boolean;
  handleChecked: (checked: boolean, item: ResultOption) => void;
}

const CheckBoxLabel = ({
  isSelected = false,
  label,
  value,
  handleChecked,
}: CheckBoxLabelType) => {


  const handleValueChange = (checked: boolean) => {
    handleChecked(checked, {value:value,label:label});
  };

  return (
    <View style={styles.container}>
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
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CheckBoxLabel;
