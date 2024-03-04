import "./chatOnline.css"

export default function ChatOnline() {
  return (
    <>
      <div className="chatOnline">
        <div className="chatOnlineFriends">
            <div className="chatOnlineContainer">
                <img src="assets/person/3.jpg" alt="" className="chatOnlineImg" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">Dina Azer</span>
        </div>
      </div>
    </>
  )
}