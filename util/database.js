// mongodb://localhost:27017
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect("mongodb://localhost:27017")
    .then((result) => {
      console.log("Connected!");
      _db = result.db();
      //console.log(_db)
      // callback();
      cb();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "NO database Found!!!";
};

module.exports = {
  mongoConnect,
  getDb,
};
