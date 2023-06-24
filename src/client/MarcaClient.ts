import { Marca } from "@/model/Marca";
import axios, { AxiosInstance, AxiosResponse } from "axios";

 

 class MarcaClient {

    private axiosClient : AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<Marca> {
        try{
            return(await this.axiosClient.get<Marca>(`?id=${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<Marca[]> {
        try {
            return (await this.axiosClient.get<Marca[]>(`/lista`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(marca: Marca) : Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, marca)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }
    
    public async atualizar(marca: Marca) : Promise<string> {
        try{
            return (await this.axiosClient.put(`/${marca.id}`, marca)).data
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
 
export default new MarcaClient();