const express = require('express');
const app = express();
const http = require("http");
const httpServer = http.Server(app);
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const { ExpressPeerServer } = require('peer');

const people = require('./routes/api/people');
const orders = require('./routes/api/orders');
const packages = require('./routes/api/packages')


mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));

// app.use(passport.initialize());
// require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
} else {
  const server = app.listen(9000);
  const peerServer = ExpressPeerServer(server, {
    allow_discovery: true
  })
  app.use('/peerjs', peerServer)
}

app.use('/api/people', people);
app.use('/api/orders', orders);
app.use('/api/packages', packages)


const port = process.env.PORT || 5000;
httpServer.listen(port, () => console.log(`Server is running on port ${port}`));
