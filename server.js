const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')

const app = express();
//connect db
connectDB();

//init middleware
app.use(express.json( { extended: false}));
app.get('/', (req, res) => res.send('API Running'));
app.use(cors()) 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/guess', require('./routes/api/guess'));
app.use('/api/submissions', require('./routes/api/submissions'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

