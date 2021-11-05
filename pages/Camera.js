import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useIsFocused } from "@react-navigation/native";

// const MySwal = withReactContent(Swal)

export default function CameraScreen({photos,setPhotos}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState("off");
  let camera = Camera;
  const isFocused = useIsFocused();

 
   const __takePicture = async () => {
     
     const photo = await camera.takePictureAsync();

    //  MySwal.fire({
    //     title: '¿Deseas guardar esta imagen?',
    //     showCancelButton: true,
    //     confirmButtonColor: '#5cca0e',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Guardar',
    //     cancelButtonText: 'Cancelar'
    //   }).then((result) => {
    //     if (result.isConfirmed) {
           
    //       console.log(photo);
    //     }
    //   })
   console.log(photo);
  setPhotos([photo,...photos])
      
     
   };

   const __switchCamera = () => {
    setType(!type);
  };
  
  const __handleFlashMode = () => {
    if (flashMode === "on") {
      setFlashMode("off");
    } else if (flashMode === "off") {
      setFlashMode("on");
    } else {
      setFlashMode("auto");
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

 
   


  return (
 
  <View style={styles.container}> 


  {isFocused ? (
    <View style={styles.container}>
    <Camera
    style={styles.camera}
    flashMode={flashMode}
    type={type}
    ref={(r) => {
      camera = r; //Passing always the current reference to the global camera
    }}
    >
     
     <View style={styles.cameraBottomContainer}>
          <View style={styles.cameraBottomInnerContainer}>
            <TouchableOpacity
              onPress={__takePicture}
              style={styles.cameraTakePictureButtonContainer}
            />
          </View>
        </View>
    
    </Camera>
  </View>

    ) : (
      <>
        <Text></Text>
      </>
    )}
    </View>

    
  );

  
}

const styles = StyleSheet.create({
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
        borderRadius: 50,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        }
    }
  });
  