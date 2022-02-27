import Product from "../../../models/Product";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  if (method === "GET") {
    const products = await Product.find({});
    res.status(200).json(products);
  }

  if (method === "POST") {
    try {
      const { title, description, prices, img, extraOption } = req.body;
      if (!title || !description || !prices || !required)
        return res.status(400).json({ message: "Please complete all fields." });
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
