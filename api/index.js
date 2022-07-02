const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const postRoute = require("./routes/posts.js");
const categoryRoute = require("./routes/categories.js");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL,)
    .then(console.log("Connected to url"))
    .catch((err) => console.log(err));

    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);
    app.use("/api/posts", postRoute);   
    app.use("/api/categories", categoryRoute);   
    
app.listen("3000", ()=>{
    console.log("Connected");
});
