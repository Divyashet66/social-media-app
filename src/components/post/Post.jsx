import './Post.css';
import like1 from '../../assets/person/like.jpg';
import heart from '../../assets/person/heart.jpg';
import {MoreVert} from '@mui/icons-material';
import {Users} from '../../dummyData';
import {useState} from 'react';


export default function Post({post}) {
  const [like,setLike]=useState(post.like);
  const[isLiked,setIsLiked]=useState(false);
  const likeHandler=()=>{
    setLike(isLiked? like-1 : like+1);
    setIsLiked(!isLiked);
  }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="posTopLeft">
                    <img className='postProfileImg' src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                    <div className="postDate">{post.date}</div>
                </div>
                <div className="posTopRight">
                <MoreVert />
                </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post?.desc}</span>
              <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className='likeIcon' src={like1} onClick={likeHandler} alt="" />
                <img className='likeIcon' src={heart} onClick={likeHandler} alt="" />
                <span className="postLikeCounter">{like} people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
              </div>
            </div>
        </div>
    </div>
  )
}
