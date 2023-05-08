import { StyleSheet } from 'react-native';



export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#e0e0e0',
        margin: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        minHeight: 100,
        //height: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    body_container: {
        //backgroundColor: 'red',
        flex: 1,
        padding: 5,
        justifyContent: 'space-between',
        //margin: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
        fontStyle: 'italic',
    },

})