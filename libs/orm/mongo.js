require('custom-env').env();

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL =  process.env.MONGO_DB || 'mongodb://127.0.0.1:27017'
const databaseName = process.env.MONGO_DB_NAME || 'pharma';

export let insertOne =  async function insertOne(collectionName, doc = {}) {
  const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
      .catch(err => { console.log(err); });
  if (!client) {
      return;
  }
  try {
      const db = client.db(databaseName);
      let collection = db.collection(collectionName);
      let tasks = await collection.insertOne(doc);
      return tasks;

  } catch (err) {
      console.log('Error', err);
  } finally {  
      client.close();
  }
}
export let findOne =   async function findOne(collectionName,  query = {}) {
  const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
      .catch(err => { console.log(err); });

  if (!client) {
      return;
  }

  try {
      const db = client.db(databaseName);
      let collection = db.collection(collectionName);
  
      let tasks = await collection.findOne(query);
      return tasks;

  } catch (err) {

      console.log('Error', err);
  } finally {  
      client.close();
  }
}
export let findOneAndUpdate =   async function findOneAndUpdate(collectionName, query = {},update = {}) {
  const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
      .catch(err => { console.log(err); });

  if (!client) {
      return;
  }

  try {  
      const db = client.db(databaseName);
      let collection = db.collection(collectionName);
  
      let tasks = await collection.findOneAndUpdate(query,update);
      return tasks;

  } catch (err) {
      console.log('Error', err);
  } finally {
      client.close();
  }
}