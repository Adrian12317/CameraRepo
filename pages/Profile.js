import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function Profile({setPhotos}){

    const handleDeletePhotos = () =>{
        MySwal.fire({
            title: '¿Deseas eliminar todas las fotos de la galería?',
            text: "No podras revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                setPhotos([])
            }
          })
    }

    return(
        <>
        <p>Rafafael Adrian Avendaño Ramírez</p>
        <p>181790 IDGS 10°A</p>
        <button onClick={()=>handleDeletePhotos()}>Eliminar imagenes</button>
        </>
    );
}