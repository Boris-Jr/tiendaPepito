import product from "../models/product.js";

const registerProduct = async (req, res) => {
  if (!req.body.name || !req.body.price || !req.body.stock) {
    return res.status(400).send("data incompleted");
  }

  const existingProduct = await product.findOne({ name: req.body.name });
  if (existingProduct) return res.status(400).send("The product already exist");

  const productSchema = new product({
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
  });

  const result = await productSchema.save();

  if (!result) return res.status(400).send("Failed to register product, retry latter");

  return res.status(200).send({ result });
};

export default { registerProduct };
