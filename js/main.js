if (!window.localStorage.getItem('token')) {
    window.location.replace('/login.html')
}

let logoutEl = document.getElementById('logOut')

logoutEl.addEventListener('click', ()=>{
    window.localStorage.clear()
    window.location.replace('/index.html')
})