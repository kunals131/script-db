const  mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : [true,'Email must be unique'],
    },
    password : String,
    phone : String,
    linkedin : String,
    instagram : String,
    age : Number,
    gender : String,
    match : String,
    igbtqia : String,
    isAdmin : String,
    isActive :String,
    primarilyGrowUp : String,
    socialHabitDrink : String,
    socialHabitSmoke : String,
    searchingForDescription : String,
    channels : String,
    hardestPartOfDating : String,
    invite : String,
    inviteOne : String,
    inviteTwo : String,
    inviteThree  :String,
    createdAt : String,
    updatedAt : String,
    firstName : String,
    lastName : String,
    genderDescription : String,
    matchDescription : String,
    city : String,
    college : String,
    degree : String,
    occupation  :String,
    searchingFor : String,
    referenceOneName : String,
    referenceOneEmail : String,
    referenceOnePhone : String,
    referenceTwoName  :String,
    referenceTwoEmail : String,
    referenceTwoPhone : String,
    isActive : {
        type : Boolean,
        default : false
    },
    status : {
        type : String,
        default : 'pending',
        enum : ['pending', 'accepted','waitlist','rejected']
    }
})

if (mongoose.models.User) {
    delete mongoose.connection.models['User'];
}

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
