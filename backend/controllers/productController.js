const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      image,
      category,
    });
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price, image, category, inStock } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, image, category, inStock },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};