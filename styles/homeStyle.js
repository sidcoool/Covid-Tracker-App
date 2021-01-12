import { StyleSheet } from 'react-native'

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        marginTop: 80,
        fontFamily: 'sans-serif-condensed',
        letterSpacing: 1,
    },

    topBox: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '70%',
        color: 'black',
        borderRadius: 5,
        height: 100,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 10,
        padding: 10,
        alignSelf: 'center',
    },

    bottom: {
        flex: 3,
        backgroundColor: 'white',
        width: '100%',
        zIndex: -1,
    },

    flagImg: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },

    insideTopBoxView: {
        justifyContent: 'center',
        height: '100%'
    },

    worldText: {
        fontSize: 22,
        fontFamily: 'sans-serif-condensed',
        letterSpacing: 1,
    },

    infoCard: {
        backgroundColor: 'white',
        width: 150,
        color: 'black',
        borderRadius: 6,
        height: 80,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    infoView: {
        flex: 1,
        marginTop: 55,
    },

    infoViewRow: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around'
    },

    downCardText: {
        padding: 5,
        fontSize: 16,
        fontFamily: 'sans-serif-condensed',
        letterSpacing: 0.5,
    },

    upCardText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

})