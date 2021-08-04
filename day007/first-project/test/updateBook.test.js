const book = require("../models/books"),
      assert = require("assert");

describe("updating records",()=>{
    let book1, book2;
    beforeEach(done=>{
        book1 = new book({
            title: "Emma",
            author: "Jane Austen",
            price: 18.00
        });

        book2 = new book({
            title: "Ecma",
            author: "Jane Austen",
            price: 16.50
        });
    
        book1.save().then(()=>{        
            book2.save().then(()=>{
                done();
            });
        });
    })

    it("update a book author", done => {
        book.updateOne({title: "Ecma"},{author: "unknown"}).then(() => {
            book.findOne({_id: book2._id}).then(result => {
                assert(result.author === "unknown");
                done();
            })
        })
    })

    it("discount the price of all books", done => {
        book.updateMany({},{$mul : {price: 0.5}}).then(()=>{
            book.findOne({_id: book1._id}).then(result => {
                assert(result.price === 9.00);
                done();
            })
        })
    })
})