import React, { Component } from 'react';
import PropType from 'prop-types';
import update from 'immutability-helper';
import {
    View,
    Image,
    Text,
    Platform,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import styles from './Style';


const CardScreen = (props) => {

    const { image, name, occupation, description, onPress, showThumbnail } = props;
    let containerStyles = [styles.cardContainer];

    if (showThumbnail) {
        containerStyles.push(styles.cardThumbnail);
    }


    return (
        <TouchableHighlight onPress={onPress}>

            <View style={[containerStyles]}>
                <View style={styles.cardImageContainer}>
                    <Image
                        style={styles.cardImage}
                        source={image}>
                    </Image>
                </View>
                <View>
                    <Text style={styles.cardName}>
                        {name}
                    </Text>
                </View>
                <View style={styles.cardOccupationContainer}>
                    <Text style={styles.cardOccupation}>
                        {occupation}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardDescription}>
                        {description}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>

    )
}

CardScreen.propTypes = {
    image: PropType.number.isRequired,
    name: PropType.string.isRequired,
    occupation: PropType.string.isRequired,
    description: PropType.string.isRequired,
    showThumbnail: PropType.bool.isRequired,
    onPress: PropType.func.isRequired,
}


export default CardScreen;