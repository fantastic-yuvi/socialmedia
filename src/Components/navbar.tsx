import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {auth} from '../config/firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from 'firebase/auth';
export const Navbar=()=>{
    const signuserout=()=>{
        signOut(auth);
    }
    const[user]=useAuthState(auth);
    return(
        <div>
            <Link to="/"></Link>
            {!user ? (<Link to="/login">LOGIN</Link>) :(<Link to="/createpost"> Create Post</Link>)}
            
            <div>
                {
                user && 
                <>
                <p> Welcome Back {user?.displayName}</p>
                <img src={user?.photoURL|| ""} width="100" height="100" />
                <button onClick={signuserout}> Log Out</button>
                </>
                }
            </div>
        </div>
      
    );
};