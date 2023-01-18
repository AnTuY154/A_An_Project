import React from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from '../../styles';

interface TypeValueInputList {
  item: any;
  title: string;
  textArea?: boolean;
  onChangeText: any;
  onBlur: any;
  values: any;
  updateDocument: any;
}

const ValueInputList: React.FC<TypeValueInputList> = ({
  item,
  title,
  textArea,
  onChangeText,
  onBlur,
  values,
  updateDocument,
}) => {
  return (
    <View>
      <Text style={styles.sourceProblemTitle}>{title}</Text>
      <TextInput
        editable={updateDocument == false ? false : true}
        value={values}
        style={[styles.inputSource, textArea == true && {height: 100}]}
        placeholderTextColor={'black'}
        multiline={textArea == true ? true : false}
        numberOfLines={textArea == true ? 9 : 1}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
    </View>
  );
};

export default ValueInputList;
