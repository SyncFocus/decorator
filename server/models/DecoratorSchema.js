const mongoose = require('mongoose');
const {Schema} = mongoose
const DecoratorSchema = new Schema({
  itemcode:{
    type: String,
    required:true,
    unique: true
  },
  imagelink:{
    type:String
  },
  itemname:{
    type:String
  },
  description :{
    type:String
  },
  details:{
    type:String
  },
 price:{
  type: Number
 },
  status:{
    type:String
  }
})


const DecoratorCollection= mongoose.model('Decorator',DecoratorSchema)

DecoratorCollection.createCollection()

module.exports = DecoratorCollection

