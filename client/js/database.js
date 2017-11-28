var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var database= movieApi;
const server= 'mongodb://' +process.env.IP + ':27017' + movieApi;
const QueryCtr = mongoose.model('Query', QuerySchema)
var db= mongoose.connection;



const QuerySchema = new mongoose.Schema({
    query: { type: String, required: true},
    count: {type: Number, required: true},
    results: [{type: String}]
})

const MovieSchema = new mongoose.Schema({
    id: {type: String, required:true},
    title: {type: String, required:true},
    poster_path: {type: String},
    overview: {type: String, required:true},
    released_date: {type: String, required:true},
    vote_average: {type: String, required:true}
})

const Query = mongoose.model('Query', QuerySchema);

exports.addQuery = (movieData, callback) => {
    console.log('addQuery()...')
    const QueryDoc = new Query({ query: movieData.query, count: movieData.data.length, results: JSON.stringify(movieData.data)});
    QueryDoc.save(function(err, data){
        if(err)
            callback('error: '+ err);
        else
            callback('Query result saved' +data);
    })
}

exports.getAll = callback => {
    QueryCtr.find((err,data)=>{
        if(err){
            callback('error: ' + err)
        }else{
            callback();
        }
    })
}

exports.getByQuery = (findkeys, callback) => {
    QueryCtr.findOne({'query': findkeys}, (err,data)=>{
        if(err)
            callback('error: '+err)
        else if(data==[]||data==null)
            callback(null)
        else
            callback(data._doc);
    })
}
