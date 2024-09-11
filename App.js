import React, { Component } from "react";
import { View, Text, SafeAreaView, StatusBar, Button } from "react-native";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      nome:''
        };
    this.entrar = this.entrar.bind(this);
  }

  entrar = (nome) => {
    this.setState({ nome: nome });
  }


  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />

        <View style={{ marginTop: 20 }}>

          <Button title= "Entrar" onPress={ () => this.entrar('Alexandro') } />

          <Text style={{ fontSize: 25, color: 'red', textAlign: 'center' }}>{this.state.nome}</Text>
        </View>








      </SafeAreaView>
    );
  }
}

export default App;
