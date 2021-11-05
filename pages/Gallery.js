import React from "react";
import { Image,View,StyleSheet } from "react-native";

export default function Gallery({photos}){
    return(
      
      <View style={styles.container}>
        
       
          
          {photos?.map((photo,i)=>(
            <View key={i}>
              <Image
             style={styles.stretch}
             source={{uri:`${photo.uri}`}}
           />
            </View>
          
             
        
      
          
        ))} 
          
            
        
    
      </View>
    )
    
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  stretch: {
    
    width:200,
    height: 200,
   
  },
});