import Case from "../../../models/case";

export const updateCase = async (req, res) => {
  try {
    const { name, firId, typeOfCrime, desc, stage, priority } = req.body;
    userId = req.id;
    
    res.status(201).json({
      success: true,
      message: "Case Updated Succesfully",
    });
  } catch (e) {
    console.log(e);
  }
};
