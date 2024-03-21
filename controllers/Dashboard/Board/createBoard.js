import Columns from "../../../models/column";

export const addBoard = async (req, res) => {
  try {
    const { columnStage } = req.body;
    userId = req.id;
    await Columns.create({
      columnStage,
      caseList,
      location
    });
    res.status(201).json({
      success: true,
      message: "Case Added Succesfully",
    });
  } catch (e) {
    console.log(e);
  }
};
