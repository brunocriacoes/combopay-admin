const cache = {
    set user_logged_name(name) { localStorage.setItem('user_logged_name', name) },
    get user_logged_name() { return localStorage.getItem('user_logged_name') },
    set user_logged_id(id) { localStorage.setItem('user_logged_id', id) },
    get user_logged_id() { return localStorage.getItem('user_logged_name') }, 
    set bearer(token) { localStorage.setItem('bearer', token) },
    get bearer() { return localStorage.getItem('bearer') },
}

export default cache;