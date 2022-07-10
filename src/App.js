import React from "react"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js"

function App(){
    return(
        <>
            {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter> */}
            <Home />
        </>
    )
}

export default App
