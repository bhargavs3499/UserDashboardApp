import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

// module.default.exports = mongoose.model("Conversation", ConversationSchema);
export default mongoose.model.Conversation ||
  mongoose.model("Conversation", ConversationSchema);
