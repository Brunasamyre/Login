import { useState } from "react";
import imagens from "../../Imagens/Meu projeto (5).png"
import { LayoutComponents } from "../../components/LayoutComponents/Index";



export default Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <LayoutComponents>
            <form className="login-form">

                <span className="login-form-title">Bem-vindo!</span>

                <span className="login-form-title">

                    <img src={imagens} alt="plata" />
                </span>
                <div className="wrap-input">
                    <input placeholder="Email" className={email !== "" ? 'has-val input' : 'input'} type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    |<span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input placeholder="Senha" className={password !== "" ? 'has-val input' : 'input'} type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    |<span className="focus-input" data-placeholder="Senha"></span>
                </div>
                <div className="container-login-form-btn">
                    <button className="login-form-btn">Login</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Não possui conta?</span>

                    <a className="txt2" href="/register"> Criar conta. </a>
                </div>
            </form>
        </LayoutComponents>
    )
} 