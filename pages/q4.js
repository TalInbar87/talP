import React from 'react';
import {StyleSheet, View, Button,Animated, Easing, StackNavigator} from 'react-native';
import Modal from 'react-native-modal'

class RotateSquare extends React.Component {
    constructor(){
        super()
        this.spinValue = new Animated.Value(0);
        this.fade = new Animated.Value(0);
    }

componentDidMount () {
  this.animate()
}
animate () {
  const createAnimation = function (value, duration, easing, delay = 0) {
    return Animated.timing(
      value,
      {
        toValue: 1,
        duration,
      }
    )
  }
  Animated.sequence([
  createAnimation(this.fade, 4000),
  Animated.loop(
  createAnimation(this.spinValue, 3000))
  ]).start()
}

    render(){
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        const dismiss = () => {
                   this.setState({isModalVisible: false});
                   this.props.navigation.goBack()
               };
        const fade = this.fade
        return (
                <Animated.View style={{opacity: fade,backgroundColor: 'white',
                                                             padding        : 22,
                                                             justifyContent : 'center',
                                                             alignItems     : 'center',
                                                             borderRadius   : 4,
                                                             borderColor    : 'rgba(0, 0, 0, 0.1)'}}>
                    <Animated.View style={{width: 100, height: 100, backgroundColor:'red', transform: [{rotate: spin}] }}></Animated.View>
                 </Animated.View>
            )
    }
}

export default class ButtonPopupScreen extends React.Component {
    constructor(){
        super()
        this.fadeButton = new Animated.Value(0);
    }

    componentDidMount(){
        Animated.timing(
            this.fadeButton,{
                toValue: 1,
                duration: 4000
            }
        ).start()
    }

    static navigationOptions = {
        title: 'Rotate Animation'
    };
    state = {isModalVisible: true}

    render(){
        const dismiss = () => {
            this.setState({isModalVisible: false});
            this.props.navigation.goBack()
        };
        const fade1 = this.fadeButton;
        return (
            <View style={styles.container}>
                <Modal isVisible={this.state.isModalVisible}
                       animationIn="slideInDown"
                       animationInTiming={1000}
                       animationOutTiming={1000}>
                    <RotateSquare></RotateSquare>
                        <Animated.View style={[styles.modalContent,{opacity: fade1}]}>
                            <Button title="Close" onPress={dismiss}/>
                        </Animated.View>
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