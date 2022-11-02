require("dotenv").config()
const express = require("express")
const app = express()

const { MongoClient, ObjectId } = require("mongodb")
// const clientStuff = require("./client.js")

const PORT = process.env.PORT || 4000

class Library {
    constructor(dbUrl , dbName, collName) {
        this.dbUrl = dbUrl;
        this.dbName = dbName;
        this.collName = collName;
        this.dbClient;
    }

    async client() {
        console.log(`Connecting to ${this.dbUrl}...`)
        this.dbClient = MongoClient.connect(this.dbUrl)
        console.log("Connected to database.");
        return this.dbClient;
    }

    async test() {
        const client = await this.client()
        client.close()
    }

    async collection() {
        const client = await this.client();
        const db = client.db(this.dbName);
        const collection = db.collection(this.collName);
        return collection;
    }

    async allBooks(){
        let collection = await this.collection()
        return collection.find({}).toArray()
    }

    async findOneBook(id) {
        let docId = ObjectId(id)
        let collection = await this.collection()
        return collection.find(docId).toArray()
    }

}


app.listen(PORT, () => {
    console.log(`[server] listening on ${PORT}`)
})




module.exports = Library

