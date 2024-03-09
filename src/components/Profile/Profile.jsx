// import clsx from "clsx";
import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileInfoWrap}>
        <img className={css.profileImg} src={image} alt={tag} width={240} />
        <p><b>{name}</b></p>
        <p className={css.profileNickName}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span>Followers </span>
          <span> {stats.followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span>Views </span>
          <span>{stats.views}</span>
        </li>
        <li className={css.profileListItem}>
          <span>Likes </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
