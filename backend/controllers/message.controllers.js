import ConversationModel from "../models/conversation.model.js";
import MessageModel from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.user._id;
    const receiverId = req.params.id;

    let conversation = await ConversationModel.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await ConversationModel.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new MessageModel({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // this will run parallel , this two things run at the same time
    await Promise.all([conversation.save(), newMessage.save()]);

    // In this way we gonna wait
    // await conversation.save();
    // await newMessage.save();

    // Socket Io Functionality
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error sendMessage function ", error.message);
    res.status(500).json({ error: "Interval server error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const receiverId = req.params.id; // receiverId
    const senderId = req.user._id;

    const conversation = await ConversationModel.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages"); // not just message reference , whole message object

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error getMessage Func", error.message);
    res.status(500).json({ error: "Interval server error" });
  }
};

export { sendMessage, getMessages };
