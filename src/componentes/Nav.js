import React, { Component } from 'react'
import "../index.css"

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav>     
            <a href="#mainContent" title="Link">Home</a>
            <a href="#" title="Link">Contato</a>
            <a href="#" title="Link">Sobre a Empresa</a>
            <a href="#" title="Link">Como Funciona</a>
          </nav>
            </div>
        )
    }
}
