import {StyleSheet, Text, View} from 'react-native';

export interface TextWithRequiredType {
  label: string;
  isRequired?: boolean;
}

const TextWithRequired = ({
  isRequired = false,
  label,
}: TextWithRequiredType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {isRequired && <Text style={styles.required}>*</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  label: {
    color: 'black',
    marginRight: 5
  },
  required: {
    color: 'red',
  },
});

export default TextWithRequired;
