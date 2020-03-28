import axios from 'axios'
import api from './api'

const ajax = axios.create({
    baseURL: api.baseURL
})

export const getTodo = () => {
    return ajax.get(api.todos)
}