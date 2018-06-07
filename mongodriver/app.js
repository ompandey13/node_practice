const MongoClient = require('mongodb').MongoClient;

//Connection Url
const url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, function(err, client) {
	if(err) {
		return console.dir(err);
	}
	console.log('Connected to mongodb');
	/*InsertDocument(client, function(){
		client.close();
	});*/
	/*InsertDocuments(client, function(){
		client.close();
	});*/
	FindDocuments(client, function(){
		client.close();
	});

});

// Insert Single Doc
const InsertDocument = function(client, callback) {
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
		console.log('Inserted document');
		console.log(result);
		callback(result);
	})

}

// Insert Single Doc
const InsertDocuments = function(client, callback) {
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
		console.log('Inserted ' + result.ops.length + ' documents');
		callback(result);
	})

}

const FindDocuments = function(client, callback) {
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