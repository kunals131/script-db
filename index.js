const mongoose = require('mongoose');

const data = require('./data.json');
const User = require('./userSchema');

const uri =  'mongodb+srv://kunals131:kunals131@cluster0.o0tf1.mongodb.net/sh-db?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useunifiedTopology: true
}, () => {
    const fetchData =async ()=>{
        try {
            console.log('Deleting...');
        await User.deleteMany({});
        console.log('Deleted All');
        for(let i=0; i<data.length; ++i) {

            Object.defineProperty(data[i], 'uid', // modify old key
            // fetch description from object
            Object.getOwnPropertyDescriptor(data[i], 'id'));
            delete data[i]['id'];   

            const newUser = new User(data[i]);
            await newUser.save();
            console.log(`User with id ${newUser.id}`);
        }
        }catch(err) {
            console.log(err);
        } 
        console.log('DONE')
        }
        
        fetchData();
})

