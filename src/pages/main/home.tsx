import {collection, getDocs} from 'firebase/firestore';
import {useEffect,useState} from 'react';
import { db } from '../../config/firebase';
import {Posts} from './posts';
import {auth} from '../../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { ShowImage } from './imageShow';
import {Hero} from './hero';
import {signOut} from 'firebase/auth';
import {BiUserCircle} from 'react-icons/bi';
import {MdArrowDropDownCircle} from 'react-icons/md';
import round from '../../Media/round.png';
import { Footer } from '../../Components/footer';
export interface Post{
    id:string;
    userId:string;
    title:string;
    description:string;
    username:string;

}

export const Home=()=>{

    const [user]=useAuthState(auth);
    const [postsList,setPostsList]=useState<Post[] | null>(null);
    const postRef=collection(db,"posts");

    const signuserout=()=>{
        signOut(auth);
    }
    const getPost= async () =>{
        const data=await getDocs(postRef);
        setPostsList(
            data.docs.map((doc)=>({...doc.data(),id:doc.id })) as Post[]
        );
    };
    useEffect(()=>{
        getPost();
    },[])    
    return (
        <div>
            <div>
            <Hero heading='FeviCall' message ='Keeping Moments Alive and People Closer 💘' />    
            </div> 
            {
                user &&
                <div>
                    <div className="  rounded-full mx-auto ">
                        <img className='border-double border-4 border-pink-500 rounded-full mx-auto hover:scale-105 duration-300' src={user?.photoURL|| ""} /> 
                    </div>
                
                <div className='flex justify-center items-center'>
                    <p className=' justify-center md:text-3xl sm:text-xl  text-xs font-bold py-4 text-pink-700'>
                    Logged In As <div className='place-items-center'><BiUserCircle/></div> {user?.displayName}             
                    </p>
                   
                </div>
                <div className='flex justify-center items-center text-lg  font-bold'>
                <h2 className='text-5xl font-bold  underline decoration-double hover:scale-105 duration-300 '>Posts Vault</h2> 
                </div>

                

                <div className="flex flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12 px-4">
                    <div><MdArrowDropDownCircle/></div>
                    <img src={round} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none hover:scale-105 duration-300 hover:shadow-rose-400" />
                </div>
                </div>
                
                <div className='w-full py-[10rem] px-4 bg-white'>
                   <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'">
                        {postsList?.map((post)=> <Posts post ={post}/>)}
                    </div>
                </div>
                </div>

            }
            <Footer/>
        </div>
    );
};