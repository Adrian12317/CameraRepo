import React from "react";

export default function Gallery({photos}){
    return(
    <>
        {photos?.map((photo,i)=>(
            <div key={i}>
                <img src={photo.base64} alt=""></img>
            </div>
        ))}    
    </>
    )
    
}