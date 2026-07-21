const Conversation = require("../models/Conversation");
const Message = require("../models/Message");


// Create Conversation
const createConversation = async (req, res) => {
  try {

    const { receiverId } = req.body;
    const senderId = req.user.id;


    if (!receiverId) {
      return res.status(400).json({
        success: false,
        message: "Receiver id required"
      });
    }


    // Check existing conversation
    let conversation = await Conversation.findOne({
      members: {
        $all: [senderId, receiverId],
        $size: 2
      }
    });


    if (conversation) {
      return res.status(200).json({
        success: true,
        conversation
      });
    }


    conversation = await Conversation.create({
      members: [
        senderId,
        receiverId
      ]
    });


    res.status(201).json({
      success: true,
      conversation
    });


  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};




// Get Conversations
const getConversations = async(req,res)=>{

 try{

    const conversations = await Conversation
    .find({
      members:req.user.id
    })
    .populate(
      "members",
      "name profileImage"
    );


    res.status(200).json({
      success:true,
      conversations
    });


 }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

 }

};




// Send Message
const sendMessage = async(req,res)=>{

 try{

    const {
      conversationId,
      text
    } = req.body;


    if(!conversationId || !text){

      return res.status(400).json({
        success:false,
        message:"Conversation id and message required"
      });

    }



    // Check conversation exists
    const conversation =
    await Conversation.findOne({
      _id:conversationId,
      members:req.user.id
    });



    if(!conversation){

      return res.status(403).json({
        success:false,
        message:"Unauthorized conversation"
      });

    }



    const message =
    await Message.create({

      conversationId,
      sender:req.user.id,
      text

    });



    res.status(201).json({

      success:true,
      message

    });



 }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

 }

};




// Get Messages
const getMessages = async(req,res)=>{

 try{


    const messages =
    await Message.find({
      conversationId:req.params.id
    })
    .populate(
      "sender",
      "name profileImage"
    )
    .sort({
      createdAt:1
    });



    res.status(200).json({

      success:true,
      messages

    });



 }catch(error){

    res.status(500).json({

      success:false,
      message:error.message

    });

 }

};



module.exports = {

 createConversation,
 getConversations,
 sendMessage,
 getMessages

};