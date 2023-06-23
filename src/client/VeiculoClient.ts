import { Veiculo } from "@/model/Veiculo";
import { Cor } from "@/model/enum/Cor";
import { Tipo } from "@/model/enum/Tipo";
import axios, { AxiosInstance, AxiosResponse } from "axios";


class VeiculoClient {

    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<Veiculo> {
        try {
            return (await this.axiosClient.get<Veiculo>(`?id=${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Veiculo[]> {
        try {
            return (await this.axiosClient.get<Veiculo[]>(`/lista`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }
    public async findCor(): Promise<Cor[]> {
        try {
          const response: AxiosResponse<Cor[]> = await this.axiosClient.get("/colores");
          return response.data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }

      public async findTipo(): Promise<Tipo[]> {
        try {
          const response: AxiosResponse<Tipo[]> = await this.axiosClient.get("/tipo");
          return response.data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }

    public async cadastrar(veiculo: Veiculo) : Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, veiculo)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async atualizar(veiculo: Veiculo) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${veiculo.id}`, veiculo)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async excluir(veiculo: Veiculo) : Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${veiculo.id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }
}

export default new VeiculoClient();