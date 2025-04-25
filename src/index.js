
import express from "express";
import dotenv from "dotenv";
import shoeRouter from "./routes/route.shoe.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(process.env.SHOE_BASE_URL, shoeRouter);



// // POST: Thêm một shoe mới
// app.post("/shoes", async (req, res) => {
//   try {
//     const newShoe = req.body;
//     const result = await db.collection("shoes").insertOne(newShoe);
//     res.status(201).json({ message: "Shoe added", id: result.insertedId });
//   } catch (error) {
//     res.status(500).json({ error: "Error adding shoe" });
//   }
// });

// // PUT: Cập nhật một shoe theo id (dùng field 'id' trong JSON, không phải _id của MongoDB)
// app.put("/shoes/:id", async (req, res) => {
//   try {
//     const shoeId = req.params.id;
//     const updatedShoe = req.body;
//     const result = await db.collection("shoes").updateOne(
//       { id: shoeId },
//       { $set: updatedShoe }
//     );
//     if (result.matchedCount === 0) {
//       return res.status(404).json({ error: "Shoe not found" });
//     }
//     res.status(200).json({ message: "Shoe updated" });
//   } catch (error) {
//     res.status(500).json({ error: "Error updating shoe" });
//   }
// });

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