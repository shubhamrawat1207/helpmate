const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/helpcrew",{
   useNewUrlParser:true,
   useNewUrlParser: true  
}).then(()=>{
    console.log(`connection successful`);
}).catch((error)=>{
    console.log(error);
})
