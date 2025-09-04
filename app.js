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

//! creating the collection by  implicit way and insert data:
//? db.collectionName.insertOne({key:"value"})

//* syntax: db.createCollection(name, options)
//? name (string) – Required. Name of the collection to create.
//? options (object) – Optional. Configuration settings for the collection.
// Option	            Description
// 1. capped	        Make collection fixed-size
// 2. size	        Max size for capped collection (in bytes)
// 3. max	            Max number of documents (for capped)
// 4. validator	    Enforce document structure
// 5.storageEngine	Configure storage engine at collection level

//! Capped collection
//?A capped collection in MongoDB is a fixed-size collection that automatically overwrites the oldest documents when it reaches its capacity
//? while creating a collection the user must specify the the collection maximum size in bytes and
//? the maximum number of documents that to be stored.
//? A capped collection is a fixed-size, circular collection in MongoDB that:
//? Preserves insertion order (like a queue).
//? Automatically overwrites the oldest documents when it reaches its size limit.
//? Is ideal for logging, caching, or real-time data.

//! How to create capped colleciton
//? step1: create database :: use db_name
//? step2: create collection :: db_name.createCollection("collection_name", {})

//! to check collection is capped or not
//? In MongoDB, db.collectionName.isCapped() is a method used to determine if a specified collection is
//? a capped collection.
//? Capped collections are fixed - size collections that automatically overwrite the oldest documents when they reach their capacity, maintaining insertion order.

//* Example: db.createCollection("students")

//! show collections or show tables:
//? It will return a list of all the collections in the current database
//? check the collections is created or not.

//! delete or drop collection :
//* syntax: db.collectionName.drop()
//* Example: db.trainers.drop()

//! delete or drop database :
//? Removes the current database, deleting the associated data files
//* syntax: db.DATABASE_NAME.dropDatabase()

//* Example: db.mysqlTrainers.dropDatabase()

//! document:

//?A document is a JSON-like object stored in a collection.
//?In MongoDB, it's actually stored in a BSON format (Binary JSON), which supports additional
//?data types like Date, ObjectId, etc.
//? It contains key-value pairs, where:
//* Key = field name (like a column)
//* Value = can be string, number, array, object, boolean, etc.

//? Every document must have a unique _id field.
//?Documents in the same collection don’t have to follow the same schema.
//?Documents can be nested (objects inside objects).
//?MongoDB is schema-less, so you can store flexible and dynamic data.

//! insert field in collection :
//!db.collection.insertOne({}):
//? db.collection.insertOne() inserts a single document into a collection.
//? It accepts json or javascript object as argument.
//? If the document does not specify an _id field, MongoDB adds the _id field with an ObjectId
//? value to the new document.

//! insert many documents in collection:
//!db.collectionName.insertMany():
//? The db.collection.insertMany() method in MongoDB is used to insert multiple documents into a collection.
//? It accepts an array of documents and inserts them in a single operation, making it efficient for batch inserts.

//? example:
// [
//     {
//         name: "shiva",
//         course: "Reactjs",
//         duration: "1 month",
//         fees:"4000"
//     },
//     {
//         name: "shubham",
//         course: "web development",
//         duration: "2 month",
//         fees:"15000"
//     },
//     {
//         name: "ritesh",
//         course: "java",
//         duration: "3 month",
//         fees:"16000"
//     }
// ]

//!find() method:
//* syntax:db.collection.find(query, projection, options)
//? The find() method in MongoDB selects documents in a collection or view and returns a
//? cursor to the selected documents.
//? It has two parameters: query and projection and options

//* Note:If you don’t specify a query, MongoDB returns all documents in the collection.

//!  Nested object query
//  db.collectionName.find({key:value})
//? example:
// db.users.find({"address.zipcode":"12926-3874"})

//! findOne():
//? The findOne() method in MongoDB is used to retrieve a single document from a collection
//? that matches specified query criteria.

//* syntax:db.collection.findOne(<query>, <projection>)

//* <query>:
//? This is an optional document that specifies the selection criteria or filter for the documents.
//? Only documents that match this criteria will be considered.
//? If omitted or an empty document({}) is provided, findOne() will return the first document
//? In the collection according to its natural order(insertion order for capped collections).

//* <projection>:
//? </projection>This is an optional document that specifies the fields to be included or excluded in the returned document.
//? </projection>To include specific fields, set their value to 1 or true.
//? </projection>To exclude specific fields, set their value to 0 or false.
//? </projection>The _id field is included by default unless explicitly excluded.
//? </projection>You cannot combine inclusion and exclusion of fields in the same projection, except for the _id field.

//! Note:
//? 1. If multiple documents satisfy the query criteria, findOne() returns the first
//?     document found according to the natural order.
//? 2. If no document satisfies the query, the method returns null.
//? 3. Unlike the find() method, findOne() returns a document directly, not a cursor.

//! MongoDB ObjectId:
//? Every document in the collection has an "_id" field that is used to uniquely identify the
//? document in a particular collection it acts as the primary key for the documents in the
//? collection.
//? The "_id" field can be used in any format and the default format is the ObjectId of the document
//? The ObjectId is a 12-byte BSON type that guarantees uniqueness across different machines and
//? processes, which is essential for distributed systems.It is generated in such a way that
//? ensures no collisions across different databases or servers.

//! Key Characteristics of ObjectId
//* 1.Uniqueness: ObjectId ensures that every document in a collection has a unique identifier,
//*               even across multiple MongoDB instances and servers.
//* 2.Timestamp:  The ObjectId includes a timestamp, allowing you to retrieve the creation time of
//*               the document.
//* 3.Efficiency: ObjectId generation is efficient and does not require coordination between
//*               servers, making it ideal for distributed systems.

//!The ObjectId is composed of 12 bytes, broken down as follows:

//? The first 4 bytes represent the Unix Timestamp of the document.
//? The next 3 bytes are the machine ID on which the MongoDB server is running.
//? The next 2 bytes are of the process ID.
//? The last Field is 3 bytes used for incrementing the objectid

//!The ObjectId is represented as a hexadecimal string, and its default format is:
//?  ObjectId(<hexadecimal>)
//* Note:  ObjectId accepts one parameter which is optional Hexadecimal ObjectId in String.
//*        We can give our own ObjectId to the document but it must be unique.
//*        2. if you are adding the duplicate objectID it will show error duplicate key

//! getCollection():
//? In MongoDB, the db.getCollection() method is used to access a specific collection within
//? the current database.

//? The object returned by db.getCollection() provides access to all standard collection methods,
//? such as insertOne(), find(), updateMany(), deleteMany(), etc.

//* syntax:db.getCollection("collectionName")
//? Here, collectionName is a string representing the name of the collection you wish to access

//?To access a collection named _my_data that might otherwise conflict with shell behavior,
//? you would use
//todo : example
//  db.getCollection("_my_data").find({})

//! Revision of all topics:

//! How to check db version:
//? db.version()

//! How to check active database
//? database or db

//! How to check all databases
//? show db or show databases

//! How to crate database
//? use database
//todo: use punjagutta

//! How to create new Collection
//? db.createCollection("collectionName")
//todo:  db.createCollection("trainers")

//! How to create capped collection
//? db.createCollection("CollectionName",{capped:true,size:1000,max:4,autoIndexId:true})

//! How to check is collection is capped or not
//? db.collection.isCapped()

//! How insert document in collection
//? db.collection.insertOne()
//todo: db.trainers.insertOne({name:"Shiva"})

//! How insert multiple document in collection
//? db.collection.insertMany() or  db.collection.insert()
//todo:db.trainers.insertMany([{},{}])

//! How to get the collection
//? db.getCollection("collectionName")

// var docs = []
// for (let i = 101; i<151; i++) {
//     let obj = {
//        id:`TYP${i}`
//    }
//    docs.push(obj)
// }
// db.onlytest.insertMany(docs)

//! How to see all document of collection
//? db.collection.find()

//! How to find the single document of collection
//? db.collection.findOne()

//! How to find with query
//? db.collection.findOne({key:value})

//todo : download == Studio 3T Community

//! CRUD
//? create || read || update || delete

//! create data
// db.employees.insertMany([
//   {
//     name: "Shiva",
//     eduction: "BTECH",
//     salary: "500000",
//     experience: "2 years",
//     skills: ["HTML", "CSS", "Javascript"],
//     address: {
//       city: "Pune",
//       state: "MH",
//     },
//   },
//   {
//     name: "Nikhil",
//     eduction: "BTECH",
//     salary: "550000",
//     address: {
//       city: "Bangalore",
//       state: "KA",
//     },
//     experience: "2 years",
//     skills: ["HTML", "CSS", "Javascript"],
//   },
// ]);

//! Read data
//? db.employees.find()

//! update data in document
//? update only one document
//? db.collection.updateOne(<filter>,<update>,<option>)

//*  Note: 1. to update document we requires atomic operator $set
//*        2. $set is update operator and it also called as atomic operator

//todo:example: db.employees.updateOne({name:"Shiva"},{$set:{experience: "3 years",salary: "650000",lastupdated:new Date()}})

//! $set Operator:
//? In MongoDB, the $set operator is a fundamental update operator used to modify documents within
//? a collection.
//? It allows for the addition of new fields or the modification of existing fields in a document

//! Key features and usage of the $set operator:
//? 1. Adds new fields:
//? - If a specified field does not exist in a document, $set will create it and assign
//?   the provided value.
//? 2. Updates existing fields:
//? - If the field already exists, $set will replace its current value with the new value
//?   specified in the operation.
//? 3.Preserves other fields:
//? - The $set operation only affects the fields explicitly mentioned in the $set expression,
//?   leaving all other fields in the document unchanged.This makes it suitable for incremental
//?   updates.
//? 4.Supports nested fields:
//? - $set can be used to update or add fields within embedded documents or
//?   using dot notation (e.g., address.city).

//! Note: All the operators will start with $ symbol.

//! upsert method
//?In MongoDB, an "upsert" operation combines an update and an insert operation into a single,
//? atomic action.It allows you to:
//? 1.Update: an existing document if it matches a specified query filter.
//? 2.Insert: a new document if no document matches the query filter.

//? The upsert option is a boolean value that can be set to true in update operations like
//? updateOne() or updateMany()

//? If upsert: true is set and a document matching the query filter is found, that document
//?            is updated according to the specified update operators(e.g., $set, $inc).

//? If upsert: true is set and no document matches the query filter, a new document is inserted.
//?            This new document will include the fields specified in the query filter and any
//?            fields provided in the update operation(e.g., within $set).

//? by default upsert is false
//* syntax: db.collectionName.updateOne(<filter>,<update>,{upsert:true})

//? db.employees.updateOne({empid:"type5"}, {$set{duration:"3 months"}},{upsert:true})


// let serverResponse = {
//     "Content-Type": "application/json",
//     "Content-lan":"US-en"
// }

//! timeStamp with updateOne
db.employees.updateOne({name: 'Shiva'},{$set:{compaines:["Cyperts","Testyantra"]}},{$currentDate:{lastmodifed:true}},{upsert:true}) 