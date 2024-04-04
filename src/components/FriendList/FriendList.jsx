import style from "./friendList.module.css";
import PropTypes from "prop-types";

function FriendsList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <li key={id} className={style.item}>
            <span className={isOnline ? "online" : "offline"}>
              {isOnline}
            </span>
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
export default FriendsList;