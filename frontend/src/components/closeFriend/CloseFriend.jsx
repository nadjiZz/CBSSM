import "./closeFriend.css"

export default function Closefriend({user}) {
  return (
    <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.userame} </span>
    </li>
  )
}