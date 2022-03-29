import React from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Photo from "./components/Photo"


export default function App() {
    return (
        <div className="container">
            <div className="card">
                <Photo />
                <Main />
                <Footer />
            </div>

        </div>
    )
} 