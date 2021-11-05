import React, { useState } from "react";
import { StyledText,StyledTextButton,StyledView,StyledViewButtonDelete,StyledViewButtonAcceptDelete ,ButtonStyled} from "../styles/StyledComp";



export default function Profile({setPhotos}){
    const [askDelete,setAskDelete] = useState(false);

    const __deletePhotos = () => setAskDelete(true);
    const __cancelDelete = () => setAskDelete(false);
    const __acceptDelete = () => {
      setAskDelete(false);
      setPhotos([]);
    }
        
        

    return(
        <StyledView>
          {!askDelete?(
            <>
             <StyledText>Rafael Adrian</StyledText>
             <StyledText>Avendaño Ramírez</StyledText>
             <StyledText>181790 IDGS 10°A</StyledText>
             <ButtonStyled
                 
                 onPress={__deletePhotos}
                 >
                 <StyledViewButtonDelete>
                 <StyledTextButton> Delete Photos </StyledTextButton>
                 </StyledViewButtonDelete>
               </ButtonStyled>
               </>
          ):
            (
              <>
              <StyledText>Are you sure you want</StyledText>
              <StyledText>to delete it?</StyledText>
              <ButtonStyled
                 
              onPress={__cancelDelete}
              >
              <StyledViewButtonDelete>
              <StyledTextButton> Cancel </StyledTextButton>
              </StyledViewButtonDelete>
            </ButtonStyled>
            <ButtonStyled
                 
              onPress={__acceptDelete}
              >
              <StyledViewButtonAcceptDelete>
              <StyledTextButton> Delete </StyledTextButton>
              </StyledViewButtonAcceptDelete>
            </ButtonStyled>
            </>
            )
        }


       
         
        </StyledView>
    );
}
