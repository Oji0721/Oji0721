class MongooseError extends TypeError {
  constructor(message) {
    super(message);
    console.log(message)
    this.name = "MongooseError";
  }
}

module.exports = MongooseError;