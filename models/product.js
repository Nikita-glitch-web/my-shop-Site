//models отвечает за работу с данными. В клиентском JS это означает выполнение Ajax-операций.

const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;
console.log(">>>>>>>>>>>>>>>>", getDb);

class Product {
  constructor(title, price, description, imageUrl, id, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    console.log("..................", getDb);
    const dataBase = getDb();
    let dbOperation;
    if (this._id) {
      dbOperation = dataBase.collection("products");
    } else {
      dbOperation = dataBase.collection("products").insertOne(this);
    }
    return dbOperation
      .then((result) => {
        console.log("------------", result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(prodId) {
      const db = getDb();
      return db
      .collection('products')
      .find({ _id: new mongodb.ObjectId(prodId)})
      .next()
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      })
  }

  static deleteById(prodId) {
    const db = getDb();
    return db
    .collection('products')
    .deleteOne({ _id: new mongodb.ObjectId(prodId)})
    .then(result => {
      console.log('Deleted');
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = Product;
