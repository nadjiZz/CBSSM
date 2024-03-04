import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    // const [newMessage, setNewMessage] = useState("");
    const {user} = useContext(AuthContext);
    const scrollRef = useRef();


  useEffect(()=>{
        const getConversations = async ()=>{
            try {
            const res = await axios.get("/conversations/" + user._id)
           setConversations(res.data);
        }catch(err){
            console.log(err);
        }
    };
    getConversations()
  }, [user._id]);

    useEffect(()=>{
        const getMessages = async () => {
            try {
            const res = await axios.get("/messages/" + currentChat?._id);
           setMessages(res.data);
        }catch(err){
            console.log(err);
        }
    };
    getMessages();
  }, [currentChat]);

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const message = {
//         sender: user._id,
//         text: newMessage,
//         conversationId:currentChat._id,
//     };
//     try{
//         const res = await axios.post("/messages", message);
//         setMessages([...message, res.data]);
//         setNewMessage("");
//     } catch(err){
//         console.log(err);
//     }
// };

useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior: "smooth"});
},[messages]);

  return (
    <>
        <Topbar />
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input type="text" 
                    className="chatMenuInput" 
                    placeholder="Recherche des amis" />
                    {conversations.map((c) =>(
                        <div onClick={()=>setCurrentChat(c)}>
                            <Conversation conversation={c} />
                        </div>
                         ))}
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                      {messages.map((m)=>(
                          <div ref= {scrollRef}>
                            <Message  message={m} own={m.sender === user._id} />
                          </div>
                      ))}
                    </div>
                    <div className="chatBoxBottom">
                        <textarea placeholder="write something..." className="chatMessageInput"></textarea>
                        <button className="chatSubmitButtom"> Envoyer </button>
                    </div> : <span className="noConversationText">Cliquez sur conversation pour démarrer une conversation.</span>
                </div>
            </div>
            <div className="chaOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                    <ChatOnline />
                </div>
            </div>
        </div>
    </>
  )
};
