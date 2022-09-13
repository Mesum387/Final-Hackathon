import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import { TouchableOpacity } from 'react-native'


const Products = ({ navigation }) => {
 

  const Navigating = () => {
    navigation.navigate('SingleProduct')
  }


  return (
    <>
      <View style={{ backgroundColor: "rgba(0,0,0,.75)" }}>
        <Text style={{ fontSize: 40, textAlign: "center" }}>Products</Text>

      </View>
      <ScrollView style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
     
              <TouchableOpacity
                onPress={() => Navigating()} style={{ color: "black", backgroundColor: "rgba(0,0,0,.5)" }}>
                <View style={styles.main}>
                  <Text style={{ color: "white", alignSelf: "stretch", textAlign: "center" }}>gjgjghj</Text>
                </View>


              </TouchableOpacity>
        
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  imageStyle: {

    // width:300,
    alignSelf: "stretch",
    height: 430,

  },
  main: {
    width: 300,
    marginVertical: 20,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    // shadowColor: "#000000",
    // shadowOffset: {
    //   width: 0,
    //   height: 11,
    // },
    // shadowOpacity:  0.23,
    // shadowRadius: 11.78,
    // elevation: 15
  },
})
export default Products
