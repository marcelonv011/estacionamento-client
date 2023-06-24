import { Condutor } from "@/model/Condutor";
import axios, { AxiosInstance } from "axios";

class CondutorClient {

    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`?id=${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Condutor[]> {
        try {
            return (await this.axiosClient.get<Condutor[]>(`/lista`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(condutor: Condutor) : Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, condutor)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async atualizar(condutor: Condutor) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${condutor.id}`, condutor)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async excluir(id: number) : Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

}

export default new CondutorClient();