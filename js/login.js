let nameEl = document.querySelector('#name')
let passwordEl = document.querySelector('#password')
let btnEl = document.querySelector('#btn')

async function getLogin(user){
   let res = await fetch('https://pressa-exem.herokuapp.com/register', {
        method: 'POST',
        headers: {'Content-type':'applicatin/json'},
        body: JSON.stringify()
    })
    let response = await res.json()
    if (response.token && response.token !== null) {
        window.localStorage.setItem('token', response.token)
        window.location.replace('/index.html')
    }
}
btnEl.addEventListener('click', () =>{
    const user = {
        username: nameEl.value,
        password: passwordEl.value,
    }
    getLogin(user)
})