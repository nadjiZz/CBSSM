import "./message.css";
// import  {format} from "timeago.js";

export default function Message({ message, own }) {
  return (
    <>
      <div className={own ? "message own" : "message"} >
        <div className="messageTop">
            <img src="assets/person/7.jpg" alt="" className="messageImg" />
            <p className="messageText" >
              {Message.text}
            </p>
        </div>
        <div className="messageBottom">{Message.createdAt} </div>
      </div>
    </>
  )
}