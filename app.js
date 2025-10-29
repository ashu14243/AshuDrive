const express = require('express'); 
// require('dotenv').config();

const userRoutes = require('./routes/user.routes');
const dotenv=require('dotenv');
dotenv.config();

const router = require('./routes/user.routes');
const connectToDB = require('./config/db');
connectToDB();
const cookieParser = require('cookie-parser');

const app = express();
const indexRoutes = require('./routes/index.routes');


// const connectToDB = require('./config/db');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.render("index");
// });
app.use('/', indexRoutes);
app.use('/user', userRoutes);
const port=3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});