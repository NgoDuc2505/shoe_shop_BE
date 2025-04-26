
import express from "express";
import dotenv from "dotenv";
import shoeRouter from "./routes/route.shoe.js";
import brandRouter from "./routes/route.brand.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(process.env.SHOE_BASE_URL, shoeRouter);
app.use(process.env.SHOE_BASE_URL, brandRouter);




// // DELETE: Xóa một shoe theo id (dùng field 'id' trong JSON)
// app.delete("/shoes/:id", async (req, res) => {
//   try {
//     const shoeId = req.params.id;
//     const result = await db.collection("shoes").deleteOne({ id: shoeId });
//     if (result.deletedCount === 0) {
//       return res.status(404).json({ error: "Shoe not found" });
//     }
//     res.status(200).json({ message: "Shoe deleted" });
//   } catch (error) {
//     res.status(500).json({ error: "Error deleting shoe" });
//   }
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});