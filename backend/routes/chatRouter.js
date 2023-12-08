const express = require("express");
const { requireAuth } = require("../requireAuth/requireAuth");
const {
  CreateChat,
  GetChats,
  renameChat,
} = require("../controllers/chatControllers");
const router = express.Router();

//create new chat
router.route("/").post(requireAuth, CreateChat);
//fetching chats
router.route("/").get(requireAuth, GetChats);
//rename chat
router.route("/rename").put(requireAuth, renameChat);
module.exports = router;
