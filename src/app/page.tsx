'use client'

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import { PostContextProvider } from "./context/PostContext";


export default function Home() {
  return (
    <PostContextProvider >
      <div className="flex flex-col items-center">
        <h1 className="text-center p-5 text-3xl">Post de Hoje</h1>
        <Header/>
        <PostList/>
        <Footer/>
      </div>
    </PostContextProvider>
  );
}
