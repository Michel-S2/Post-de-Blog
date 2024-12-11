'use client'

import { createContext, Dispatch, ReactNode, useReducer, useState } from "react";
import { Post } from "../types/Post";
import { PostActions, postReducer } from "../reducers/postReducer";

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


    return (
        <PostContext.Provider value={{posts, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}