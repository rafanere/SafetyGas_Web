import React, { Component } from 'react'
import Nav from "./Nav"
import laranja from "../imagens/logo_laranja_vector.png"
import "../index.css"

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
          <div id="logo" />
          <img src={laranja} alt="safetygas" width="200" height="128" />
          <Nav />
        </header>
            </div>
        )
    }
}
