import { Condutor } from "@/model/Condutor";
import axios, { AxiosInstance, AxiosResponse } from "axios";

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
            return (await this.axiosClient.get<Condutor>(`/${id}`)).data
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

    public async atualizar(id: number, condutor: Condutor): Promise<string> {
        try {
          return (await this.axiosClient.put<string>(`/${id}`, condutor)).data;
        } catch (error: any) {
          return Promise.reject(error.response);
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

export default new CondutorClient();