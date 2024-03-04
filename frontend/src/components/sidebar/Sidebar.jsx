import "./sidebar.css";
import { Users} from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
//import {
 //   RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, 
 //   HelpOutline, WorkOutline, Event, Scool,
//} from "material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <i class="fa-sharp fa-solid fa-rss sidebarIcon"></i>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-sharp fa-solid fa-message sidebarIcon"></i>
                        <span className="sidebarListItemText">Message</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-sharp fa-solid fa-user-group sidebarIcon"></i>
                        <span className="sidebarListItemText">Groupe</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-sharp fa-solid fa-bookmark sidebarIcon"></i>
                        <span className="sidebarListItemText">Boukmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-sharp fa-solid fa-circle-question sidebarIcon"></i>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-sharp fa-solid fa-calendar-day sidebarIcon"></i>
                        <span className="sidebarListItemText">Evénements</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-sharp fa-solid fa-user-graduate sidebarIcon"></i>
                        <span className="sidebarListItemText">Cours</span>
                    </li>
                </ul>
                <button className="sideButton">Aficher Plus</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
}