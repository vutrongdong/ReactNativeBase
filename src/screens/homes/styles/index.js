import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerHome: {
        height: 80,
        paddingTop: 30,
        backgroundColor: 'coral'
    },
    titleHome: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewHome: {
        borderWidth: 1, 
        borderColor: '#ccc'
    },
    wrapper: {
        marginTop: 5,
        flexDirection: 'row',
        height: 170,
        padding: 5,
        paddingRight: 10
    },
    thumbnailView: {
        width: 120,
        marginRight: 10,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    thumbnail: {
        width: 100,
        height: 150
    },
    detailsView: {
        flex: 1,
    },
    shipping: {
        position: 'absolute',
        bottom: 10,
        borderWidth: 2,
        borderColor: '#DCDCDC',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 12
    },
    shippingText: {
        fontSize: 13,
        color: '#C0C0C0',
    },
    rating: {
        marginTop: 10
    },
    priceText: {
        marginTop: 5
    },
    productName: {
        fontWeight: '600',
        fontSize: 13,
    },
    wrapperPrice: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 13,
        fontWeight: '600',
        color: '#0000CD',
        marginRight: 10
    },
    salePrice: {
        color: '#ccc',
        fontWeight: '600',
        fontSize: 12,
        textDecorationLine: 'line-through'
    },
    wrapperRating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconRating: {
        marginRight: 2
    },
    textRating: {
        marginLeft: 4,
        color: '#ccc',
        fontWeight: '600',
        fontSize: 12,
    }
});

export default styles;
