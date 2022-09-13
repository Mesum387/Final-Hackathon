import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
// import { useEffect } from 'react'
const SingleProduct = ({ navigation}) => {

    return (
        <>
          
          <View
                // onPress={() => Navigating(e)} 
                
                style={{ color: "black",backgroundColor:"rgba(0,0,0,.5)",flex:1}}>
             <Text>mgggjhjhghgj</Text>
              </View>
        </>
    )
}

const styles = StyleSheet.create({ 
    imageStyle:{
    
    // width:300,
    alignSelf:"stretch",
    height: 430,
    
    },
    main:{
      width:300,
      marginVertical:20,
      marginLeft:"auto",
      marginRight:"auto",
      borderRadius:20,
 
    },
    })
export default SingleProduct











// import React, { useEffect, useState } from 'react'
// import { View, Text, Image, StyleSheet } from 'react-native'

// const SingleProduct = ({ navigation, route }) => {

//     const { state } = route.params;

//     const [render, setRender] = useState(state);


//     useEffect(() => {
//         setRender(state)
//     }, [])
//     console.log(state)
//     return (
//         <View style={{backgroundColor:"lightgrey",flex:1}}>
//             {/* <View style={Styles.cardview}> */}
//                 <View>
//                     <Text style={Styles.text}>{render.title}</Text>
//                 </View>
          

//         </View>
//     )
// }

// export default SingleProduct

// const Styles = StyleSheet.create({
//     cardview: {
//         marginHorizontal: 10,
//         marginVertical: 6,
//         backgroundColor: 'white',
//         shadowColor: "black",
//         shadowOpacity: 0.9,
//         shadowRadius: 10,
//         borderRadius: 5,
//         justifyContent:'center',
//         marginTop:100,
        
        
//     },
//     text: {
//         marginHorizontal: 7,
//         marginVertical: 6,
//         color: 'black',
//         fontSize: 22,
//         fontWeight: 'bold',
//     },
//     author: {
//         marginHorizontal: 10,
//         marginVertical: 8,
//         color: 'grey',
//         fontSize: 19,
//     },
//     description: {
//         color: 'grey',
//         fontSize: 14,
//         marginVertical: 19,
//         marginHorizontal: 5


//     },
// }) 