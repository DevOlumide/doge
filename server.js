const express = require ("express");
const app = express();
const routes = require('./routes/routes');
const cors = require('cors');
const mongoose = require('mongoose');


const port = process.env.PORT || 8080;

const mongodbConnectURL = "mongodb+srv://DevOlumide:olumide16@cluster0.w0bv7.mongodb.net/users?retryWrites=true&w=majority" ;

mongoose.connect(process.env.MONGODB_URI || mongodbConnectURL, {useNewUrlParser: true}, () => {
  console.log("Mongoose connected successfully")
});


app.use(express.json());
app.use(cors());
app.use("/app", routes);


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname, 'build')));
}


app.listen(port, () => {
  console.log("Server started running at port " + port)
})