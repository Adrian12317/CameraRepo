import React from "react";
import Gallery from 'react-native-awesome-gallery';

export default function GalleryScreen({photos}){
    return(
      <Gallery
        data={photos}
        onIndexChange={(newIndex) => {
          console.log(newIndex);
        }}
        />        
    )
    
}

