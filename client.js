// const router = require("express").Router()
const Library = require('./Library.js')

const collection = new Library("mongodb://127.0.0.1:27017", "library", "books")

collection.test()

async function test() {
    let allBooks = await collection.allBooks()
    let findOneBook = await collection.findOneBook("63618487df6886b7b3d7e250")
    console.log(findOneBook)
}

test()
// module.exports = router