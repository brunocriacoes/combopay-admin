class App {
    base = '//api.doardigital.com.br/v1'
    options = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        // credentials: "same-origin",
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        body: null
    }
    obj_to_url(obj) {
        let indices = Object.keys(obj);
        let url = indices.map(i => `${i}=${obj[i]}`).join('&');
        return encodeURI(url);
    }
    async post(path, data, verbo = 'POST') {
        this.options.body = this.obj_to_url(data)
        this.options.method = verbo
        if (verbo == 'PUT') {
            this.options.body = JSON.stringify(data)
            this.options.headers = {
                // 'Content-Type': 'text/html',
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/json; charset=UTF-8',
                'Content-Length': this.options.body.length
            }
        }
        console.log(this.options)
        try {
            let res = await fetch(`${this.base}${path}`, this.options)
            let status_code = res.status
            let res_in_json = await res.json()
            return { ...res_in_json, status_code }
        } catch (error) {
            return {
                status_code: 500,
                next: false,
                message: 'erro catastrófico'
            }
        }
    }
    async put(path, data) {
        return await this.post(path, data, 'PUT')
    }
    async delete(path, data) {
        return await this.post(path, data, 'DELETE')
    }
    async get(path, data = {}) {
        try {
            let res = await fetch(`${this.base}${path}?${this.obj_to_url(data)}`)
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
    async get_admin(id) {
        let res = await this.get(`/admin/${id}`, {})
    }
    async put_admin(id, data = {}) {
        let res = await this.put(`/admin/${id}`, data)
    }
    async login(email, password) {
        return await this.post('/login', { email, password })
    }
    async recuperar_senha(email) {
        return await this.put(`/admin/nova-senha/${email}`, {})
    }

    async alterar_senha(corruent_user_id, new_pass) {
        let res = await this.put(`v1/admin/redefinir-senha/${corruent_user_id}`, { password: new_pass })
    }



}

export default App;