const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/peopleDB");

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const People = mongoose.model("People", peopleSchema);

const people = new People(    
    {
    name: "Harsh",
    age: 22
    }, 
);
const Mohit = new People({
    name: "Mohit",
    age: 19
});
const Samarjit = new People({
    name: "Samarjit",
    age: 19
});

// People.insertMany([Mohit, Samarjit])

// async function myfruits() {
//     const people= await People.find({});
//     people.forEach(function(people){
//         console.log(people);
//     });
// }
// myfruits();

const myPeople = await People.find({})

myPeople.array.forEach(element => {
    console.log(myPeople);
});