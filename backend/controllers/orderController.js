const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { products, totalAmount } = req.body;
    const newOrder = new Order({
      user: req.user.id,
      products,
      totalAmount,
    });
    const order = await newOrder.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products.product');
    res.json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('products.product');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    if (order.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};