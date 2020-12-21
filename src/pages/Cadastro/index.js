import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Container } from "./styles";
import api from "../../services/api"


function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [idade, setIdade] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();


  async function cadastrar(e) {

    e.preventDefault();

    const data = { nome, email, senha, idade };
    try {
      const resposta = await api.post("/user", data)
      alert("Cadastro Realizado com Sucesso")
      history.push("/");
    } catch (error) {

      setError("Conta Cadastrada")
    }

  }

  return (
    <Container>
      <Form onSubmit={cadastrar}>

        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Nome de usuário"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Endereço de e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />
        <input
          type="number"
          placeholder="idade"
          value={idade}
          onChange={e => setIdade(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
        <hr />
        <Link to="/">Fazer login</Link>
      </Form>
    </Container>

  )

}




export default Cadastro;