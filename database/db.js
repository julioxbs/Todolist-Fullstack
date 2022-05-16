const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@todolist.dkvk6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log("MongoDB Atlas Connected");
    }).catch((err) => console.log(err))
}

module.exports = connectToDb;
