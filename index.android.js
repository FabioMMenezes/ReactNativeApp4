/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class appJoKenPo extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario) {

    const numAlet = Math.floor(Math.random() * 3);

    let escolhaComputador = '';

    switch (numAlet) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: escolhaComputador = ''; break;
    }

    let resultado = '';

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') { resultado = 'Empate'; }
      else if (escolhaUsuario === 'papel') { resultado = 'Você ganhou'; }
      else if (escolhaUsuario === 'tesoura') { resultado = 'Computador ganhou'; }
    } else if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') { resultado = 'Empate'; }
      else if (escolhaUsuario === 'papel') { resultado = 'Computador ganhou'; }
      else if (escolhaUsuario === 'pedra') { resultado = 'Você ganhou'; }
    } else if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') { resultado = 'Empate'; }
      else if (escolhaUsuario === 'pedra') { resultado = 'Computador ganhou'; }
      else if (escolhaUsuario === 'tesoura') { resultado = 'Você ganhou'; }
    }

    this.setState({
      escolhaUsuario,
      // escolhaUsuario: escolhaUsuario,
      escolhaComputador,
      // escolhaComputador: escolhaComputador,
      resultado
      // resultado: resultado
    });
  }

  render() {
    return (

      <View>
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => { this.jokenpo('pedra'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => { this.jokenpo('papel'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={() => { this.jokenpo('tesoura'); }} />
          </View>
        </View>

        <View style={styles.palco}>

          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuário' />

        </View>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
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

AppRegistry.registerComponent('appJoKenPo', () => appJoKenPo);
