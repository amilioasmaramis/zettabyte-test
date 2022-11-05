const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongodb");

class Comments {
  static findOne(email) {
    return getDatabase().collection("comments").findOne({ email });
  }
  static insert(payload) {
    return getDatabase().collection("comments").insertOne(payload);
  }
  static findHistoryByUserId(_id) {
    return getDatabase()
      .collection("comments")
      .findOne({
        _id: ObjectId(_id),
      });
  }
}

module.exports = Comments;
