import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ButtonComponent } from '../components/ButtonComponent'
import { INPUT_COLOR, PRIMARY_COLOR, TEXT_COLOR } from '../commons/constantsColor';

export default function WelcomeScreen({navigation}:any) {

  return (
    <View style={styles.container}>
      <Text style={styles.textStart}>CRISTIAN TULMO</Text>
      <Image
        style={styles.logo}
        source={{uri:'https://img.freepik.com/fotos-premium/lobo-fondo-azul-luna-fondo_900396-24027.jpg'}}
      />
      <View style={styles.containerB}>
        <ButtonComponent title='INGRESAR' onPress={()=>navigation.navigate('BottomTab')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:PRIMARY_COLOR,
    justifyContent:'center',
    alignItems:'center',
    gap:10,
  },
  containerB:{
    marginTop:10,
    gap:20,
  },
  logo:{
    height: 400,
    width:400,
    margin:20,
    resizeMode:'contain',
  },
  textStart: {
    color: TEXT_COLOR,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
  },
  texto:{
    color:TEXT_COLOR,
    fontWeight: 'bold',
    textAlign:'center',
  },
});