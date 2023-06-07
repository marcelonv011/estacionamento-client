import { ComputedRef } from "vue";
import { AbstractEntity } from "./AbstractEntity";
import { Modelo } from "./Modelo";
import { Cor } from "./enum/Cor";
import { Tipo } from "./enum/Tipo";

export class Veiculo extends AbstractEntity{
    placa!: string
    modelo!: Modelo
    cor!: Cor
    tipo!: Tipo
    ano!: number
}