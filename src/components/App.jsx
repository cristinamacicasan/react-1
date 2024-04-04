import React from "react";
import Profile from "./Profile/Profile";
import user from "./Profile/user.json";
import Statistics from "./Statistics/Statistics";
import FriendsList from "./FriendList/FriendList";
import friends from "./FriendList/friend.json";
import data from "./Statistics/Statistics.json";



export const App = () => {
  return (
    <>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
    stats={user.stats}
    />
  <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
  </>
  );
};
