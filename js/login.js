let nameEl = document.querySelector('#name')
let passwordEl = document.querySelector('#password')
let btnEl = document.querySelector('#btn')

async function getLogin(user){
   let res = await fetch('https://pressa-exem.herokuapp.com/login', {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(user)
    })
    let response = await res.json()
    if (response.token && response.token != null) {
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