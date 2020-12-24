import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Container } from "./styles";
import api from "../../services/api"


function Questao() {
    const [pergunta, setPergunta] = useState("");
    const [resposta, setResposta] = useState("");
    const [dica, setDica] = useState("");
    const [tipo, setTipo] = useState("");
    const [dificuldade_nivel, setDificuldade_nivel] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();



    
    async function cadastrarQuestoes(e) {

        e.preventDefault();

        const data = { pergunta, resposta, dica, tipo, dificuldade_nivel };
        try {
            const resposta = await api.post("/questao", data)
            alert("Questão cadastrada com Sucesso")
            
        } catch (error) {
            console.log(error.response.data)
            setError("Questão invalida")
        }

    }

    return (
        <Container>
            <Form onSubmit={cadastrarQuestoes}>

                {error && <p>{error}</p>}
                <input
                    type="text"
                    placeholder="Pergunta"
                    value={pergunta}
                    onChange={e => setPergunta(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Resposta"
                    value={resposta}
                    onChange={e => setResposta(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="dica"
                    value={dica}
                    onChange={e => setDica(e.target.value)}
                />
                 <input
                    type="text"
                    placeholder="Tipo"
                    value={tipo}
                    onChange={e => setTipo(e.target.value)}
                />
                  <input
                    type="text"
                    placeholder="dificuldade_nivel"
                    value={dificuldade_nivel}
                    onChange={e => setDificuldade_nivel(e.target.value)}
                />
                
          
                <button type="submit">Cadastrar Questao</button>
                <hr />             
            </Form>
        </Container>

    )

}

export default Questao;