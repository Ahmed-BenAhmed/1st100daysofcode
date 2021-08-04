const book = require("../models/books"),
      assert = require("assert");
describe("saving records",()=>{
    it("Add a book", done =>{
        const book1 = new book({
            title: "Emma",
            author: "Jane Austen"
        });
    
        book1.save().then(()=>{
            assert(book1.isNew === false);
            done();
        });
    })
})