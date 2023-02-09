const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


const connectDB = async () => {
    try{
        await mongoose.connect(db, {useNewUrlParser: true});
        console.log('MongoDB connected sexy...');
    } catch(err){
        // console.error(err.message);
        // exit process with failure
        console.error(err.message)
        process.exit(1);
    }

}

module.exports = connectDB;