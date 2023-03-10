const complimentBtn = document.getElementById("complimentButton")

const getRandomFortuneBtn = document.getElementById("fortune-button")

const postFortuneForm = document.getElementById('add-fortune')
const postFortuneInput = document.getElementById('add-fortune-input')
const postFortuneNameInput = document.getElementById('add-fortune-name')








const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/random/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const postNewFortune = (event) => {
    event.preventDefault()

    const newFortune = {
        fortune: postFortuneInput.value,
        name: postFortuneNameInput.value
    }

    axios.post('http://localhost:4000/api/fortune/', newFortune)
    .then((result)=>{
        alert('New fortune added!')
        console.log(result.data)
    }).catch(()=>{
        console.log('Backend failed miserably')
    })
}




complimentBtn.addEventListener('click', getCompliment)
getRandomFortuneBtn.addEventListener('click', getFortune)
postFortuneForm.addEventListener('submit', postNewFortune)