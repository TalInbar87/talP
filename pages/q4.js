import React from 'react';
import {StyleSheet, View, Button,Animated, Easing} from 'react-native';
import Modal from 'react-native-modal'

class RotateSquare extends React.Component {
    constructor(){
        super()
        this.spinValue = new Animated.Value(0)
    }

    componentDidMount(){
        this.spin()
    }

    spin(){
        this.spinValue.setValue(0)

        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    render(){
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return ( <Animated.View style={{width: 100, height: 100, backgroundColor:'red', transform: [{rotate: spin}] }}></Animated.View> )
    }
}

export default class ButtonPopupScreen extends React.Component {
    static navigationOptions = {
        title: 'Rotate Animation'
    };
    state = {isModalVisible: true}

    render(){
        const dismiss = () => {
            this.setState({isModalVisible: false});
            this.props.navigation.goBack()
        };

        return (
            <View style={styles.container}>
                <Modal isVisible={this.state.isModalVisible}
                       animationIn="slideInDown"
                       animationInTiming={1000}
                       animationOutTiming={1000}>
                    <View style={styles.modalContent}>
                        <RotateSquare></RotateSquare>
                    </View>
                    <View style={styles.modalContent}>
                        <Button title="Close" onPress={dismiss}/>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container   : {
        flex           : 1,
        backgroundColor: '#fff',
        alignItems     : 'center',
        justifyContent : 'center'
    },
    modalContent: {
        backgroundColor: 'white',
        padding        : 22,
        justifyContent : 'center',
        alignItems     : 'center',
        borderRadius   : 4,
        borderColor    : 'rgba(0, 0, 0, 0.1)',
    },
});