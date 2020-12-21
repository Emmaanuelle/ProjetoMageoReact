import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Container } from "./styles";
import api from "../../services/api";
import {login} from "../../services/auth";


function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();


    async function fazerLogin(e) {

        e.preventDefault();

        const data = { email, senha };
        try {
            const resposta = await api.post("/login", data);

        login(resposta.data.token)


            alert("Login Realizado com Sucesso");
            history.push("/questao");
        } catch (error) {
            console.log(error)
            setError("Seus dados não estão cadastrados!")
        }
    }
        return (

            <Container>
                <Form onSubmit={fazerLogin}>
                    {error && <p>{error}</p>}
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <button type="submit">Entrar</button>
                    <hr />
                    <Link to="/cadastro">Criar Cadastro</Link>
                </Form>
            </Container>


        )

    }


    export default (Login)