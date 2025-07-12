//! data types in javascript

//?1.string
//?2.number
//?3.boolean
//?4.undefined
//?5.null
//?6.object
//?7.array
//?8.function

// var str = "Raj" //?string
// let num = 10 //?number
// let numWithFloat = 10.1//? float is also number data type in js
// let ismarried = false //? boolean
// var emptyvalue = null //? null js also js data type for empty value

// var arr = ["shiva", true, 10, null, ["HTML", "Mongodb"]] //? arrays

//? objects:
// var obj = {
//     //! properties
//     //! key : pair
//     username: "Shiva",
//     company: "TYSS",
//     skills: ["html", "css", "js"],
//     exp: 4,
//  }

//!object

// let obj = {
//     username: "shiva",
//     company: "tyss",
//     skills: {
//         frontend: ["html", "CSS", "JS"],
//         backend: ["Nodejs", "Express JS"],
//         databases:["Mongodb","firebase","Oracle"]
//     }
// }

// console.log(obj.skills.databases[0]);

//! JSON: javascript object notation

//? file extension: .json ex:   db.json,  data.json
//?media type : application/json (restful web services)

//? In 2000 json was introduced by Douglas  CrockFord

//? 1. It is open standard format
//? 2. It is language independent data format
//? 3. It is lightweight  and text based format.
//? 4.In the json data represented in the form of key and value pair and curly
//?    braces holds the object and comma is used to separate the key value pairs

//! what is json?

//todo:
//1. JSON stands for javascript object notation
//2. JSON is  an open standard data interchange format
//3. JSON is lightweight and self describing
//4. JSON is originated from javascript
//5. JSON is easy to read and write
//6. JSON is language independent
//7. JSON supports data structures like arrays and objects

//! data types of json:
//? 1.string
//? 2.number
//? 3.boolean
//? 4.objects
//? 5.arrays
//? 6.null

//todo note: functions and undefined not supports in json.

//!  Rules:
//? 1. Property keys must be doublequoted.
//? 2. If you want to add the multiple properties then you should use the comma.

// var date = new Date()
// console.log(date.toJSON()); //! convert date object into json object

//! json example

// {
//     "username":"shiva",
//     "salary":35000,
//     "skills":["Mongodb","java"],
//     "isnullvalue":null,
//     "isDate":"2025-05-07",
//     "deatails":{
//         "firstName":"Shivanand",
//         "lastName":"Birjdar"
//     }
// }

//! valid number format in json

// {
//     "number_1": 10,
//     "number_2": -10,
//     "number_3":10.4,
//     "number_4":1.0E+2
// }

//! mongodb installation

//! what is mongodb:
//? mongodb is document based,open source, distributed , no sql database.
//? MongoDB is a document based database with the scalability and flexibility that
//? you want with the querying and indexing that you need.
//? MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time
//? The document model maps to the objects in your application code, making data easy to work with
//? Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data
//? MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use
//? mongodb is documents based database. and it is cross platform database.
//? it is distributed database ( we can transfer the data from one system to another system i.e horiontal scaling)
//? The name of the database was derived from the word humongous to represent the idea of supporting large amounts of data.
//? mongodb they created using the c++.
//! History:
// 2007: 10gen (now MongoDB Inc.) was founded, with a focus on creating a new database system to handle large volumes of data.
// 2009: MongoDB was released as an open-source project, with 10gen offering commercial support and services.
// 2013: 10gen officially changed its name to MongoDB Inc.
// 2017: MongoDB Inc. became a publicly traded company, listing on NASDAQ as MDB.
// 2018: The software's license transitioned from AGPL 3.0 to SSPL.
// 2019: MongoDB partnered with Alibaba Cloud to offer a MongoDB-as-a-service solution.
// 2020: Eliot Horowitz, one of the founders, stepped down as CTO and from the board of directors but remained a technical consultant.

//! Main features:
//? Ad-hoc queries
//? Indexing
//? Replication
//? Load balancing
//? File storage
//? Aggregation
//? Server-side JavaScript execution
//? Capped collections
//? Transactions

//! archictecure of mongodb:

//? json document :: mongodb driver :: mongodb engine :: BSON (internally stored)

//! what is mongodb driver?
//? A MongoDB driver is a library that enables your application to interact with a MongoDB database.
//? It acts as a bridge between your application code and the MongoDB server, allowing you to
//? perform operations like connecting to the database, executing queries, and managing data.

//!db.runCommand({ buildInfo: 1 })
//? Is a low-level command that asks MongoDB to return detailed information about the build and
//? version of the database server

//? In MongoDB, MozJS (Mozilla JavaScript Engine) is the engine used to execute JavaScript code
//? within the database, such as in:
// $where queries
// map-reduce operations
// certain server-side JavaScript functions
// the eval() command (deprecated)
// scripting within mongosh (MongoDB Shell)

//! What is a "Storage Engine"?
//? A storage engine is the part of a database that handles:
//   Reading/writing data to disk
//   Data compression
//   Memory usage (caching)
//   Encrypts data stored on disk for enhanced security.
//   Concurrency control (how many people can read/write at the same time)
//   MongoDB supports multiple storage engines, but WiredTiger is the primary one now.
//!MMAPv1:(Memory-Mapped Version 1)
//? This was the default engine in older versions of MongoDB.
//? It's not recommended for new deployments because WiredTiger offers better performance
//? and features.
//? Memory-Mapped (MMAP) refers to the technique of mapping files or devices into the process's
//? memory space.
//? In MMAPv1, MongoDB used the operating system’s memory-mapped files to manage data storage.
//* Note:This storage engine stores all data in RAM.
//! WiredTiger:
//? This is the default storage engine since MongoDB 3.2 and is generally recommended for most
//? deployments due to its features like document - level concurrency, compression, and encryption
//? at rest

//! db.version() : this command used to check version of mongodb.

//  Where	                 Command                       	     Description
// Inside Mongo Shell	    db.version()	          Shows the MongoDB server version
// Terminal (mongod)	    mongod --version	      Shows the MongoDB server binary version
// Terminal (mongosh)	    mongosh --version	      Shows the MongoDB shell version

//! how to open mongo shell : mongosh

//* Note: 27017 is default port number
//? commands                                        works
//?  db                                   ===>      shows current database
//?  db. (click on tab key)               ===>      shows all mongodb build js methods
//?  cls || Ctrl + L || console.clear()   ===>      clears the console
//?  show dbs || show databases           ===>      shows all databases
//?  db.createCollection()                ===>      create a new collection within the current database.
//?  show collections                     ===>      to see the list of collection
//?  db.COLLECTION_NAME.drop()            ===>      Deleting a Collection.
//! BSON: Binary json
// !What is BSON?
//? BSON is a binary-encoded serialization format that MongoDB uses to store documents and transfer data.
//? It’s similar to JSON but optimized for efficient storage and speed.
//? BSON supports more data types than JSON, including binary data, dates, 32/64-bit integers,
//? and others.

//! Why BSON?
//? JSON is text-based, which is easy for humans to read but not very efficient for machines to parse and store.
//? BSON is designed to be fast to encode/decode and support rich data types.
//? This helps MongoDB handle data efficiently in both storage and network communication.

//? BSON stands for “Binary JSON,” and that's exactly what it was invented to be.
//? A BSON file is a binary representation of the corresponding JSON file.
//? BSON's binary-encoded serialization format encodes type and length information as well,
//? which allows it to be traversed much more quickly compared to JSON.
//? BSON adds some additional data types (non-JSON-native), like dates and binary data,
//? without which MongoDB would have been missing some valuable support

//! JSON VS BSON
//                      JSON                       BSON
// 1.Encoding            UTF-8 string                   Binary
// 2.Data Support        String, boolean,          String, boolean,
//                       number, array,            number(integer, float, long, decimal128...),
//                       object, null              array, null, date, BinData
// 3.Readability         Human and machine         Machine only

//! BSON Types:
//? BSON is a binary serialization format used to store documents and make remote
//? procedure calls in MongoDB
//? Each BSON type has both integer and string identifiers as listed in the following table:

// Type         Number         Alias            Notes
// Double        1             "double"          -
// String        2             "string"          -
// Object        3             "object"          -
// Array         4             "array"           -
// Binary data   5             "binData"         -
// Undefined     6             "undefined"     Deprecated.
// ObjectId      7             "objectId"
// Boolean       8             "bool"
// Date          9             "date"
// Null         10             "null"

//! Clear the mongosh Console
//? The cls command clears the console. You can also clear the console with Ctrl + L and
//? console.clear().

//! mongodb db===> database ===> collections ===> document

//! Database:
//? database can hold one or more collections of document.
//?  test is  default database.
//? command: show dbs or show databases

//! create database in mongodb:
//?  To create a database in MongoDB, use the use DATABASE_NAME command in the mongo shell.
//?  This command will either create a new database if it doesn't exist or switch to an existing one.
//*  Note:  MongoDB doesn't actually create the database until you insert data into it.
//? commmand: use DATABASE_NAME

//! Collection:
//? In MongoDB, a collection is a grouping of documents that are similar in structure and purpose.
//? collection is similar to a table in relational databases like MySQL or PostgreSQL.
//? A collection is a group of documents stored in the database. Each document is a JSON-like object
//? (actually stored as BSON, a binary version of JSON), and the documents in a collection can
//? have different fields and structures.
//? A collection holds documents, just like a table holds rows.
//? Collections are schema - less, meaning documents within the same collection do not need to
//? have the same structure.
//? A MongoDB database can have multiple collections.
//? Collections are created automatically when you insert the first document.

//! Create a collection
//? To create a collection in MongoDB, use the db.createCollection() method within the mongo shell
//? or the equivalent command in your chosen programming language driver.
//? Alternatively, MongoDB will automatically create a collection when you insert the first document
//? into it, if the collection doesn't already exist.

//! db.createCollection():
//? db.createCollection() is a MongoDB shell command used to explicitly create a new collection
//? within the current database.

//* syntax: db.createCollection(name, options)
//? name (string) – Required. Name of the collection to create.
//? options (object) – Optional. Configuration settings for the collection.
// Option	            Description
// 1. capped	        Make collection fixed-size
// 2. size	        Max size for capped collection (in bytes)
// 3. max	            Max number of documents (for capped)
// 4. validator	    Enforce document structure
// 5.storageEngine	Configure storage engine at collection level

//* Example: db.createCollection("students")

//! show collections:
//? It will return a list of all the collections in the current database
//? check the collections is created or not.

//! delete or drop collection :
//* syntax: db.collectionName.drop()
//* Example: db.trainers.drop()

//! delete or drop database :
//? Removes the current database, deleting the associated data files
//* syntax: db.DATABASE_NAME.dropDatabase()

//* Example: db.mysqlTrainers.dropDatabase()
