import { Configuracao } from "@/model/Configuracao";
import axios, { AxiosInstance } from "axios";

class ConfiguracaoClient {

    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/configuracao',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<Configuracao> {
        try {
            return(await this.axiosClient.get<Configuracao>(`?id=${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(configuracao: Configuracao) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, configuracao)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async atualizar(configuracao: Configuracao) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${configuracao.id}`, configuracao)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

}

export default new ConfiguracaoClient();