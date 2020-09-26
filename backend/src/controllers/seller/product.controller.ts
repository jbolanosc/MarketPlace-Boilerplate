import { Product } from "../../models";
import { Response, Request } from "express";

export async function getProduct(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate(
      "seller",
      "_id seller.name seller.rating seller.logo "
    );

    if (!product) return res.json({ msg: "No product found" }).status(400);

    return res.json(product);
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
}

export async function getProducts(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const category = req.query.category ? { category: req.query.category } : {};
    const seller: any = req.query.seller ? { seller: req.query.seller } : {};
    const searchKeyword = req.query.keyword
      ? { name: { $regex: req.query.keyword }, $options: "i" }
      : {};

    const sortOrder = req.query.sortOrder
      ? req.query.sortOrder === "lowest"
        ? { price: 1 }
        : { price: -1 }
      : { _id: -1 };

    const products = await Product.find({
      ...seller,
      ...category,
      ...searchKeyword,
    })
      .populate("seller", "seller.name seller.logo")
      .sort(sortOrder);
    return res.send(products);
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
}

export async function createProduct(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const product = new Product({
      name: req.body.name,
      category: req.body.category,
      subcategory: req.body.subcategory,
      price: req.body.price,
      old_price: req.body.old_price,
      description: req.body.description,
      seller: req.body.seller,
      images: req.files ? Array.from(req.files.toString()) : [],
      brand: req.body.brand,
      countInStock: req.body.countInStock,
    });

    await product.save();

    return res.json({ msg: "product created." });
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
}
/* 
export async function getSellerProducts(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const products = await Product.find({ seller: req.body.seller._id });

    return res.json(products);
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
}
 */
export async function addProductReview(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return res.json({ msg: "No product Found" }).status(400);

    const review = {
      name: req.body.name,
      rating: Number(req.body.rating),
      comment: req.body.comment,
    };

    product.reviews.push(review);

    product.rating =
      product.reviews.reduce((a, c) => c.rating + a, 0) /
      product.reviews.length;

    const updatedProduct = await product.save();

    return res.status(201).send({
      data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      message: "Review saved successfully.",
    });
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
}

export async function updateProduct(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) return res.json({ msg: "No product Found" }).status(401);

    product.name = req.body.name;
    product.category = req.body.category;
    product.subcategory = req.body.subcategory;
    product.price = req.body.price;
    product.old_price = req.body.old_price;
    product.description = req.body.description;
    product.seller = req.body.seller;
    product.images = req.files ? Array.from(req.files.toString()) : [];
    product.brand = req.body.brand;
    product.countInStock = req.body.countInStock;

    await product.save();

    return res.send({ msg: "Product updated" }).status(200);
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
}

export async function deleteProduct(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const { id } = req.params;
    await Product.findByIdAndRemove(id);

    return res.json({ msg: "Product deleted" });
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
}
