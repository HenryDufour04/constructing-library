require("dotenv").config()
const express = require("express")
const app = express()

const { MongoClient, ObjectId } = require("mongodb")

const PORT = process.env.PORT || 4000

class Library {
    constructor(dbUrl, dbName, collName) {
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

}


app.listen(PORT, () => {
    console.log(`[server] listening on ${PORT}`)
})




module.exports = Library

