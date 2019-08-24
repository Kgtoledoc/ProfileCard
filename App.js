/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import CardScreen from './components/CardScreen/CardScreen';
import styles from './components/CardScreen/Style'; 



const userImage = require('./user.jpg');

const data = [{
  image: userImage,
  name: 'Kevin Toledo',
  occupation: 'React Native Developer',
  description: 'Kevin is a really great javascript developer. He loves using JS to build react native applications for iOS and Android.',
  showThumbnail: true
}]


export default class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: data
    }
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data,
        {
          [index]: {
            showThumbnail: { $set: showThumbnail }
          }
        })
    })
  };


  render() {
    const list = this.state.data.map((item, index) => {
      const {
        image, name, occupation, description, showThumbnail
      } = item;
      return <CardScreen
        key={'card-' + index}
        image={image}
        name={name}
        occupation={occupation}
        description={description}
        onPress={this.handleProfileCardPress.bind(this, index)}
        showThumbnail={showThumbnail}
      ></CardScreen>
    }, this);


    return(
      <View style={styles.container}>
        {list}
      </View> 
    )
      
    
  }
}


