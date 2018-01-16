import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';

const imagem = require('../../images/jokenpo.png');

class Topo extends Component {
    render() {
        return (
            <View>
                <Image source={imagem} />
                {/* <Image source={require('../../images/jokenpo.png')} /> */}
            </View>
        );
    }
}

export default Topo;
