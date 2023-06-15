import { Movimentacao } from "@/model/Movimentacao";
import axios, { AxiosInstance } from "axios";


export class MovimentacaoClient {

    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacao',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`?id=${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Movimentacao[]> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/lista`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(movimentacao: Movimentacao) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, movimentacao)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

}