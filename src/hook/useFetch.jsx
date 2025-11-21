import { useState, useEffect } from "react"

//Custom Hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //refatorando post -> Melhora de estrutura(Separando-o em várias partes)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    //LOADING
    const [loading, setLoading] = useState(false)

    //Tratando Erros
    const [error, setError] = useState(null)

    //Padronizando os posts
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
    }

    useEffect(() => {//Observa se os dados mudaram

        //Buscando dados
        const fetchData = async () => {
            try {
                setLoading(true)

                const res = await fetch(url)
                const json = await res.json()

                setLoading(false)
                setData(json)
            } catch (error) {//Tratamento de erro
                setError("Houve um erro ao carregar os dados!!")
            }
        }

        fetchData()

    }, [url, callFetch])

    //refatorando post
    useEffect(() => {

        const httpRequest = async () => {//Função para requisição HTTP
            let json

            if (method === "POST") {
                setLoading(true)

                let fetchOpitions = [url, config]//Transforma as informações em um array válido em JSON
                const res = await fetch(...fetchOpitions)//Adição do Produto no JSON
                json = res.json()//Transformar em JSON

                setLoading(false)
            }

            setCallFetch(json)
        }

        httpRequest()

    }, [config, method, url])

    return { data, httpConfig, loading, error }

}