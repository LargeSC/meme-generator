import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import "./style.css"
/**
TODO: Adjust the meme's font size to a value that is relative to the screen width
TODO: Create a branch where you can drag the text for correct placement.
TODO: Figure out if possible to save as a whole image including text.
 */
export default function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}
