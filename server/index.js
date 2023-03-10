const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getRandomFortune, postNewFortune } = require('./controller')



app.get("/api/compliment", getCompliment);
app.get('/api/fortune/random', getRandomFortune)
app.post('/api/fortune', postNewFortune)



app.listen(4000, () => console.log("Server running on 4000"));
