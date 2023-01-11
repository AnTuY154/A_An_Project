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

export interface ResultOption {
  label: string;
  value: string;
  isSelected?: boolean;
}

interface CheckBoxLabelType {
  label: string;
  value: string;
  isSelected?: boolean;
  customStyles?: StyleProp<ViewStyle>;
  handleChecked: (checked: boolean, item: ResultOption) => void;
}

const CheckBoxLabelV2 = ({
  isSelected = false,
  label,
  value,
  handleChecked,
  customStyles,
}: CheckBoxLabelType) => {
  const [checked, setChecked] = useState<boolean>(isSelected);

  const handleValueChange = (checked: boolean) => {
    setChecked(current => !current);
    handleChecked(checked, {value: value, label: label});
  };

  return (
    <View style={[styles.container, customStyles]}>
      <CheckBox
        disabled={false}
        value={checked}
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

export default CheckBoxLabelV2;
