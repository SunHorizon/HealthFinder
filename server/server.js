
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.get("/home/image", (req, res) => {
    res.json({
      image: "https://via.placeholder.com/400x200.png?text=Health+Resource", // or base64
    });
});

app.get('/', (req,res) => {
    res.send("API is Running");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
})