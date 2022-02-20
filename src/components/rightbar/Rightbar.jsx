import './Rightbar.css';
import gift from '../../assets/person/gift.jpg';
import ad from '../../assets/person/ad.jpg';
import {Users} from '../../dummyData';
import Online from '../online/Online';
import img1 from '../../assets/person/1.jpg';
import img2 from '../../assets/person/2.jpg';
import img3 from '../../assets/person/3.jpg';
import img4 from '../../assets/person/4.jpg';
import img5 from '../../assets/person/5.jpg';
import img6 from '../../assets/person/6.jpg';

export default function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return(<>
    <div className="birthdayContainer">
          <img src={gift} alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        <img src={ad} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(<Online key={u.id} user={u} />))}
        </ul>
      </>)
  }

  const ProfileRightbar=()=>{
    return(<>
    <h4 className='rightbarTitle'>User information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">New York</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Madrid</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src={img1} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src={img2} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src={img3} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src={img4} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src={img5} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src={img6} alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
    </div>
    </>)
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
