const MongoClient = require('mongodb').MongoClient;

//Connection Url
const url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, function(err, client) {
	if(err) {
		return console.dir(err);
	}
	console.log('Connected to mongodb');
	/*insertRecord(client, function(){
		client.close();
	});*/
	/*insertRecords(client, function(){
		client.close();
	});*/
	/*findRecords(client, function(){
		client.close();
	});*/
	/*queryRecords(client, function(){
		client.close();
	});*/
	/*updateRecord(client, function(){
		client.close();
	});*/
	/*removeRecord(client, function(){
		client.close();
	});*/

});

// Insert Single Doc
const insertRecord = function(client, callback) {
	var db = client.db('myproject');
	////////////////////
	// Get Collection //
	////////////////////
	const collection = db.collection('users');
	// Insert
	collection.insert({
		name: 'Om Pandey',
		email: 'ompandey@gmail.com'
	}, function(err, result) {
		if(err) {
			return console.dir(err);
		}
		console.log('Inserted record');
		console.log(result);
		callback(result);
	})

}

// Insert Single Doc
const insertRecords = function(client, callback) {
	var db = client.db('myproject');
	////////////////////
	// Get Collection //
	////////////////////
	const collection = db.collection('users');
	// Insert
	collection.insertMany([{
			name: 'Om Pandey',
			email: 'ompandey@gmail.com'
		}, {
			name: 'hello world',
			email: 'helloworld@gmail.com'
		}, {
			name: 'text me',
			email: 'textme@gmail.com'
		}], function(err, result) {
		if(err) {
			return console.dir(err);
		}
		console.log('Inserted ' + result.ops.length + ' records');
		callback(result);
	})

}

// find record
const findRecords = function(client, callback) {
	var db = client.db('myproject');
	const collection = db.collection('users');
	collection.find({}).toArray(function(err, docs) {
		if(err) {
			return console.dir(err);
		}
		console.log('Fount the following records');
		console.log(docs);
	})
}

// query record
const queryRecords = function(client, callback) {
	var db = client.db('myproject');
	const collection = db.collection('users');
	collection.find({'name': 'Om Pandey'}).toArray(function(err, docs) {
		if(err) {
			return console.dir(err);
		}
		console.log('Fount the following records');
		console.log(docs);
	})

}

// Update record
const updateRecord = function(client, callback) {
	var db = client.db('myproject');
	const collection = db.collection('users');
	collection.updateOne({name: 'Om Pandey'},
		{$set: {email: 'om@fullstack.com'}},
		function(err, result){
			if(err) {
				return console.dir(err);
			}
			console.log('Updated Record');
			callback(result);
		})

}

// remove record
const removeRecord = function(client, callback){
	var db = client.db('myproject');
	const collection = db.collection('users');
	collection.deleteOne({name:'Om Pandey'}, function(err, result){
		if(err) {
			return console.dir(err);
		}
		console.log('Removed Document');
		console.log(result);
		callback();
	});

}