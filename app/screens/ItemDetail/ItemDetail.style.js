import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    list: {
        width: '100%'
    },
    itemWrapper: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    dateWrapper: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconWrapper: {
        height: 26,
        width: 26,
        backgroundColor: 'black',
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20
    }
});