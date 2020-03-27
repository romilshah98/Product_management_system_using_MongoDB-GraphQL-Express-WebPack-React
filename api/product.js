/* eslint linebreak-style: ["error","windows"] */
const { getDb, getNextSequence } = require('./db.js');

async function productList() {
  const db = getDb();
  const productDB = await db.collection('products').find({}).toArray();
  return productDB;
}


async function productAdd(_, { product }) {
  const db = getDb();
  const newProduct = product;
  newProduct.id = await getNextSequence('products');
  const result = await db.collection('products').insertOne(product);
  const savedProduct = await db.collection('products')
    .findOne({ _id: result.insertedId });
  return savedProduct;
}

module.exports = { productList, productAdd };
