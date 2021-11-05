import React from "react";
import Gallery from 'react-native-awesome-gallery';
import { StyledText, StyledView } from "../styles/StyledComp";
export default function GalleryScreen({photos}){
    return(
      <>
      {photos[0]?(
        <Gallery data={photos}/>        
      ):
      (
        <StyledView>
        <StyledText>Without Photos</StyledText>
        </StyledView>
      )
      
    }
      
      </>
    )
    
}

