const AuthorController = require('../controllers/author.controller');

module.exports = app =>{
    app.get('/api/getAuthors', AuthorController.displayAllAuthors);
    app.get('/api/getAuthor/:_id', AuthorController.getAuthorById);
    app.post('/api/createAuthor', AuthorController.createAuthor);
    app.put('/api/updateAuthor/:_id', AuthorController.updateAuthor);
    app.delete('/api/deleteAuthor/:_id', AuthorController.deleteAuthor);
};