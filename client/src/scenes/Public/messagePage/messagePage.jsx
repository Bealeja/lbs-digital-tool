import { React, useState, useEffect } from "react";
import {
  Paper,
  Grid,
  Divider,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Fab,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3002");

const MessagePage = (UserName) => {
  const userName = UserName.userName;
  const [message, setMessage] = useState("");
  const [messagesRecieved, setMessagesReceived] = useState([]);
  const [rooomsRecieved, setRoomsReceived] = useState([]);

  const joinRoom = async () => {
    if (room !== "" && userName !== "") {
      socket.emit("join_room", { userName, room });
    }
  };

  // Runs whenever a socket event is recieved from the server
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessagesReceived((state) => [
        ...state,
        { message: data.message, userName: data.userName },
      ]);
      console.log(messagesRecieved);
    });

    // Remove event listener on component unmount
    return () => socket.off("receive_message");
    ß;
  }, [socket]);

  const sendMessage = async () => {
    try {
      if (message !== "") {
        const __createdtime__ = Date.now();
        // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
        socket.emit("send_message", {
          message,
          userName,
        });
        setMessage("");
      }
      document.getElementById("textMessage").value = "";
    } catch (error) {
      console.log(`failed to send message: ${error.message}`);
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">Chat</Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} sx={{ width: "100%", height: "80vh" }}>
        {/* User Profile and Avatar */}
        <Grid item xs={3} style={{ borderRight: "1px solid #e0e0e0" }}>
          <List>
            <ListItem key="RemySharp">
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="John Wick"></ListItemText>
            </ListItem>
          </List>
          <Divider />
          {/* Search Box */}
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            {/* Message Rooms */}
            {rooomsRecieved.map((room, i) => {
              <ListItem key="RemySharp">
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                <ListItemText secondary="online" align="right"></ListItemText>
              </ListItem>;
            })}
          </List>
        </Grid>
        <Grid item xs={9}>
          <List sx={{ height: "70vh", overflowY: "auto" }}>
            {messagesRecieved.map((msg, i) => (
              <ListItem key={i}>
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText
                      align={msg.userName == userName ? "right" : "left"}
                      primary={msg.message}
                    ></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="textMessage"
                label="Type Something"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={1} style={{ align: "right" }}>
              <Fab color="primary" aria-label="add">
                <SendIcon onClick={sendMessage} />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MessagePage;
