
import {storage} from '../../config/firebase';
import { ref,listAll ,getDownloadURL} from 'firebase/storage';
import {useEffect,useState} from 'react';
export const ShowImage=()=>{


    const [imageList,setImageList]=useState([]);
    const imageListRef=ref(storage,"images/");


    useEffect(()=>{
        listAll(imageListRef).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev,url]);
                });
            });
        });
    },[]);

    return (
        <div>
        {imageList.map((url)=>{
                    return <img src={url}/>
        })}
        </div>
    );
};