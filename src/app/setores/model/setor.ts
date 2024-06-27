import { Ativo } from "./ativo";

export interface Setor {
	_id: string;
	nome: string;
	porcentagem: number|null|undefined;
	valor: number|null|undefined;
	ativos?: Ativo[];
}

