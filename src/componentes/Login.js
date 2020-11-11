import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                    <a className="tittle">Seja bem vindo, faça login para continuar </a>
                    <input className="input" type="email" placeholder="Informe seu email" />
                    <input className="input" type="password" placeholder="Informe sua senha" />
                    <button className="button"> Entrar com e-mail agora </button>
                    <button className="button"> Cadastre com e-mail agora </button>
            </div>
        )
    }
}
