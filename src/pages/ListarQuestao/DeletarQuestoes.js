import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import api from '../../services/api';


export default function DeletarQuestoes(props) {
  const questoes = props.questoes

  const [error, setError] = useState("");
  const [carregar, setCarregando] = useState(false);

   // const history = useHistory();
   async function deletarQuestoes(e) {

    e.preventDefault();

    try {
    if(window.confirm("Deseja Deletar a questão ?")){
        setCarregando(true)
        await api.delete(`/questao/${questoes.id}`)
        alert("Questão Deletada com Sucesso")
        setTimeout(()=>{window.location.reload()},300)  //recarregar a pagina
        // history.push('/quiz')
    }else{
        alert('Não deletada')
    }
    } catch (error) {
      console.log(error.response.data)
        setError(error.response.data.error)
    }

  }


  return (
      <div>
          {error&&<p>{error}</p>}
          {carregar&&<p>Carregando</p>}
          <Button style={{backgroundColor:"red",color:'white'}} onClick={deletarQuestoes}>Deletar</Button>
      </div>
  );
}