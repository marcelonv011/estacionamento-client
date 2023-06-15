import { Marca } from "@/model/Marca";
import axios, { AxiosInstance } from "axios";

 

 export class MarcaClient {

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

    public async cadastrar(marca: Marca) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, marca)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }
    
}
 