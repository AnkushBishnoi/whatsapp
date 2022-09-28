import React,{useState} from "react";
import "./Chat.css";
// import { Avatar} from '@mui/material';
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
// import SelectInput from "@mui/material/Select/SelectInput";
import MicNoneIcon from "@mui/icons-material/MicNone";
import axios from "./axios";
function Chat({ messages }) {
  const [input, setInput] = useState("")
  const sendMessage =async (e) =>{
    e.preventDefault();
   await axios.post('/messages/new',{
      message: input,
      name: "Ankush",
      timestamp: ".....",
      received : false,
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://hardcode.pro/images/profile.png"/>
        <div className="chat__headerInfo">
          <h3>Coding Players</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.recevied && "chat__reciever"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
        <p
            className={"chat__message chat__reciever"}
          >
            <span className="chat__name">Ankush</span>
            This is message
            <span className="chat__timestamp">{new Date().toUTCString()}</span>
          </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form >
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicNoneIcon />
      </div>
    </div>
  );
}

export default Chat;
