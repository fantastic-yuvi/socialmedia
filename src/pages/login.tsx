import {auth,provider} from "../config/firebase";
import {signInWithPopup} from 'firebase/auth';
import { useNavigate} from 'react-router-dom'

export const Login=()=>{

    const navigate=useNavigate();
    const signinwithgoogle= async ()=>{
        const res=await signInWithPopup(auth,provider);
        console.log(res);
        navigate('/');
    }
    
    return(
           <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover purple'>
            <div className='backdrop-blur-sm bg-white/30 max-w-[600px] m-auto border shadow-lg p-3 w-full my-2 drop-shadow-2xl hover:scale-105 duration-300 hover:shadow-indigo-400'>
                <button onClick={signinwithgoogle}>Sign With Google To Continue</button>
            </div>
           
           
        </div>
    );
};