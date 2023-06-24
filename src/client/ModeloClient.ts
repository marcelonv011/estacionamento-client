import { Modelo } from "@/model/Modelo";
import axios, { AxiosInstance, AxiosResponse } from "axios";


class ModeloClient {

    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<Modelo> {
        try {
            return (await this.axiosClient.get<Modelo>(`?id=${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/lista`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(modelo: Modelo) : Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, modelo)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }
    
    public async atualizar(modelo: Modelo) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${modelo.id}`, modelo)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async excluir(id: number) : Promise<string> {
        try {
            const response: AxiosResponse<string> = await this.axiosClient.delete(``, { params: { id } });
      return response.data;
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

}

export default new ModeloClient();