const express = require('express');
const mongoose = require('mongoose');

const app = express();
//const db = mongoose.connect("mongodb://localhost:4000/bookAPI", { useNewUrlParser: true });

const db = mongoose.connect('mongodb+srv: {mongodb://localhost:4000/bookAPI}', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');


bookRouter.route('/books')
  .post((req, res) => {
    const book = new Book(req.body);
  })
  .get((req, res) => {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);

    });
  });


bookRouter.route('/books/:bookId')
  .get((req, res) => {


    Book.findById(err.params.bookId, (err, book) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);

    });
  });

// const response = {
//   hello: 'This is my API !!!'
// };
// res.json(response);

//res.send(response);
//res.render(response);

app.use('/api', bookRouter);

//.post()
//.patch()


app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API !!!');

})

app.listen(port, () => {
  console.log('Running on port ' + port);

});