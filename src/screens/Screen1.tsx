import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent } from '../components/ButtonComponent';
import { PRIMARY_COLOR, TEXT_COLOR } from '../commons/constantsColor';
import { ref, set } from 'firebase/database';
import { db } from '../../config/Config';

export default function Screen1() {

  const [race, setRace] = useState('')
  const [origin, setOrigin] = useState('')
  const [size, setSize] = useState('')
  const [character, setCharacter] = useState('')

  function guardarRegistro(race:string,origin:string,size:string,character:string) {
        
    set(ref(db, 'registro/' + race), {
      origin: origin,
      size: size,
      character : character
    });
    Alert.alert('Mensaje','Registro almacenado')
    setRace('')
    setOrigin('')
    setSize('')
    setOrigin('')
}

  return (
    <View style={styles.container1}>
        <Text style={styles.textStart}>DATOS DE REGISTRO</Text>
        <Text style={styles.texto}>Raza:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto)=> setRace(texto)}
          value={race}
          placeholder="Haski"
        />
        <Text style={styles.texto}>Origen:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto)=> setOrigin(texto)}
          value={origin}
          placeholder="Escoses"
        />
        <Text style={styles.texto}>Tamaño:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto)=> setSize(texto)}
          value={size}
          placeholder=""
          keyboardType="numeric"
        />
        <Text style={styles.texto}>Color:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto)=> setCharacter(texto)}
          value={character}
          placeholder="Amigable, servicial"
        />
        <View style={styles.containerB}>
          <ButtonComponent title='REGISTRAR' onPress={()=>guardarRegistro(race,origin,size,character)}/>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:PRIMARY_COLOR,
    },
    container1:{
      height:'100%',
      backgroundColor:PRIMARY_COLOR,
      alignItems:'center',
      width:'100%',
      paddingVertical:20,
      // gap:10,
    },
    containerB:{
      marginTop:10,
      gap:20,
    },
    logo:{
      height: 100,
      width:300,
      resizeMode:'contain'
    },
    textStart: {
      color: TEXT_COLOR,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign:'center',
      marginBottom:10,
    },
    texto:{
      color:TEXT_COLOR,
      fontWeight: 'bold',
      textAlign:'center',
    },
    input: {
      backgroundColor:'white',
      color:'black',
      width:200,
      height: 40,
      marginVertical:10,
      borderWidth: 1,
      padding: 10,
    },
  });