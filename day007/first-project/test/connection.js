const mongoose = require("mongoose");


mongoose.Promise = global.Promise;

// connect to database befor test start
before(done =>{
    mongoose.connect('mongodb://127.0.0.1:27017/',{useNewUrlParser: true});

    mongoose.connection.once('open', () => {
        console.log("Successfuly connected");
        done();
    }).on('error',(err)=>{
        console.error("error: ",err)
    })
})
// drop the books collection before every test
beforeEach(done => {
    mongoose.connection.collections.books.drop(()=>{
        mongoose.connection.collections.channels.drop(()=>{
            done();
        })
    })
})
