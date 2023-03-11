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
    name: 'Gavin'
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
    
    editFortune: (req, res) => {
        let editorsName = req.body.name
        let newFortune = req.body.fortune
        
        let index
        let editedFortuneObj 
            
        for(let i = 0; i < fortunesList.length; i++){
            let currentName = fortunesList[i].name

            if(currentName === editorsName){
                editedFortuneObj = i
                index = i
            }
        }
        if(editedFortuneObj === undefined){
            res.status(400).send('Cannot find name')
        } else {
            
            editedFortuneObj = {fortune: newFortune, name: editorsName}
            fortunesList.push(editedFortuneObj)
            fortunesList.splice(index, 1)

            res.status(200).send(fortunesList)

        }
    },
    deleteFortune: (req, res)=>{
        let deleteName = req.params.name
         
        let index
        for(let i=0; i< fortunesList.length; i++){
            let currentName = fortunesList[i].name
             
            if(currentName === deleteName){
                index = i
            }
        }
        if(index === undefined){
            res.sendStatus(400)
            
        } else {
            fortunesList.splice(index,1)
            res.status(200).send(fortunesList)
        }
    }
}