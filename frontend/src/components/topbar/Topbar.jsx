import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import "../../fontawesome-free-6.4.2-web/css/all.min.css";
import Logo from "../logo/Logo";
import "./topbar.css";

export default function Topbar() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Logo />
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <i class="fas fa-search"></i>
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="tobbarLinks">
                    <span className="tobbarLink">Homepage</span>
                    <span className="tobbarLink" >Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <i class="fas fa-user"></i>
                        <span className="topbarIconBadge" >1</span>
                    </div>
                    <div className="topbarIconItem">
                        <i class="fa fa-commenting" aria-hidden="true"></i>
                        <span className="topbarIconBadge" >2</span>
                    </div>
                    <div className="topbarIconItem">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                        <span className="topbarIconBadge" >3</span>
                    </div>
                </div>
                <link to={`/profile/${user.username}`}>
                    <img className="topbarImg" src={
                        user.profilePicture
                            ? PF + user.profilePicture
                            : PF + "person/noAvatar.png"
                    } alt="" />
                </link>
            </div>
        </div>
    );
}