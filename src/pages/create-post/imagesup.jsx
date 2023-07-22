import { useState,useEffect} from 'react';
import { ref, uploadBytes} from 'firebase/storage';
import { v4 } from 'uuid';
import {BsFillSignpostSplitFill} from 'react-icons/bs';
import {storage} from '../../config/firebase';
export const ImageUp=()=>{

    const [imageUpload,setImageUpload]=useState(null);
    
    const uploadImage=()=>{
        if(imageUpload==null) return;
        const imageRef=ref(storage,`images/${imageUpload.name+v4()}`);
        uploadBytes(imageRef,imageUpload).then(()=>{
            alert("Image Uploaded");
        })
    };
    return(
        <div>
        <input className='border shadow-lg p-3 w-full my-2'
         type ="file" onChange={(event)=>{setImageUpload(event.target.files[0]);}} />
        {/* <button className=' border shadow-lg p-3 w-full mt-2' onClick={uploadImage}>Upload Image</button> */}
        </div>
    );
};