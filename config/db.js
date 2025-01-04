const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://at604281:wetware9211@dashboarddb.ysw862b.mongodb.net/skillIndia").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})