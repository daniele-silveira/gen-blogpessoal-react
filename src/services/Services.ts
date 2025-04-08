import axios from "axios";

const api = axios.create({
    baseURL: "https://gen-blogpessoal.onrender.com"
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

/* Os arquivos .tsx são usados para componentes React que usam JSX, enquanto os arquivos .ts são usados para lógica de negócios, modelos de dados, e definições de tipo. 
*/