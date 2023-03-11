const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getRandomFortune, postNewFortune, editFortune, deleteFortune } = require('./controller')



app.get("/api/compliment", getCompliment);
app.get('/api/fortune/random', getRandomFortune)
app.post('/api/fortune/post', postNewFortune)
app.put('/api/fortune/put', editFortune)
app.delete('/api/fortune/:name', deleteFortune)



app.listen(4000, () => console.log("Server running on 4000"));
