import { title } from "process";
import { Post } from "../types/Post";


//Type para adicionar um post
type addAction = {
    type: 'add';
    payload: {
        title: string,
        body: string
    }
}

//Type para remover
type removeAction = {
    type: 'remove';
    payload: {id: number}
}

//Type que junta todos type e armazena no actions
export type PostActions = addAction | removeAction;

//Reducer com o posts tipado e actions tipado que vai ser a ação para executar
export const postReducer = (posts: Post[], actions: PostActions) => {


//Ver qual ação executará
    switch(actions.type) {
        case 'add':
            return [...posts, {
                id: posts.length,
                title: actions.payload.title,
                body: actions.payload.body
                
            }]

        case 'remove':
            return posts.filter(i => i.id !== actions.payload.id);


        default:
             return posts
    }
}