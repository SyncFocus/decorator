const express = require('express');
const Decorator = require('../models/DecoratorSchema');
const router = express.Router();

router.post('/add', async (req, res) => {
  let newDecorator = new Decorator({
    itemcode: req.body.itemcode,
    imagelink: req.body.imagelink,
    itemname: req.body.itemname,
    description: req.body.description,
    details: req.body.details,
    price: req.body.price,
    status: req.body.status
  });
  try {
    await newDecorator.save();
    res.send(newDecorator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const allItems = await Decorator.find({});
    res.json(allItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/update/:itemcode', async (req, res) => {
  try {
    const updatedItem = await Decorator.findOneAndUpdate(
      { itemcode: req.params.itemcode },
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/delete/:itemcode', async (req, res) => {
  try {
    const deletedItem = await Decorator.findOneAndDelete({ itemcode: req.params.itemcode });
    res.json(deletedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
