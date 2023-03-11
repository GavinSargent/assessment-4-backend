const complimentBtn = document.getElementById("complimentButton")

const getRandomFortuneBtn = document.getElementById("fortune-button")

const postFortuneForm = document.getElementById('add-fortune')
const postFortuneInput = document.getElementById('add-fortune-input')
const postFortuneNameInput = document.getElementById('add-fortune-name')

const putNameInput = document.getElementById('edit-fortune-name')
const putFortuneInput = document.getElementById('edit-fortune-content')
const putFortuneForm = document.getElementById('edit-fortune')

const deleteFortuneForm = document.getElementById('delete-fortune')
const deleteFortuneInput = document.getElementById('delete-fortune-name')








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

    axios.post('http://localhost:4000/api/fortune/post', newFortune)
    .then((result)=>{
        alert('New fortune added!')
        console.log(result.data)
    }).catch(()=>{
        console.log('Backend failed miserably')
    })
}

const editFortune = (event) => {
    event.preventDefault()
    let editedFortuneObj = {
        fortune: putFortuneInput.value,
        name: putNameInput.value
    }
    // console.log(editedFortuneObj)
    axios.put('http://localhost:4000/api/fortune/put', editedFortuneObj)
    .then((result)=>{
        alert(`User's fortune successully changed!`)
        console.log(result.data)
    })
    .catch((err)=>{
        console.log('something didn\'t work on the backend')
        console.log(err)
    })
}

const deleteFortune = (event) => {
    event.preventDefault()
    let name = deleteFortuneInput.value
    axios.delete('http://localhost:4000/api/fortune/' + name)
    .then((res)=> {
        alert(`${name}'s fortune deleted`)
        console.log(res.data)
    })

}



complimentBtn.addEventListener('click', getCompliment)
getRandomFortuneBtn.addEventListener('click', getFortune)
postFortuneForm.addEventListener('submit', postNewFortune)
putFortuneForm.addEventListener('submit', editFortune)
deleteFortuneForm.addEventListener('submit', deleteFortune)