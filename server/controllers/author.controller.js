const Author = require('../models/author.model');

// create
module.exports.createAuthor = (req,res) => {
    const {body} = req;
    Author.create(body)
        .then((newAuthor) => res.json(newAuthor))
        .catch((err) =>{
            console.log(err)
            res.status(400).json(err)
        })
};
// display all
module.exports.displayAllAuthors = (req,res) => {
    Author.find().sort({
        fName:-1
    })
        .then((allAuthors) => res.json(allAuthors))
        .catch((err) =>{
            console.log(err)
            res.status(400).json(err)
        })
};
// display one
module.exports.getAuthorById = (req,res) => {
    const {params} = req;
    Author.findOne({_id: params._id})
        .then((oneAuthor) => res.json(oneAuthor))
        .catch((err) =>{
            console.log(err)
            res.status(400).json(err)
        })
};
// update/put
module.exports.updateAuthor = (req,res) => {
    const {body, params} = req;
    Author.findOneAndUpdate({_id: params._id}, body,{
        new: true,
        runValidators: true,
    })
        .then((updatedAuthor) => res.json(updatedAuthor))
        .catch((err) =>{
            console.log(err)
            res.status(400).json(err)
        })
};
// delete
module.exports.deleteAuthor = (req,res) => {
    const {params} = req;
    Author.deleteOne({_id: params._id})
        .then((result) => res.json(result))
        .catch((err) =>{
            console.log(err)
            res.status(400).json(err)
        })
};