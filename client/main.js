const complimentBtn = document.getElementById("complimentButton")
const randomFortuneBtn = document.getElementById("fortune-button")
const addfortune = document.getElementById('add-fortune')








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




complimentBtn.addEventListener('click', getCompliment)
randomFortuneBtn.addEventListener('click', getFortune)