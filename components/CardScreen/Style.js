import {
    StyleSheet,
    Platform
} from 'react-native';


const profileCardColor = 'dodgerblue'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        alignItems: 'center',
        backgroundColor: profileCardColor,
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        borderColor: 'black',
        width: 300,
        height: 400,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {
                    height: 10,
                },
                shadowOpacity: 1,
            },
            android:{
                elevation: 15
            }
        })
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {
                    height: 10,
                },
                shadowOpacity: 1,
            },
            android: {
                borderWidth: 3,
                borderColor: 'black',
                elevation: 15
            }
        })
    },
    cardImage: {
        width: 80,
        height: 80,
    },
    cardName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
        textShadowColor: 'black',
        textShadowOffset: {
            height: 2,
            width: 2
        },
        textShadowRadius: 3
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderBottomWidth: 3,
    },
    cardOccupation: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    cardDescription: {
        fontStyle: 'italic',
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    },
    cardThumbnail: {
        transform: [{scale: 0.2}]
    }

});

export default styles;