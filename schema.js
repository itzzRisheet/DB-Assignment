import mongoose, { Schema } from "mongoose";

const productSchema = Schema({
  name: String,
  desc: String,
  SKU: String,
  catagory_id: [
    { type: mongoose.Types.ObjectId, ref: "ProductCategory", required: true },
  ],
  inventory_id: [{ type: mongoose.Types.ObjectId, ref: "ProductInventory" }],
  price: mongoose.Types.Decimal128,
  discount_id: [{ type: mongoose.Types.ObjectId, ref: "Discount" }],
  created_at: Date,
  modified_at: Date,
  deleted_at: Date,
});

const productCategorySchema = Schema({
    name : String,
    desc : String , 
    created_at : Date , 
    modified_at : Date ,
    deleted_at : Date
})

const productInventorySchema = Schema({
  quantity: Number,
  created_at: Date,
  modified_at: Date,
  deleted_at: Date,
});

const discountSchema = Schema({
  name: String,
  desc: String,
  discount_percent: mongoose.Types.Decimal128,
  active: Boolean,
  created_at: Date,
  modified_at: Date,
  deleted_at: Date,
});


const models = {
  Product: mongoose.model("Product", productSchema),
  ProductCategory: mongoose.model("ProductCategory", productCategorySchema),
  ProductInventory: mongoose.model("ProductInventory", productInventorySchema),
  Discount: mongoose.model("Discount", discountSchema),
};

export default models;
