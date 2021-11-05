import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const StyledView = styled.View`
    background-color: black;
    font-size: 18px;
    flex:1;
    justify-content:${({justify}) => justify ?? "center"};
    align-items:center;
    &:focus{
        padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary,$secondary);
  border-image-slice: 1;
    }
`;

export const StyledViewButtonDelete = styled.View`
    background-color: red;
    font-size: 18px;
    justify-content:${({justify}) => justify ?? "center"};
    align-items:center;
`;
export const StyledViewButtonAcceptDelete = styled.View`
    background-color: green;
    font-size: 18px;
    justify-content:${({justify}) => justify ?? "center"};
    align-items:center;
`;

export const StyledText = styled.Text`
    color: #5cca0e;
    font-size: 38px;
`;

export const StyledTextButton = styled.Text`
    margin:4px;
    color: white;
    font-size: 38px;
`;

export const StyledTextInput = styled.TextInput`
    color: white;
    font-size: 38px;
    margin-top:2%;
`;

export const container = {
    flex: 1,  
}
export const ButtonStyled = styled.TouchableOpacity`
    color: white;
    font-size: 38px;
    margin-top:2%;
`;
export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
    cameraBottomContainer: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
        
      },
      cameraBottomInnerContainer: {
        alignSelf: "center",
        flex: 1,
        alignItems: "center",
      },
      cameraTakePictureButtonContainer: {
        width: 70,
        height: 70,
        bottom: 0,
        
        
    }
  });