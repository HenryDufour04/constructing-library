const Library = require('./Library.js')

const collection = new Library("mongodb://127.0.0.1:27017", "library", "books")
collection.test()
