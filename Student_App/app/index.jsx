import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/img/image.jpg'
import {Link} from 'expo-router'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}/>
      <Text style={[styles.title,{color:"green"}]}>Reading Home Page</Text>
      <Text style={{marginVertical:20,color:"purple"}}>Initial page</Text>

      <View style={styles.card}>
        <Text>Hello, this is card</Text>
      </View>

      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>
      <Link href="/scrollview" style={styles.link}>ScrollView Demo</Link>
<Link href="/flatlist" style={styles.link}>FlatList Demo</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1, // default column direction
        alignItems:'center',
        justifyContent: 'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    },
    card:{
        backgroundColor:'#eee',
        padding:20,
        borderRadius:5,
        boxShadow:'4px, 4px rgba(0,0,0,0.1)'

    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain', // Fits the entire image inside the given dimensions without cropping. 
    },
      link:{
        marginVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'blue',
         color:'blue'
    }
})