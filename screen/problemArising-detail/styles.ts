import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerHeader: {
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomWidth: 0.2,
        borderBottomColor: 'black',
    },
    sourceProblemTitle: {
        color: '#000000',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 5,
        fontWeight: '500',
    },
    inputSource: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '#E1E1E1',
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
    },
    containerCheckbox: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        height: 35,
    },
    checkboxTop: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleCheckbox: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '500',
        paddingLeft: 15,
    },
    containerList: {
        width: '100%',
        height: 180,
    },
    blockCheckbox: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        // marginBottom: 10,
    },
})

export default styles;