
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';

const imagemPedra = require('../../images/pedra.png');
const imagemTes = require('../../images/pedra.png');
const imagemPapel = require('../../images/pedra.png');

class Icone extends Component {
    render() {
        if (this.props.escolha === 'pedra') {
            return (
                <View style={styles.icone}>
                    <Text>{this.props.jogador}</Text>
                    <Image source={imagemPedra} />
                    {/* <Image source={require('../../images/pedra.png')} /> */}
                </View>

            );

        } else if (this.props.escolha === 'tesoura') {

            return (
                <View style={styles.icone}>
                    <Text>{this.props.jogador}</Text>
                    <Image source={imagemTes} />
                </View>

            );

        } else if (this.props.escolha === 'papel') {
            return (
                <View style={styles.icone}>
                    <Text>{this.props.jogador}</Text>
                    <Image source={imagemPapel} />
                </View>

            );

        }
        return false;
    }
}

const styles = StyleSheet.create({
    txtResultado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    },
    icone: {
        alignItems: 'center',
        marginBottom: 20,
    }
});

export default Icone;
