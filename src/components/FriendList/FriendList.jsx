import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

const FriendList = ({friends}) => {
  return (
    <ul className={css.friendList}>
      
        {Array.isArray(friends) &&
          friends.map((friend) => {
            return (
            <li className={css.friendListItem} key={friend.id}> 
            <FriendListItem key={friend.id} friend={friend} /> 
            </li>
            )})}
     
    </ul>
  );
};

export default FriendList;
