const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


const connectDB = async () => {
    try{
    await mongoose.connect(db);
    const mdb = mongoose.connection
    mdb.on('error', console.error.bind(console, 'MongoDB connection error:'));

    console.log('MongoDB connected sexy...');
    } catch(err){
        console.error(err.message);
        // exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;