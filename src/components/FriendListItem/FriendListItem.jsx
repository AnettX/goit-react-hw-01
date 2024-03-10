import css from "./FriendListItem.module.css"

const FriendListItem = ({friend}) => {
  return (
    <div className={css.friendListItemWrap}>
    <img className={css.friendImg} src={friend.avatar} alt={friend.name} width="48" />
    <p><b>{friend.name}</b></p>
    {friend.isOnline ?  (<p className={css.friendOnline}>Online</p>) : (<p className={css.friendOffline}>Offline</p>)}
    </div>
  )
}

export default FriendListItem
