import React from 'react';
import {StyleSheet, View, Button,Animated, Easing} from 'react-native';
import Modal from 'react-native-modal'

class FadeInView extends React.Component {
    state = {
        fade: new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(
            this.state.fade,
            {
                toValue: 1,
                duration: 3000,
            }
        ).start();
    }

    render() {
        const fade = this.state.fade
        return (
            <Animated.View
                style={{
                    ...this.props.style,opacity: fade,backgroundColor: 'white',
                                                              padding        : 22,
                                                              justifyContent : 'center',
                                                              alignItems     : 'center',
                                                              borderRadius   : 4,
                                                              borderColor    : 'rgba(0, 0, 0, 0.1)',}}>
                {this.props.children}
            </Animated.View>
        );
    }
}

export default class ButtonPopupScreen extends React.Component {
    static navigationOptions = {
        title: 'Animation C',
    };
           state             = {
               isModalVisible: true,
           }

    render() {
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
                    <FadeInView>
                        <View>
                            <Button title="close" onPress={dismiss}/>
                        </View>
                    </FadeInView>
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
});