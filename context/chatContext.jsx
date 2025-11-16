import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContextCreate";
import toast from "react-hot-toast";
import { ChatContext } from "./chatContextCreate";

// re-export ChatContext so other modules can import it from this file
export { ChatContext };

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [unseenMessages, setUnseenMessages] = useState({});

  const { socket, axios } = useContext(AuthContext);

  //function to get all users for sidebar
  const getUsers = async () => {
    try {
      const { data } = await axios.get("/api/messages/users");
      if (data.success) {
        setUsers(data.users);
        setUnseenMessages(data.unseenMessages);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  // function to get messages for the selected user
  const getMessages = async (userId) => {
    try {
      const { data } = await axios.get(`/api/messages/${userId}`);
      if (data.success) {
        setMessages(data.messages);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  // function to send message to selected user

  const sendMessage = async (messageData) => {
    try {
      if (!selectedUser || !selectedUser._id) {
        toast.error("No recipient selected");
        return;
      }

      const { data } = await axios.post(
        `/api/messages/send/${selectedUser._id}`,
        messageData
      );
      if (data.success) {
        // server returns `newMessage`
        setMessages((prevMessages) => [...prevMessages, data.newMessage]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // function to subscribe to message for selected user

  const subscribeToMessage = () => {
    if (!socket) return;

    socket.on("newMessage", (newMessage) => {
      // Compare IDs as strings to avoid ObjectId vs string mismatch
      if (
        selectedUser &&
        String(newMessage.senderId) === String(selectedUser._id)
      ) {
        // mark as seen locally and append
        newMessage.seen = true;
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        // mark message seen on server
        axios.put(`/api/messages/mark/${newMessage._id}`);
      } else {
        setUnseenMessages((prevUnseenMessages) => ({
          ...prevUnseenMessages,
          [newMessage.senderId]: prevUnseenMessages[newMessage.senderId]
            ? prevUnseenMessages[newMessage.senderId] + 1
            : 1,
        }));
      }
    });
  };

  //function to unsubscribe from message

  const unsubscribeFromMessages = () => {
    if (socket) socket.off("newMessage");
  };

  useEffect(() => {
    subscribeToMessage();
    return () => unsubscribeFromMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, selectedUser]);

  const value = {
    messages,
    users,
    selectedUser,
    getUsers,
    setMessages,
    sendMessage,
    setSelectedUser,
    unseenMessages,
    setUnseenMessages,
    getMessages,
  };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
