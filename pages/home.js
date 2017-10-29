import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    Button,
    StackNavigator
} from 'react-native';


export default class home extends Component {
    static navigationOptions = {
        title: "Home Screen"
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style = {styles.container}>
                <View style = {styles.buttonQ1}>
                    <Button title = "Simple popup"
                        onPress = {() => navigate('Q1')} />
                </View>

                 <View style = {styles.buttonQ1}>
                    <Button title = "Set time popup"
                        onPress = {() => navigate('Q2')} />
                </View>

                <View style = {styles.buttonQ1}>
                        <Button title = "close button popup"
                            onPress = {() => navigate('Q3')} />
                </View>

                <View style = {styles.buttonQ1}>
                        <Button title = "Rotate square popup"
                            onPress = {() => navigate('Q4')} />
                </View >
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonQ1: {
        margin: 20,
        width: 80,
    }

});

AppRegistry.registerComponent('home', () => home);
