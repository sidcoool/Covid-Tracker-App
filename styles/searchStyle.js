import { StyleSheet } from 'react-native'

export const searchStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchView: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        top: 20,
        alignSelf: 'center',
        margin: 10,
    },

    searchIcon: {
        width: '20%',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'white',
        borderColor: '#D3D3D3',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },

    top: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#91818b',
        width: '100%',
    },

    topText: {
        color: 'white',
        padding: 20,
        fontSize: 28,
        marginTop: 40,
        fontFamily: 'sans-serif-condensed',
        letterSpacing: 1,
    },

    topInput: {
        backgroundColor: 'white',
        width: '70%',
        color: 'black',
        borderRadius: 5,
        height: 40,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 10,
        padding: 10,
        borderRightWidth: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },


    bottom: {
        flex: 3,
        backgroundColor: 'white',
        width: '100%',
        zIndex: -1,
    },

    flatList: {
        flex: 1,
        marginTop: 20,
    },

    itemOut: {
        flex: 1,
        padding: 2,
    },

    itemIn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },

    countryText: {
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: 16,
        padding: 2,
    },

    confirmText: {
        padding: 2,
    },

    deathsText: {
        color: 'red',
        padding: 2,
    },

    recoveredText: {
        color: 'green',
        padding: 2,
    },

    horizontalSeperator: {
        width: '95%',
        height: 1, backgroundColor: '#D3D3D3',
        alignSelf: 'center',
    },

})