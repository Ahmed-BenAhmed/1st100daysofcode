const book = require("../models/books"),
      assert = require("assert");
describe("saving records",()=>{
    it("Add a youtube channel", done =>{

        const channel1 = new Channel({
            name: "Ahmed Bogayo",
            vidoes: [{
                title: "Learn Mongo DB in two minutes",
                views: 100000000
            }]
        });
        book1.save().then(()=>{
            assert(book1.isNew === false);
            done();
        });
    })
})
describe("nested records",()=>{
    let channel1;
    beforeEach(()=>{
        
        
    })
    it("add new channel with vidoes",done=>{
        channel1.save().then(()=>{
            assert(channel1.isNew === false);
            Channel.findOne({name: channel1.name},(record)=>{
                assert(record.vidoes.length === 1);
                done();
            })
        })
    })
})