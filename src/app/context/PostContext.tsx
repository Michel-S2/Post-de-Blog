'use client'

import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer, useState } from "react";
import { Post } from "../types/Post";
import { PostActions, postReducer } from "../reducers/postReducer";

const STORAGE_KEY = 'PostContent'

type PostContextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>; //Dispatch tipado já com o actions
}

export const PostContext = createContext<PostContextType | null>(null);

type Props = {
    children: ReactNode;
}

export const PostContextProvider = ({children}: Props) => {
    //Adicionamos o reducer
    const [posts, dispatch] = useReducer(postReducer, []);


    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        storedPosts.forEach((post: Post) => dispatch({ type: 'add', payload: post })); // Adicione uma ação para inicializar os posts
    }, []);

    useEffect(() => {
         localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }, [posts])


    return (
        <PostContext.Provider value={{posts, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}

//Criamos uma função e retornarmos o useContext com  o PostContext
export const usePosts = () => useContext(PostContext);