import axios, { AxiosPromise, AxiosResponse } from 'axios'
import { UserProps } from './User';

interface SyncProps {
    id?: number; 
}

export class ApiSync<T extends SyncProps> {
    constructor(public rootUrl: string) { }

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id})}`)
    } 

    save(data: T): AxiosPromise {
        const { id } = data;
        if (id) {
            return axios.put(`${this.rootUrl}/${data.id}`, data);
        } else {
            return axios.post(this.rootUrl, data)
        }
    }
}