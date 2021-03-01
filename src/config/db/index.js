// Using Node.js `require()`
const mongoose = require('mongoose');
 async function connect() {
    try {
            await mongoose.connect('mongodb://localhost:27017/node_first_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
            });
            console.log("connect successfully!!!");
        } catch (error) {
            console.log("connect failue!!!");
        }
}
module.exports = { connect };
