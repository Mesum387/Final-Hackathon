import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
const Home = ({navigation}) => {
const navigating=()=>{
  navigation.navigate("Products")
}
return (
<View style={{backgroundColor:"black",flex:1}}>
<View >
<Text style={{fontSize:40,textAlign:"center"}}>Home</Text>
</View>
<View >
<TouchableOpacity style={{backgroundColor:"rgba(255,255,255,.5)",padding:20,margin:20,borderRadius:20}} onPress={()=>navigating()}><Text style={{fontSize:30,textAlign:"center"}}>Goto Products</Text></TouchableOpacity>
</View>
</View>
  )
}

export default Home