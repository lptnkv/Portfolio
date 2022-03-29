import React from "react"
import twitter from "../img/twitter.png"
import facebook from "../img/facebook.png"
import insta from "../img/insta.png"
import github from "../img/github.png"

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <img src={twitter}></img>
                <img src={facebook}></img>
                <img src={insta}></img>
                <img src={github}></img>
            </div>
        </div>
    )
}