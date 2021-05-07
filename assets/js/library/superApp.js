class App {
    base = 'http://api.doardigital.com.br/v1'
    options = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        credentials: "same-origin",
        method: 'POST',
        mode: 'no-cors',
        cache: 'default',
        body: null
    }
    obj_to_url(obj) {
        let indices = Object.keys(obj);
        let url = indices.map(i => `${i}=${obj[i]}`).join('&');
        return encodeURI(url);
    }
    async post(path, data) {
        this.options.body = this.obj_to_url(data)
        try {            
            let res = await fetch( `${this.base}${path}`, this.options )
            let res_in_json = await res.json()
            return res_in_json
        } catch (error) {
            return {
                status_code: 500,
                next: false,
                message: 'erro catastrófico'
            }
        }
    }
    async get( path, data = {}) {
        try {            
            let res = await fetch( `${this.base}${path}?${this.obj_to_url(data)}` )
            let res_in_json = await res.json()
            return res_in_json
        } catch (error) {
            return {
                status_code: 500,
                next: false,
                message: 'erro catastrófico'
            }
        }
    }
    async get_admin( id ) {
        let res = await this.get(`/admin/${id}`, {})
    }
    async login(email, password) {
        let res = await this.get_admin(1)
        console.log(res)
        // let res = await this.post( '/login', { email, password } )
    }
}

export default App;