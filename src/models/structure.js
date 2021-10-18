const mongoose = require("mongoose")

// schema define struecture of document 
const help_Crew = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
    },
    profession:{
        type:String,
    }
});

// crating collecgtion using mongoose.model 
const Help_crew = mongoose.model("HelpCrew",help_Crew);

const createDoc = async()=>{
    try {
        const myFirstCrew = new Help_crew(
            {
            name:"Shubham",
            age: 21,
            gender:"Male",
            profession: "Coder"
        })
        const mySecondCrew = new Help_crew(
            {
            name:"Aditi",
            age: 28,
            gender:"Female",
            profession: "teacher"
        })
        
        const result = await Help_crew.insertMany([myFirstCrew,mySecondCrew]); 
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const readDoc = async()=>{
    // const result = await Help_crew.find({name:"Shubham"}).select({name:1}).limit(1);
    // const result = await Help_crew.find({age: {$gt : 21}});
    // const result = await Help_crew.find({age: {$gte : 21}});
    // const result = await Help_crew.find({profession: {$in : ["Coder","teacher"]}});
    // const result = await Help_crew.find({profession: {$nin : ["teacher"]}});
    const result = await Help_crew.find({$and : [{name : "Shubham"},{age: 21}]});
    // console.log(result);
}

// createDoc();
readDoc();