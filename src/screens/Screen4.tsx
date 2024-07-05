import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Screen4() {

  const API_MEDICO = 'https://jritsqmet.github.io/web-api/medico.json'
  const[data,setData]=useState([])

  useEffect(() => {
    fetch(API_MEDICO)
    .then(response=>response.json())
    .then(datos=>setData(datos))
    .catch(error=>console.log(error))
    //console.log(data);
  }, [])
  
  type ServicioMedico = {
    nombre: string,
    proveedor: {nombre:string},
    descripcion: string,
    horario:string,
    contacto: {email:string},
    info: {imagen:string,precio:string,duracion:string},
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.title}>Lista de Servicio Médico</Text>
      <FlatList
      data={data}
      renderItem={({item}:{item:ServicioMedico})=>
        <View style={styles.item}>
          <View>
            <Text style={styles.texto}>Nombre: {item.nombre}</Text>
            <Text style={styles.texto}>Proveedor: {item.proveedor.nombre}</Text>
            <Text style={styles.texto}>Descripción: {item.descripcion}</Text>
            <Text style={styles.texto}>Duración: {item.info.duracion}</Text>
            <Text style={styles.texto}>Horario: {item.horario}</Text>
            <Text style={styles.texto}>Precio: {item.info.precio}</Text>
            <Text style={styles.texto}>Contacto: {item.contacto.email}</Text>
          </View>
          <Image
          src={item.info.imagen}
          style={styles.img}/>
        </View>
      }/>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
      backgroundColor:'black',
    },
    title:{
      fontSize:25,
      textAlign:'center',
      color:'white',
      fontWeight:'bold',
      margin:10,
    },
    texto:{
      color:'white',
      fontWeight:'bold',
    },
    item:{
      backgroundColor:'#1F2328',
      marginBottom:20,
      marginHorizontal:20,
      flexDirection:'row',
      alignItems:'center',
    },
    img:{
      width:200,
      height:190,
      resizeMode:'cover',
    }
  })