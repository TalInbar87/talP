import React from 'react';
import {Text, StyleSheet, View, Button,Animated, Easing} from 'react-native';
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

export default class q1 extends React.Component {
    static navigationOptions = {
        title: 'popup'
    };

    state = {
        isModalVisible: true,
    }

    render() {
        const onTimerEnd = () => {
            this.setState({isModalVisible: false});
            this.props.navigation.goBack()
        };
        setTimeout(onTimerEnd, 3000);
        return (
            <View style={styles.container}>
                <Modal isVisible={this.state.isModalVisible}
                       animationIn="slideInDown"
                       animationInTiming={1000}
                       animationOutTiming={3000}>
                    <FadeInView>
                        <Text>3 seconds and bye bye</Text>
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