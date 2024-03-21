import Case from "../../../models/case";

export const addCase = async (req, res) => {
  try {
    const { name, firId, typeOfCrime, desc, stage, priority } = req.body;
    userId = req.id;
    await Case.create({
      name,
      creatorId,
      firId,
      typeOfCrime,
      desc,
      stage,
      priority,
    });
    res.status(201).json({
      success: true,
      message: "Case Added Succesfully",
    });
  } catch (e) {
    console.log(e);
  }
};
