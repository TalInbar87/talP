import React from 'react';
import {Text,TextInput, StyleSheet, View, Button,Animated, Easing} from 'react-native';
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

export default class q2 extends React.Component {
    static navigationOptions = {
        title: 'Animation B',
    };

    state = {dismissDuration: '3', isModalVisible: false};

    render() {
        const dismiss = () => {
            this.setState({isModalVisible: false});
            this.props.navigation.goBack()
        };

        const submitButtonClicked = () => {
            this.setState({isModalVisible: true});
            setTimeout(dismiss, this.state.dismissDuration * 1000);
        };

        return (
            <View style={styles.container}>
                <Modal isVisible={this.state.isModalVisible}
                       animationIn="slideInDown"
                       animationInTiming={1000}
                       animationOutTiming={1000}>
                    <FadeInView>
                        <Text style={{color: 'blue'}}>
                            you chose {this.state.dismissDuration} seconds
                        </Text>
                    </FadeInView>
                </Modal>
                <View style={styles.modalContent}>
                    <TextInput
                        style={{height: 40, width: 80, borderColor: 'gray', borderWidth: 1, padding: 10}}
                        placeholder="Set Time"
                        returnKeyLabel={"next"}
                        onChangeText={(text) => this.setState({dismissDuration: text})}/>
                    <Button title="Submit" onPress={submitButtonClicked}/>
                </View>
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
        padding        : 40,
        justifyContent : 'center',
        alignItems     : 'center',
        borderRadius   : 4,
        borderColor    : 'rgba(0, 0, 0, 0.1)',
    },
});