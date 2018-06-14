//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  MapView from "react-native-maps";
// create a component
class Home extends Component {


constructor(props){
    super(props)
    this.state={
        region:{
            latitude:44.4235,
            longitude:26.1166,
            latitudeDelta:0.090,
            longitudeDelta:0.090
        }
    }
}

    render() {
        return (
            <View style={styles.container}>
                <MapView
                style={styles.map}
                region={this.state.region}

                
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: '#eee',
    },
    map:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        bottom:0
    }
});

//make this component available to the app
export default Home;
