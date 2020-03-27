/* eslint linebreak-style: ["error","windows"] */
const { MongoClient } = require('mongodb');
require('dotenv').config();

let db;

async function connectToDb() {
  const url = process.env.DB_URL || 'mongodb+srv://romilshah98:3xZhm2IZ68DjfWIb@freecluster-o9vik.mongodb.net/producttracker?retryWrites=true';
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  console.log('Connected to MongoDB at', url);
  db = client.db();
}

async function getNextSequence(name) {
  const result = await db.collection('counters').findOneAndUpdate(
    { _id: name },
    { $inc: { current: 1 } },
    { returnOriginal: false },
  );
  return result.value.current;
}

function getDb() {
  return db;
}

module.exports = { connectToDb, getNextSequence, getDb };
