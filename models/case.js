import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    creatorId: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
    },
    firId: {
      type: mongoose.Schema.ObjectId,
      ref: "Firs",
      required: true,
    },
    typeOfCrime: {
      type: String,
      default: "None",
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    stage: {
      type: Number,
      default: 0,
    },
    priority: {
      type: String,
      default: "low",
    },
    label: {
      type: String,
    },
    history: [
      {
        userId: {
          type: mongoose.Schema.ObjectId,
          ref: "Users",
        },
        comment: {
          type: String,
          required: true,
        },
        counter: {
          type: Number,
          required: true,
        },
        timestamps: true,
      },
    ],
    users: [
      {
        assignedId: {
          type: mongoose.Schema.ObjectId,
          ref: "Users",
        },
      },
    ],

    files: [
      {
        name: {
          type: String,
          required: true,
        },
        data: {
            type: String
        },
      },
    ],
  },
  { timestamps: true }
);

const Case = mongoose.model("Cases", schema);
export default Case;
