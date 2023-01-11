import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useEffect, useState} from 'react';
import CheckBoxLabel, {ResultOption} from '../../CheckBoxLabel';
import CheckBoxLabelV2 from '../../CheckBoxLabelV2';
import {NestedItemType, TypeErrorType} from '../../../screen/addNewDiary/AddNewDiary';

export interface DropdownItemType {
  item: TypeErrorType;
  onSelected: (
    checked: boolean,
    nestedItem: NestedItemType,
    item: TypeErrorType,
  ) => void;
}

const DropdownItem = ({item, onSelected}: DropdownItemType) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (item.nested) {
      for (let i = 0; i < item.nested.length; i++) {
        if (item.nested[i].isSelected) {
          setOpen(true);
          break;
        }
      }
    }
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setOpen(current => !current)}>
        <Icon
          style={styles.icon}
          name={open ? 'minuscircleo' : 'pluscircle'}
          size={15}
          color="blue"
        />
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
      {open && (
        <View style={styles.container}>
          <View style={styles.icon} />
          <View style={styles.label}>
            {item.nested?.map((data) => (
              <CheckBoxLabel
                key={data.value}
                handleChecked={(checked: boolean, nestedItem: NestedItemType) =>
                  onSelected(checked, nestedItem, item)
                }
                label={data.label}
                value={data.value}
                isSelected={data.isSelected}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    flexBasis: 20,
  },
  label: {
    paddingHorizontal: 10,
    color: 'black',
  },
});

export default DropdownItem;
