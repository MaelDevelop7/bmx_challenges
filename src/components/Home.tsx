import React, { JSX } from "react";
import { title } from "./Classes/globals";
import './styles/Home.css';


export default function Home():JSX.Element{
    return(
        <div className="home">
            <h1 className="App-title">{title}</h1>
        </div>
    )
}