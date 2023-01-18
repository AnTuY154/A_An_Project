import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#CFCFCF',
    borderTopWidth: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    maxHeight: Dimensions.get('window').height / 2,
  },
  flex_50: {
    flexBasis: '50%',
  },
  file_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export {styles};
