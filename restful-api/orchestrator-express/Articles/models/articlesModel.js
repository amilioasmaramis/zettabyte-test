const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongodb");

class Articles {
  static findOne(email) {
    return getDatabase().collection("articles").findOne({ email });
  }
  static insert(payload) {
    return getDatabase().collection("articles").insertOne(payload);
  }
  static findHistoryByUserId(_id) {
    return getDatabase()
      .collection("articles")
      .findOne({
        _id: ObjectId(_id),
      });
  }
}

module.exports = Articles;
