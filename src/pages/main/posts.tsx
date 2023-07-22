import {deleteDoc,getDocs, addDoc, collection ,query, where,doc} from 'firebase/firestore';
import  {Post as IPost} from './home';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import {BsChatHeartFill,BsChatHeart,BsFillChatHeartFill} from 'react-icons/bs';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';
import single from '../../Media/single.jpg';
interface Props {
    post: IPost;
  }
  
  interface Like {
    likeId: string;
    userId: string;
  }
  
  export const Posts = (props: Props) => {
    const { post } = props;
    const [user] = useAuthState(auth);
    const [likes, setLikes] = useState<Like[] | null>(null);
    const likesRef = collection(db, "likes");
    const likesDoc = query(likesRef, where("postId", "==", post.id));
    const getLikes = async () => {
      const data = await getDocs(likesDoc);
      setLikes(
        data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id }))
      );
    };
    const addLike = async () => {
      try {
        const newDoc = await addDoc(likesRef, {
          userId: user?.uid,
          postId: post.id,
        });
        if (user) {
          setLikes((prev) =>
            prev
              ? [...prev, { userId: user.uid, likeId: newDoc.id }]
              : [{ userId: user.uid, likeId: newDoc.id }]
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    const removeLike = async () => {
      try {
        const likeToDeleteQuery = query(
          likesRef,
          where("postId", "==", post.id),
          where("userId", "==", user?.uid)
        );
  
        const likeToDeleteData = await getDocs(likeToDeleteQuery);
        const likeId = likeToDeleteData.docs[0].id;
        const likeToDelete = doc(db, "likes", likeId);
        await deleteDoc(likeToDelete);
        if (user) {
          setLikes(
            (prev) => prev && prev.filter((like) => like.likeId !== likeId)
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    const hasUserLiked = likes?.find((like) => like.userId === user?.uid);
  
    useEffect(() => {
      getLikes();
    }, []);
  
    return (
      <div>
        
          <div className='w-full shadow-xl flex flex-col p-4 my-16 rounded-lg hover:scale-105 duration-300 hover:shadow-rose-400'>
          
              <h2 className='text-2xl font-bold text-center py-8'>{post.title}</h2>
              
              {likes && <p  className='text-center text-4xl font-bold'> Likes: {likes?.length} </p>}
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>{post.description}</p>
                  <p className='py-2 border-b mx-8 mt-8'>@{post.username}</p>
              </div>
              <button className='bg-rose-500 outline outline-offset-2 outline-pink-500 hover:bg-rose-600 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:animate-pulse' onClick={hasUserLiked ?  removeLike: addLike}>
                  {hasUserLiked ?<>❤</>:<>🤍</> }
                </button>
              
          </div>
              
      </div>
    );
  };