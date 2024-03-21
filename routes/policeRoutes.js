import express from "express";
import upload from "../controllers/PoliceResource/upload.js"
const router = express.Router();

router.get('/', (req, res) => res.json({ message: "Hello from the police routes " }))
router.post('/upload', upload); 
const policeRouter = router;
export default policeRouter;