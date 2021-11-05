import React from "react";
import { Text,TouchableOpacity, View,StyleSheet } from "react-native";




export default function Profile({setPhotos}){
    
    const __deletePhotos = () => {
       setPhotos([]);
      };

    return(
        <View>
        <Text>Profilerdd</Text>
        <TouchableOpacity
            
            onPress={__deletePhotos}
            >
            <Text style={styles.text}> Borrar todo </Text>
          </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    
    text: {
        fontSize: 18,
        color: 'black',
      },
    
  });