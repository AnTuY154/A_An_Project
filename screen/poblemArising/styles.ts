import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  containerContent: { width: '100%', height: '100%', zIndex: 99 },
  containerHeader: {
    width: '100%',
    height: 68,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  titleHeader: { color: 'white', fontSize: 15, paddingLeft: 25 },
  containerList: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  containerSearch: {
    width: '100%',
    height: '12%',
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockSearch: {
    width: '100%',
    height: 45,
  },
  inputSearch: {
    // width: '100%',
    height: 45,
    backgroundColor: '#C8C8C8',
    borderRadius: 15,
    opacity: 0.25,
    position: 'relative',
    paddingLeft: 45,
    fontStyle: 'italic',
    paddingRight: 10,
    paddingTop: 0,
    paddingBottom: 0,
  },
  iconSearch: {
    position: 'absolute',
    top: 13,
    left: 10,
  },
  containerListData: {
    width: '100%',
    height: '100%',
  },
  containerItem: {
    // width: '100%',
    height: 90,
    paddingHorizontal: 10,
    flexDirection: 'column',
    // backgroundColor: 'white',
    zIndex: 99,
    cursor: 'pointer',
    marginBottom: 10
  },
  blockList: {
    // backgroundColor: 'white',
    width: '100%',
    height: '100%',
    zIndex: 99,
    flexDirection: 'row',
    marginBottom: 10
  },
  listLeft: { width: '5%', height: '100%', justifyContent: 'center', alignItems: 'center', paddingRight: 6 },
  listRight: { width: '95%', height: '100%', paddingRight: 6 },
  blockItem: {
    width: '100%',
    height: '75%',
    flexDirection: 'row',
    borderBottomWidth: 0.8,
    borderBottomColor: '#D6D5D5',
    // backgroundColor: 'white',
    // backgroundColor: 'yellow',
  },
  blockLeft: {
    width: '80%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingBottom: 8,
  },
  blockRight: {
    width: '20%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  titleHeaderBlock: { color: 'black', fontSize: 14, fontWeight: '400' },
  unitBlock: { color: '#7B7B7B', fontSize: 12 },
  fieldBlock: { color: '#7B7B7B', fontSize: 12 },
  contentBlock: { color: '#7B7B7B', fontSize: 12 },
  statusBlock: {
    fontSize: 12,
    // textAlign: 'center',
    color: '#E7B401',
  },
  imageStatus: { width: 30, height: 30, alignSelf: 'flex-end' },
  colorDisable: {
    color: '#078CF3',
  },
  colorInactive: {
    color: '#858585',
  },
  colorActive: {
    color: '#E7B401',
  },
  blockTitle: {
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'white',
  },

  qaContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 85,
    // borderBottomWidth: 1,
    // borderBottomColor: '#D6D5D5',
    zIndex: 0,
    // opacity: 0,
  },
  button: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    opacity: 0.9,
  },
  button1Text: {
    color: 'yellow',
  },
  button2Text: {
    color: 'green',
  },

  contentContainerStyle: {
    flexGrow: 1,
    // backgroundColor: 'green',
  },
  blockSwipe: {
    width: 80,
    height: 87,
    backgroundColor: '#FFFFFF',
    // borderWidth: 1,
    // borderColor: '#CFCFCF',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 0,
  },
  backgroundDoc: {
    backgroundColor: '#F1A55A',
  },
  backgroundTrash: {
    backgroundColor: '#E83B3B',
  },
  backgroundCancelProblem: {
    backgroundColor: '#2173D3',
  },
  imageIcon: { width: 18, height: 18 },
  titleIcon: {
    fontSize: 12,
    color: 'white',
  },
  colorGit: {
    color: '#A3A2A2',
    fontSize: 12,
    textAlign: 'center',
  },
  borderSwipe: {
    borderWidth: 1,
    borderColor: '#CFCFCF',
  },

  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
  modalContainer: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  modalBlock: {
    width: '100%',
    height: 140,
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
  },
  containerClick: { flexDirection: 'row', alignSelf: 'flex-end' },
  clickLeft: {
    width: 63,
    height: 29,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#41AE6C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  clickRight: {
    width: 80,
    height: 29,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#DA1F1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftColor: { color: '#41AE6C' },
  rightColor: { color: '#DA1F1F' },
  black: { color: 'black' },
  white: {
    color: 'white',
    fontSize: 12,
  },
  iconClick: {
    width: 60,
    height: 60,
    backgroundColor: '#F4BF40',
    borderRadius: 150,
    position: 'absolute',
    right: 15,
    bottom: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99
  },
  containerSearchEmpty: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  emptyImage: { width: 50, height: 50 },
  textEmpty: { textAlign: 'center', marginTop: 10 },
  clickAllContainer: {
    width: '100%', height: 45, backgroundColor: '#FFDFDF', position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 99,
    flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 15
  },
  colorBlack: {
    color: 'black'
  },
  popupOptionAll: { width: '100%', height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 6 },
  imageOptionAll: { width: 18, height: 18 },
  titleOptionAll: {
    color: 'black',
    marginLeft: 10,
    fontSize: 12
  },
  popupClickAll: {
    width: 200, height: 60, position: 'absolute', top: '47%', right: '85%', borderRadius: 20, backgroundColor: 'white', zIndex: 0, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  }
});

export default styles;
