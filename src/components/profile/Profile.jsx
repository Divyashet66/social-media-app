import './Profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import post1 from '../../assets/post/5.png';
import user1 from '../../assets/person/1.jpg';

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className='profile'>
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src={post1} alt="" className="profileCoverImg" />
            <img src={user1} alt="" className="profileUserImg" />
            </div>
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Vincenzo Casanova</h4>
            <span className="profileInfoDesc">Hello my Friends!</span>
        </div>
        <div className="profileRightBottom">
        <Feed />
    <Rightbar profile />
        </div>
    </div>
    </div>
    </>
  )
}
