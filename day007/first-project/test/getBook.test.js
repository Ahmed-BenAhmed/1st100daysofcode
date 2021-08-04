const book = require("../models/books"),
      assert = require("assert");

describe("finding records",()=>{
    let book1, book2;
    beforeEach(done=>{
        book1 = new book({
            title: "Emma",
            author: "Jane Austen"
        });
    
        book1.save().then(()=>{
            book2 = new book({
                title: "Ecma",
                author: "Jane Austen",
                price: 12.50
            });
        
            book2.save().then(()=>{
                done();
            });
        });
    })

    it("get a book", done => {
        book.findOne({title: "Emma"}).then(result => {
            assert(result.title === "Emma");
            done();
        })
    })

    it("get a book by id", done => {
        book.findOne({_id: book2._id}).then(result => {
            assert(result._id.toString() === book2._id.toString());
            done();
        })
    })
})