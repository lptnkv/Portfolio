import React from "react";
import photo from "../img/photo.jpg"

export default function Photo(){
    return (
        <img src={photo} className="photo" alt="Тут фоточка"></img>
    )
}