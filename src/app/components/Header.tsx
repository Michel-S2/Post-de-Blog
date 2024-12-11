'use client'

import { useContext, useState } from "react"
import { PostContext } from "../context/PostContext"

export const Header = () => {

    const [title, setTitle] = useState<string>(''); // Estado para armazenar o título
    const [message, setMessage] = useState<string>(''); // Estado para armazenar a mensagem
    const postCtx = useContext(PostContext); // Usando o contexto

    //Função para adicionar
    const handleAdd = () => {
        if (title && message ) { //Verificação pra ver se tem algo nos input

          postCtx?.dispatch({ //Se tiver algo no context pega o dispatch e executa a função add
            type: 'add',
            payload: {title: title, body: message}
          })
          setTitle(''); // Limpa o campo de título
          setMessage(''); // Limpa o campo de mensagem
        }
      };

    return (
        <header className="w-5/12 border-2 border-green-400 mb-5">   
            <div className="flex justify-center flex-col p-3">
                <input 
                type="text" 
                placeholder="Digite um titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-md h-10 border-none outline-none text-black mb-3 p-3"/>
                <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite um corpo"
                className="rounded-md  border-none outline-none text-black mb-3 p-3"/>
                <button onClick={handleAdd} className="bg-sky-600 py-3 rounded-md hover:bg-sky-700">Adicionar</button>
            </div>
        </header>
    )
}