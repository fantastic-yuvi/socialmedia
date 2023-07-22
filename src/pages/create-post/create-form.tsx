import {useForm} from "react-hook-form";
import * as yup from "yup";
import {useState} from 'react';
import {yupResolver} from "@hookform/resolvers/yup";
import {addDoc,collection} from 'firebase/firestore';
import {db,auth} from '../../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from 'react-router-dom';
import { ImageUp } from "./imagesup";
import {BsFillSignpostSplitFill} from 'react-icons/bs';
import {MdLocalPostOffice} from 'react-icons/md';
import {GiPostOffice} from 'react-icons/gi';
interface CreateFormData{
    title:string;
    description:string;
}
export const CreateForm=()=>{
    const [user]=useAuthState(auth);
    const schema=yup.object().shape({
        title:yup.string().required("You must add a title"),
        description: yup.string().required("Must Enter Description"),
    });
    const navigate=useNavigate();
    const { register,handleSubmit,formState:{errors}} =useForm<CreateFormData>({
        resolver:yupResolver(schema),
    });
    const postsRef=collection(db,"posts");
    const onCreatePost= async (data:CreateFormData)=>{    
        await addDoc(postsRef,{
            title:data.title,
            description:data.description,
            username:user?.displayName,
            userId:user?.uid,
        })  
        navigate("/");
    };

    // ----------
    const backtohome=()=>{
        navigate("/");
    };

    return(
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
            <h1 className='text-4xl font-bold text-center p-4 underline underline-offset-8'>Create Your Post</h1>
            <form className='max-w-[600px] m-auto'  onSubmit={handleSubmit(onCreatePost)}>
            <h1 className='text-2xl font-bold text-center p-4'><GiPostOffice/></h1>
                <input className='border shadow-lg p-3 w-full my-2 hover:scale-105 duration-300 border-red-600'  placeholder="Title" {...register("title")} />
                <p  className="text-red-700">{errors.title?.message}</p>
                <input className='border shadow-lg p-3 w-full hover:scale-105 duration-300 border-red-600' placeholder="Description" {...register("description")} />
                <p  className="text-red-700">{errors.description?.message}</p>
                <ImageUp />
                <button className='border shadow-lg p-3 w-full mt-2 hover:scale-105 duration-300 border-red-600'>Submit</button>
                <button className=" border shadow-inner p-3 w-full mt-2 hover:scale-105 duration-300 border-sky-600" onClick={backtohome}>Back To Home </button>
            </form>
        </div>
    );
};