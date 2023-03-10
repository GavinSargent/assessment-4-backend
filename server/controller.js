let fortunesList = [{
    fortune: 'Fortune Not Found: Abort, Retry, Ignore?',
    name: "Original"
}, {
    fortune: 'How many of you believe in psycho-kinesis? Raise my hand.',
    name: 'Original'
},
{
    fortune: 'Miles are covered one step at a time.',
    name: 'Original'
},
{
    fortune: 'Pick battles big enough to matter, small enough to win.',
    name: 'Original'
},
{
    fortune: 'There’s no such thing as an ordinary cat.',
    name: 'Original'
}
]


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getRandomFortune: (req,res) => {
        let randomIndex = Math.floor(Math.random() * fortunesList.length);
        let randomFortune = fortunesList[randomIndex].fortune;
      
        res.status(200).send(randomFortune)
    },
    postNewFortune: (req, res) => {
        fortunesList.push(req.body)
        res.status(200).send(fortunesList)
    },
    
}