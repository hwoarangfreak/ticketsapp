import axios from 'axios'

export function registerUser(values) {
    return () => {
        return axios.post('http://localhost:3001/users', {
            username: values.username,
            password: values.password,
            firstname: values.firstname,
            secondname: values.secondname,
            email: values.email,
            access: 'user'
        })
            .then((values) => {
            return values.data;
        })
    }
}
