import { useState } from "react"
import { LayoutComponents } from "../../../components/LayoutComponents/Index"

import Imagens from '../../../Imagens/Meu projeto (5).png'

export const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  return (
    <LayoutComponents>
       <form className="login-form">

<span className="login-form-title">Criar conta</span>

<span className="login-form-title">
    <img src={Imagens} alt="plata"></img>

    
</span>

<div className="wrap-input">
    <input className={name !== "" ? 'has-val input' : 'input'} type="name +" value={name } onChange={e => setEmail(e.target.value)}></input>
    |<span className="focus-input" data-placeholder="Nome de usuário"></span>
</div>

<div className="wrap-input">
    <input className={email !== "" ? 'has-val input' : 'input'} type="email" value={email} onChange={e => setName(e.target.value)}></input>
    |<span className="focus-input" data-placeholder="Email"></span>
</div>

<div className="wrap-input">
    <input className={password !== "" ? 'has-val input' : 'input'} type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
    |<span className="focus-input" data-placeholder="Senha"></span>
</div>
<div className="container-login-form-btn">
    <button className="login-form-btn">Login</button>
</div>

<div className="text-center">
    <span className="txt1">Já possui conta?</span>

    <a className="txt2" href="/login">Acessar com Email e Senha.</a>
</div>
</form>
    </LayoutComponents>
  )
}