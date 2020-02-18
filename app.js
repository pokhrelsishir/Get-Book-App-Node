const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');


bookRouter.route('/books')
  .get((req, res) => {
    const response = {
      hello: 'This is my API !!!'
    };
    res.json(response);

    //res.send(response);
    //res.render(response);
  }
  );

app.use('/api', bookRouter);

//.post()
//.patch()


app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API !!!');

})

app.listen(port, () => {
  console.log('Running on port ' + port);

});