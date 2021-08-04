const book = require("../models/books"),
    assert = require("assert");

describe("Delet records",() => {
    let book1, book2;
    beforeEach(done =>{
        book1 = new book({
            title: "Emma",
            author: "Jane Austen",
            price: 12.30
        })
        book2 = new book({
            title: "Ecma",
            author: "Jane Austen",
            price: 17.00
        })
        book1.save().then(()=>{
            book2.save().then(()=>{
                done();
            });
        });
    })

    it("delet a book by id",done =>{
        book.findOneAndDelete({_id: book1._id}).then(()=>{
            book.findOne({_id: book1._id}).then(result => {
                assert(result === null);
                done();
            })
        })
    })
})