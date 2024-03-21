import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    columnStage : {
        type: String,
        required: true
    },
    caseList : [{
        type: Object
    }],
    location : {
        type: String,
    }
  }
);

const Columns = mongoose.model("Columns", schema);
export default Columns;
