import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema(
  {
    username: { type: String },
    activityDescription: { type: String },
    profile: { type: String },
  },
  {
    timestamps: true,
  }
);

// const ActivityLogModel = mongoose.model("ActivityLog", activityLogSchema);

// module.exports = ActivityLogModel;
export default mongoose.model.ActivityLogModels ||
  mongoose.model("ActivityLogModel", activityLogSchema);
