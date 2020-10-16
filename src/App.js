import React from "react"
import { First } from "./components/first";
import { Header } from "./components/header";
import { Second } from "./components/second";
import { Third } from "./components/third";
const App = ()=>{
    return (
        <div className="wrapper">
            <Header></Header>
            <First></First>
            <Second></Second>
            <Third></Third>
        </div>
    );
};


export default App;
