import { React, useState, useEffect } from "react";
import {
  Autocomplete,
  Box,
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

const MessagePage = ({ userName, socket }) => {
  const [roomsRecieved, setRoomsReceived] = useState([]);
  const [message, setMessage] = useState("");
  const [messagesRecieved, setMessagesReceived] = useState([]);
  const [currentRoom, setCurrentRoom] = useState();
  const [friendList, setFriendList] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState([]);

  //Fetch list of chat rooms to display on message list
  useEffect(() => {
    const fetchChatRoomsofUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/rooms");
        const responseJSON = await response.json();
        // For each room, only have ID and Users in room except current user
        let chatRooms = responseJSON.map((room) => {
          let objStorage = {
            // Store room ID
            roomID: room.roomID,
            // Remove current user from the user list to display only other users in chat room
            users: room.users.filter((user) => user !== userName),
          };
          return objStorage;
        });
        // Provide a state change for the passed rooms for re-render
        setRoomsReceived(chatRooms);
      } catch (error) {
        console.log(
          `Unable to fetch chatrooms from database collection ChatRooms in message.jsx: ${error.message}`
        );
      }
    };

    fetchChatRoomsofUser();
  }, []);

  // Fetch List of Friends for Search Bar
  useEffect(() => {
    const fetchFriendsofUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/friends");
        const friendsListJSON = await response.json();
        setFriendList(friendsListJSON[0].friendList);
      } catch (error) {
        console.log(
          `Unable to fetch friends from database collection Friends in message.jsx: ${error.message}`
        );
      }
    };

    fetchFriendsofUser();
  }, []);

  // Fetch Messages from database for specific room
  const fetchMessagesForRoomFromDataBase = async (roomID) => {
    try {
      const response = await fetch(
        `http://localhost:3001/messages?roomID=${roomID}`
      );
      const responseJSON = await response.json();
      console.log(`These are the messages: ${JSON.stringify(responseJSON)}`);
      setMessagesReceived(responseJSON);
    } catch (error) {
      console.log(
        `fetch messages from database returned with error: ${error.message}`
      );
    }
  };

  const joinRoom = async (roomID) => {
    if (userName !== "" && roomID !== "") {
      console.log(userName);
      socket.emit("join_room", { userName, roomID });
      setCurrentRoom(roomID);
    }
    await fetchMessagesForRoomFromDataBase(roomID);
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessagesReceived((state) => [
        ...state,
        { message: data.message, sender: data.userName },
      ]);
    });
    return () => socket.off("receive_message");
  }, [socket]);

  // Runs whenever a socket event is recieved from the server
  const sendMessage = () => {
    try {
      if (message !== "") {
        socket.emit("send_message", {
          message,
          userName,
          currentRoom,
        });
        setMessage("");
      }
      document.getElementById("textMessage").value = "";
    } catch (error) {
      console.log(`failed to send message: ${error.message}`);
    }
  };

  const handleSelection = async (value) => {
    // Does the room already exist? If so go into that room
    const roomExists = roomsRecieved.forEach((room) => {
      if (room.userArray.includes(value)) {
        joinRoom(room.roomId);
      }
    });

    if (!roomExists) {
      const generatedRoomID = Math.floor(Math.random() * 90000).toString();
      const data = { roomID: generatedRoomID, userArray: [userName, value] };
      const JSONdata = JSON.stringify(data);
      try {
        const response = await fetch("http://localhost:3001/rooms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSONdata,
        });
        const responseJSON = response.json();
      } catch (error) {
        console.log(`failed to post room to the databse: ${error.message}`);
      }
    }
    //create new room
    setSelectedFriend(value);
  };

  //// You're up to here

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">Messages</Typography>
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
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={friendList}
              sx={{ width: "100%" }}
              getOptionLabel={(option) => option}
              onChange={(event, newValue) => handleSelection(newValue)}
              renderInput={(params) => <TextField {...params} label="Search" />}
            />
          </Grid>
          <Divider />
          <List>
            {roomsRecieved.map((room, i) => (
              <ListItem key={i} onClick={() => joinRoom(room.roomID)}>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary={room.users}>{room.users}</ListItemText>
                <ListItemText secondary="online" align="right"></ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={9}>
          <List sx={{ height: "70vh", overflowY: "auto" }}>
            {messagesRecieved.map((msg, i) => (
              <ListItem
                key={i}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Grid container>
                  <Grid item xs={12} sx={{ display: "inline-block" }}>
                    <ListItemText
                      sx={{
                        float:
                          msg.sender == userName
                            ? "inline-end"
                            : "inline-start",
                        backgroundColor:
                          msg.sender == userName ? "#a99ed1" : "#b2b2b2",
                        borderRadius: "5px",
                        padding: "10px",
                        width: "fit-content",
                        maxWidth: "50%",
                        wordWrap: "normal",
                        textAlign: "left",
                      }}
                      primary={msg.message}
                    ></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
          {currentRoom && (
            <>
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
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default MessagePage;
