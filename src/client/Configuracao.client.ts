import axios, { AxiosInstance } from "axios";

export class ConfiguracaoClient {

    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/configuracao',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }

    


}