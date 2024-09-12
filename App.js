import React, { Component } from 'react';
import { View, Text, StyleSheet,  TouchableOpacity, Image } from 'react-native'; 

class App extends Component{
  
  constructor(props){
      super(props);
      this.state = {
        textoFrase:'',
        img:require('./assets/biscoito.png')
       
      };

      this.quebraBiscoito = this.quebraBiscoito.bind(this); 

  
    this.frases = [
      'A vida é uma aventura ousada ou não é nada.',
      'A sorte favorece os audaciosos.',
      'Seu esforço será recompensado em breve.',
      'O melhor ainda está por vir.',
      'Confie no seu instinto e siga em frente.',
      'A felicidade é uma escolha, escolha-a hoje.',
      'Grandes mudanças estão a caminho.',
      'Um novo começo traz novas oportunidades.',
      'Você está no caminho certo para alcançar seus objetivos.',
      'Um sorriso seu pode iluminar o dia de alguém.',
      'Acredite em você e tudo será possível.',
      'A paciência é a chave para grandes conquistas.',
      'A sorte está ao seu lado, aproveite!',
      'Você é mais forte do que imagina.',
      'Novos desafios trarão novas vitórias.',
      'Sua criatividade será sua maior aliada.',
      'Boas notícias estão a caminho.',
      'Sua persistência está prestes a dar frutos.',
      'Você está cercado de boas energias.',
    ];
  };

  quebraBiscoito(){

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"'+this.frases[numeroAleatorio] + '"',
      img: require('./assets/biscoitoAberto.png')
    });

  }



  render(){
    return(
      <View style={styles.container}>

      <Image 
      style ={styles.img}
      source={this.state.img} >
      </Image>


      <Text style = {styles.textoFrase}> {this.state.textoFrase}</Text>


      <TouchableOpacity style = {styles.botao} onPress={this.quebraBiscoito}>
        <View style = {styles.btnArea}>
          <Text style = {styles.btnTexto}> Quebrar Biscoito </Text>

        </View>
     </TouchableOpacity>
        

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

   },

  img:{
    width: 250,
    height: 250
  },
    textoFrase:{
    fontSize: 20,
    color: '#B19Cd9',
    margin:30,
    fontStyle:'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#B19Cd9',
    alignItems: 'center',
    justifyContent: 'center',

  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    color: '#B19Cd9',
    fontWeight: 'bold'
  }

});

export default App;